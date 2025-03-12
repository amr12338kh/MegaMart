"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { PasswordFormValues } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordFormSchema } from "@/lib/schema";
import { useToast } from "../ui/use-toast";
import PaymentMethods from "./PaymentMethods";
import TabsCardWrapper from "./TabsCardWrapper";

const SecuritySettings = () => {
  const { toast } = useToast();
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onPasswordSubmit = (data: PasswordFormValues) => {
    setIsUpdatingPassword(true);

    setTimeout(() => {
      setIsUpdatingPassword(false);
      passwordForm.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      });
    }, 1000);
  };

  return (
    <TabsCardWrapper
      tabValue="security"
      title="Security Settings"
      description="Update your password and security preferences."
    >
      <Form {...passwordForm}>
        <form
          onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
          className="space-y-6"
        >
          <FormField
            control={passwordForm.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Current Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={passwordForm.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={passwordForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm New Password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full mt-4"
            disabled={isUpdatingPassword}
          >
            {isUpdatingPassword ? "Updating..." : "Change Password"}
          </Button>
        </form>
      </Form>
      <Separator className="my-8" />
      <PaymentMethods />
    </TabsCardWrapper>
  );
};

export default SecuritySettings;
