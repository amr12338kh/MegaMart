import * as z from "zod";

export const checkoutFormSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(5, "Valid ZIP code required"),
    country: z.string().min(1, "Country is required"),
    cardNumber: z.string().optional(),
    cardName: z.string().optional(),
    expiry: z.string().optional(),
    cvv: z.string().optional(),
    saveInfo: z.boolean().default(false),
    paymentMethod: z.enum(["creditcard", "paypal"]),
    paymentOption: z.enum(["saved", "new"]).default("new"),
    savedCardId: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.paymentMethod === "creditcard" && data.paymentOption === "new") {
      if (
        !data.cardNumber ||
        data.cardNumber.replace(/\s/g, "").length !== 16
      ) {
        ctx.addIssue({
          path: ["cardNumber"],
          message: "Card number must be 16 digits",
          code: z.ZodIssueCode.custom,
        });
      }
      if (!data.cardName) {
        ctx.addIssue({
          path: ["cardName"],
          message: "Name on card is required",
          code: z.ZodIssueCode.custom,
        });
      }
      if (!data.expiry || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(data.expiry)) {
        ctx.addIssue({
          path: ["expiry"],
          message: "Expiry date must be in MM/YY format",
          code: z.ZodIssueCode.custom,
        });
      }
      if (!data.cvv || !/^\d{3}$/.test(data.cvv)) {
        ctx.addIssue({
          path: ["cvv"],
          message: "CVV must be 3 digits",
          code: z.ZodIssueCode.custom,
        });
      }
    } else if (
      data.paymentMethod === "creditcard" &&
      data.paymentOption === "saved"
    ) {
      if (!data.savedCardId) {
        ctx.addIssue({
          path: ["savedCardId"],
          message: "Please select a saved card",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

export const creditCardSchema = z.object({
  cardName: z.string().min(1, "Name on card is required"),
  cardNumber: z.string().min(1, "Card number is required"),
  expiry: z.string().min(1, "Expiry date is required"),
  cvv: z.string().min(1, "CVV is required"),
});

export const profileFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Please enter your address." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  state: z.string().min(2, { message: "Please enter your state/province." }),
  zip: z.string().min(5, { message: "Please enter your postal code." }),
  country: z.string().min(2, { message: "Please select your country." }),
  marketingEmails: z.boolean().default(false),
});

export const passwordFormSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
