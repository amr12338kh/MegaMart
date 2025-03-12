"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
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
  const paymentOption = form.watch("paymentOption");
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  useEffect(() => {
    setShowNewCardForm(paymentOption === "new");
  }, [paymentOption]);

  return (
    <Card className="border shadow-sm">
      <CardHeader className="px-4 py-3">
        <CardTitle className="text-lg">Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <RadioGroup
          onValueChange={(value) => {
            form.setValue("paymentOption", value as "saved" | "new");
          }}
          value={paymentOption}
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
                        form.watch("savedCardId") === card.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-muted-foreground/50"
                      )}
                      onClick={() => form.setValue("savedCardId", card.id)}
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
              <div className="mt-3 flex items-center">
                <input
                  type="checkbox"
                  id="save-card"
                  className="mr-2"
                  onChange={(e) => form.setValue("saveInfo", e.target.checked)}
                />
                <label htmlFor="save-card" className="text-sm">
                  Save this card for future purchases
                </label>
              </div>
            </div>
          )}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default PaymentOptions;
