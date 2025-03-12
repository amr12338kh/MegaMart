import { ReviewsProps } from "@/types";

export const getDiscountedPrice = (price: number, percentage: number) => {
  const discountedPrice = percentage
    ? price - (price * percentage) / 100
    : price;
  return discountedPrice.toFixed(2);
};

export const nameFormatter = (name: string, link?: boolean) => {
  return !link ? name.replace("-", " ") : name.replace(" ", "-").toLowerCase();
};

export const calculateAverageRating = (reviews: ReviewsProps[]) => {
  const average =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return average.toFixed(1);
};

export const formatCardNumber = (input: string) => {
  const value = input.replace(/\s/g, "").replace(/[^\d]/g, "");
  const chunks = [];

  for (let i = 0; i < value.length && i < 16; i += 4) {
    chunks.push(value.slice(i, i + 4));
  }

  return chunks.join(" ");
};

export const formatExpiryDate = (input: string) => {
  const digits = input.replace(/\D/g, "");

  if (digits.length <= 2) {
    return digits;
  }

  let month = digits.substring(0, 2);
  if (parseInt(month) > 12) {
    month = "12";
  } else if (month.startsWith("0") && month.charAt(1) === "0") {
    month = "01";
  } else if (month.startsWith("0") && parseInt(month) === 0) {
    month = "01";
  }

  const year = digits.substring(2, 4);
  return `${month}/${year}`;
};

export const formatPrice = (price: number) => price.toFixed(2);

export const getCardType = (cardNumber: string) => {
  if (cardNumber.startsWith("4")) return "Visa";
  if (cardNumber.startsWith("5")) return "Mastercard";
  if (cardNumber.startsWith("3")) return "Amex";
  if (cardNumber.startsWith("6")) return "Discover";
  return "Card";
};
