import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { formatCardNumber, formatExpiryDate } from "@/lib/helpers";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormData, CreditCardFormValues } from "@/types";

interface Props {
  form: UseFormReturn<CheckoutFormData | CreditCardFormValues | any>;
}

const CreditCardForm = ({ form }: Props) => {
  return (
    <div className="mt-4 space-y-4">
      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field: { onChange, ...restField } }) => (
          <FormItem>
            <FormLabel>Card Number</FormLabel>
            <FormControl>
              <Input
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                onChange={(e) => {
                  const formattedValue = formatCardNumber(e.target.value);
                  e.target.value = formattedValue;
                  onChange(formattedValue);
                }}
                {...restField}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="cardName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name on Card</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="expiry"
          render={({ field: { onChange, ...restField } }) => (
            <FormItem>
              <FormLabel>Expiration Date</FormLabel>
              <FormControl>
                <Input
                  placeholder="MM/YY"
                  maxLength={5}
                  onChange={(e) => {
                    const formattedValue = formatExpiryDate(e.target.value);
                    e.target.value = formattedValue;
                    onChange(formattedValue);
                  }}
                  {...restField}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CVV</FormLabel>
              <FormControl>
                <Input
                  placeholder="123"
                  maxLength={3}
                  type="password"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.value = target.value
                      .replace(/\D/g, "")
                      .substring(0, 3);
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default CreditCardForm;
