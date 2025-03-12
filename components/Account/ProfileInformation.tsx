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
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormValues } from "@/types";
import { useForm } from "react-hook-form";
import { profileFormSchema } from "@/lib/schema";
import { useToast } from "../ui/use-toast";
import { Checkbox } from "../ui/checkbox";
import TabsCardWrapper from "./TabsCardWrapper";

const ProfileInformation = () => {
  const { toast } = useToast();
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-123-4567",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
      marketingEmails: true,
    },
  });

  const onProfileSubmit = (data: ProfileFormValues) => {
    setIsUpdatingProfile(true);

    setTimeout(() => {
      setIsUpdatingProfile(false);
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 1000);
  };

  return (
    <TabsCardWrapper
      tabValue="profile"
      title="Profile Information"
      description="Update your account information and preferences."
    >
      <Form {...profileForm}>
        <form
          onSubmit={profileForm.handleSubmit(onProfileSubmit)}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={profileForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={profileForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={profileForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={profileForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={profileForm.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              control={profileForm.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={profileForm.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State/Province</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={profileForm.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Postal Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={profileForm.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={profileForm.control}
            name="marketingEmails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 pt-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I want to receive marketing emails and updates
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-4"
            disabled={isUpdatingProfile}
          >
            {isUpdatingProfile ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </Form>
    </TabsCardWrapper>
  );
};

export default ProfileInformation;
