import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CreditCard } from "lucide-react";
import { FaPaypal } from "react-icons/fa6";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormData } from "@/types";

interface Props {
  form: UseFormReturn<CheckoutFormData>;
}

const ShippingInformationForm = ({ form }: Props) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john.doe@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Address</h3>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Province</FormLabel>
                <FormControl>
                  <Input placeholder="NY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP/Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="10001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer data-[state=checked]:border-primary">
                    <RadioGroupItem value="creditcard" id="creditcard" />
                    <label
                      htmlFor="creditcard"
                      className="flex items-center space-x-2 cursor-pointer w-full"
                    >
                      <CreditCard className="h-5 w-5 text-muted-foreground" />
                      <span>Credit Card</span>
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer data-[state=checked]:border-primary">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <label
                      htmlFor="paypal"
                      className="flex items-center space-x-2 cursor-pointer w-full"
                    >
                      <FaPaypal className="h-5 w-5 text-muted-foreground" />
                      <span>PayPal</span>
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ShippingInformationForm;
