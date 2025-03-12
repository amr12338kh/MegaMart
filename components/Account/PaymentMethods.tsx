import { useLocalStorage } from "@/hooks/use-local-storage";
import { CreditCardFormValues, CreditCardItem } from "@/types";
import { Plus, Trash2, CheckCircle2, Shield } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { creditCardSchema } from "@/lib/schema";
import { Form } from "../ui/form";
import CreditCardForm from "@/components/checkout/CreditCardForm";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { getCardType } from "@/lib/helpers";

const STORAGE_KEY = "user-cards";
const DEFAULT_CARD_KEY = "default-card-id";

const PaymentMethods = () => {
  const { toast } = useToast();
  const [showAddCard, setShowAddCard] = useState(false);
  const { getItem, setItem } = useLocalStorage(STORAGE_KEY);
  const { getItem: getDefaultCard, setItem: setDefaultCard } =
    useLocalStorage(DEFAULT_CARD_KEY);

  const [cards, setCards] = useState<CreditCardItem[]>(() => {
    const savedCards = getItem();
    return Array.isArray(savedCards) ? savedCards : [];
  });

  const [defaultCardId, setDefaultCardId] = useState<string | null>(() => {
    const savedDefaultId = getDefaultCard();
    if (savedDefaultId && cards.find((card) => card.id === savedDefaultId)) {
      return savedDefaultId;
    }
    return cards.length > 0 ? cards[0].id : null;
  });

  const form = useForm<CreditCardFormValues>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
  });

  useEffect(() => {
    setItem(cards);
  }, [cards, setItem]);

  useEffect(() => {
    setDefaultCard(defaultCardId);
  }, [defaultCardId, setDefaultCard]);

  useEffect(() => {
    if (!defaultCardId && cards.length > 0) {
      setDefaultCardId(cards[0].id);
    }
    if (defaultCardId && cards.length === 0) {
      setDefaultCardId(null);
    }
  }, [cards, defaultCardId]);

  const handleAddCard = (data: CreditCardFormValues) => {
    const cardData: CreditCardItem = {
      id: Date.now().toString(),
      cardName: data.cardName,
      cardNumber: data.cardNumber,
      expiry: data.expiry,
      cvv: data.cvv,
    };

    setCards((prevCards) => [...prevCards, cardData]);

    if (cards.length === 0) {
      setDefaultCardId(cardData.id);
    }

    form.reset();
    setShowAddCard(false);

    toast({
      title: "Card Added",
      description: "Your payment method has been added successfully.",
      variant: "default",
    });
  };

  const handleDeleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));

    if (defaultCardId === id && cards.length > 1) {
      const newDefault = cards.find((card) => card.id !== id);
      if (newDefault) {
        setDefaultCardId(newDefault.id);
      }
    }

    toast({
      title: "Card Removed",
      description: "Your payment method has been removed successfully.",
    });
  };

  const setAsDefault = (id: string) => {
    setDefaultCardId(id);
    toast({
      title: "Default Card Updated",
      description: "Your default payment method has been updated.",
    });
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <CardTitle className="text-xl flex items-center gap-2">
          Payment Methods
        </CardTitle>
        <CardDescription>
          Manage your payment methods securely for faster checkout
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        {cards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cards.map((card) => {
              const isDefault = card.id === defaultCardId;
              const cardType = getCardType(card.cardNumber);

              return (
                <div
                  key={card.id}
                  className={cn(
                    "border rounded-lg transition-all",
                    isDefault
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted-foreground/50 hover:shadow-sm"
                  )}
                >
                  <div className="px-4 py-4 flex items-center justify-between border-b border-border/50">
                    <div className="font-medium text-sm">{cardType}</div>
                    {isDefault && (
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        Default
                      </Badge>
                    )}
                  </div>

                  <div className="px-4 py-3">
                    <div className="font-mono text-base mb-1">
                      •••• •••• •••• {card.cardNumber.slice(-4)}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center justify-between">
                      <div className="truncate max-w-32">{card.cardName}</div>
                      <div>Exp: {card.expiry}</div>
                    </div>
                  </div>

                  <div className="px-4 py-2 border-t border-border/50 flex justify-end gap-2 bg-muted/30">
                    {!isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setAsDefault(card.id)}
                        className="h-8 text-xs"
                      >
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Set Default
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteCard(card.id)}
                      className="h-8 text-xs text-destructive hover:text-destructive border-destructive/30 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-8 text-center border border-dashed rounded-lg">
            <Shield className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              No payment methods added yet.
            </p>
            <p className="text-sm text-muted-foreground/80 mt-1">
              Add a payment method to speed up your checkout experience.
            </p>
          </div>
        )}

        {!showAddCard ? (
          <Button
            variant="outline"
            className="w-full mt-4 hover:bg-primary/5"
            onClick={() => setShowAddCard(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        ) : (
          <Card className="mt-6 border-none shadow-none">
            <CardHeader className="pb-2 px-0">
              <CardTitle className="text-lg flex items-center gap-2">
                Add New Payment Method
              </CardTitle>
              <CardDescription>
                Your card information is stored securely
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleAddCard)}
                  className="space-y-4"
                >
                  <CreditCardForm form={form} />

                  <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 pt-4">
                    <Button type="submit" className="sm:px-6">
                      Save Card
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowAddCard(false);
                        form.reset();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
