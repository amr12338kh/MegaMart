"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Please enter your name",
  }),
  user_last_name: z.string().optional(),
  user_country: z.string().min(2, {
    message: "Please enter your country",
  }),
  user_email: z.string().email({
    message: "Please enter a valid email address",
  }),
  inquiry_type: z.string({
    required_error: "Please select an inquiry type",
  }),
  message: z.string().min(10, {
    message: "Your message should be at least 10 characters",
  }),
});

const Contact = () => {
  let formRef = useRef<HTMLFormElement | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_last_name: "",
      user_country: "",
      user_email: "",
      inquiry_type: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setFormStatus("submitting");

      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 1000)
      );

      setFormStatus("success");

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
        variant: "default",
      });

      setTimeout(() => {
        form.reset();
        setFormStatus("idle");
      }, 2000);
    } catch (error) {
      console.error("Error in form submission:", error);
      setFormStatus("error");

      toast({
        title: "Message Failed",
        description:
          "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 2000);
    }
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        className="space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="user_name"
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
            name="user_last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name{" "}
                  <span className="text-muted-foreground text-xs">
                    (optional)
                  </span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john.doe@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user_country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="United States" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="inquiry_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the nature of your inquiry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Question</SelectItem>
                  <SelectItem value="seller">Become a Seller</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="partnership">
                    Partnership Opportunity
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your inquiry in detail..."
                  {...field}
                  rows={5}
                  className="resize-y min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            className="w-full sm:w-auto"
            type="submit"
            disabled={formStatus !== "idle"}
          >
            {formStatus === "idle" && (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
            {formStatus === "submitting" && (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            )}
            {formStatus === "success" && (
              <>
                <Check className="mr-2 h-4 w-4" />
                Message Sent
              </>
            )}
            {formStatus === "error" && <>Failed to Send</>}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground pt-2">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and consent to the processing of your personal data.
        </p>
      </form>
    </Form>
  );
};

export default Contact;
