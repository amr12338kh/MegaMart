"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { CreditCard, Badge } from "lucide-react";
import CreditCardForm from "./CreditCardForm";
import { PaymentOptionsProps } from "@/types";
import { getCardType } from "@/lib/helpers";

const PaymentOptions = ({
  form,
  savedCards,
  defaultCardId,
}: PaymentOptionsProps) => {
  const currentPaymentOption = form.getValues("paymentOption");
  if (!currentPaymentOption) {
    if (savedCards.length === 0) {
      form.setValue("paymentOption", "new", { shouldValidate: false });
    } else {
      form.setValue("paymentOption", "saved", { shouldValidate: false });
      if (!form.getValues("savedCardId")) {
        const cardToSelect = defaultCardId?.toString() || savedCards[0]?.id;
        form.setValue("savedCardId", cardToSelect, { shouldValidate: false });
      }
    }
  }

  const paymentOption = form.watch("paymentOption");
  const savedCardId = form.watch("savedCardId");
  const saveInfo = form.watch("saveInfo");

  const handlePaymentOptionChange = (value: string) => {
    const newValue = value as "saved" | "new";
    form.setValue("paymentOption", newValue, { shouldValidate: false });

    if (newValue === "new") {
      form.setValue("savedCardId", undefined, { shouldValidate: false });
    } else if (newValue === "saved" && !savedCardId && savedCards.length > 0) {
      const cardToSelect = defaultCardId?.toString() || savedCards[0]?.id;
      form.setValue("savedCardId", cardToSelect, { shouldValidate: false });
    }
  };

  const handleCardSelect = (cardId: string) => {
    form.setValue("savedCardId", cardId, { shouldValidate: false });
  };

  const handleSaveCardChange = (checked: boolean) => {
    form.setValue("saveInfo", checked, { shouldValidate: false });
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <RadioGroup
          value={paymentOption}
          onValueChange={handlePaymentOptionChange}
          className="space-y-4"
        >
          {savedCards.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="saved" id="option-saved" />
                <Label htmlFor="option-saved" className="font-medium">
                  Pay with saved card
                </Label>
              </div>

              {paymentOption === "saved" && (
                <div className="ml-6 space-y-3">
                  {savedCards.map((card) => (
                    <div
                      key={card.id}
                      className={cn(
                        "border rounded-lg transition-all cursor-pointer",
                        savedCardId === card.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50"
                      )}
                      onClick={() => handleCardSelect(card.id)}
                    >
                      <div className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">
                              {getCardType(card.cardNumber)}
                              <span className="font-mono ml-2">
                                •••• {card.cardNumber.slice(-4)}
                              </span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Expires {card.expiry}
                            </div>
                          </div>
                        </div>
                        {Number(card.id) === defaultCardId && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            Default
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="option-new" />
            <Label
              htmlFor="option-new"
              className="font-medium flex items-center"
            >
              {savedCards.length === 0
                ? "Add payment method"
                : "Use a new card"}
            </Label>
          </div>

          {paymentOption === "new" && (
            <div className="ml-6 pt-2">
              <CreditCardForm form={form} />
              <div className="mt-3 flex items-center space-x-2">
                <Checkbox
                  id="save-card"
                  checked={saveInfo || false}
                  onCheckedChange={handleSaveCardChange}
                />
                <Label htmlFor="save-card" className="text-sm font-normal">
                  Save this card for future purchases
                </Label>
              </div>
            </div>
          )}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PaymentOptions;
