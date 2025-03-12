"use client";

import { useState, useRef, useEffect } from "react";
import { useShoppingCart } from "@/context/ShoppingCartProvider";
import { CheckoutFormData, ProductProps, CreditCardItem } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Lock, ShoppingBag, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import OrderComplete from "./OrderComplete";
import { checkoutFormSchema } from "@/lib/schema";
import { formatPrice } from "@/lib/helpers";
import OrderSummary from "./OrderSummary";
import ShippingInformationForm from "./ShippingInformationForm";
import { useLocalStorage } from "@/hooks/use-local-storage";
import PaymentOptions from "./PaymentOptions";
import EmptyCheckout from "./EmptyCheckout";

interface Props {
  products: ProductProps[];
}

const CARDS_STORAGE_KEY = "user-cards";
const DEFAULT_CARD_KEY = "default-card-id";

const Checkout = ({ products }: Props) => {
  const { toast } = useToast();
  const { calculateTotalPrice, clearCart, cartItems } = useShoppingCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { getItem: getCards, setItem: setCards } =
    useLocalStorage(CARDS_STORAGE_KEY);
  const { getItem: getDefaultCard, setItem: setDefaultCard } =
    useLocalStorage(DEFAULT_CARD_KEY);

  const [savedCards, setSavedCards] = useState<CreditCardItem[]>(() => {
    const cards = getCards();
    return Array.isArray(cards) ? cards : [];
  });
  const defaultCardId =
    getDefaultCard() || (savedCards.length > 0 ? savedCards[0].id : null);

  const subtotal: number = calculateTotalPrice(products);
  const shipping: number = 10;
  const tax: number = Math.round(subtotal * 0.005);
  const total = subtotal + shipping + tax;

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
      saveInfo: false,
      paymentMethod: "creditcard",
      paymentOption: savedCards.length > 0 ? "saved" : "new",
      savedCardId: defaultCardId || "",
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);

    if (data.paymentOption === "new" && data.saveInfo && data.cardNumber) {
      const newCard: CreditCardItem = {
        id: Date.now().toString(),
        cardNumber: data.cardNumber,
        cardName: data.cardName || "",
        expiry: data.expiry || "",
        cvv: data.cvv || "",
      };

      const updatedCards = [...savedCards, newCard];
      setSavedCards(updatedCards);

      setCards(updatedCards);

      if (savedCards.length === 0) {
        setDefaultCard(newCard.id);
      }
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();

      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }

      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your purchase!",
      });
    }, 2000);
  };

  useEffect(() => {
    audioRef.current = new Audio("/sounds/payment-success.mp3");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (orderComplete) return <OrderComplete />;
  if (cartItems.length === 0) return <EmptyCheckout />;

  return (
    <div className="container py-8 min-h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="scroll-m-20 text-2xl sm:text-3xl font-extrabold tracking-tight">
          Checkout
        </h1>
        <Link
          href="/cart"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="mr-2 group-hover:-translate-x-1 duration-200 transition-transform"
          />
          Back to Cart
        </Link>
      </div>
      <Separator className="mb-8" />

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <ShippingInformationForm form={form} />

              {form.watch().paymentMethod === "creditcard" && (
                <PaymentOptions
                  form={form}
                  savedCards={savedCards}
                  defaultCardId={defaultCardId}
                />
              )}

              <div className="flex items-center justify-center mt-8">
                <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
                  <Lock size={14} />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </div>

              <div className="sm:hidden">
                <OrderSummary products={products} />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : `Pay $${formatPrice(total)}`}
              </Button>
            </form>
          </Form>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <OrderSummary products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
