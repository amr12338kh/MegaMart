import { FooterLinksProps, HeaderLinksProps, LinksProps } from "@/types";
import {
  Contact,
  Github,
  HelpCircle,
  Home,
  Instagram,
  Linkedin,
  User,
} from "lucide-react";

export const lobby: LinksProps[] = [
  {
    name: "Home",
    description: "Go to the home page.",
    url: "/",
  },
  {
    name: "Products",
    description: "All products we have to offer.",
    url: "/products",
  },
  {
    name: "Contact us",
    description: "Contact us to sell your products.",
    url: "/contact",
  },
];

export const collections: LinksProps[] = [
  {
    name: "Smartphones",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/smartphones",
  },
  {
    name: "Laptops",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/laptops",
  },
  {
    name: "Mens Shirts",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/mens-shirts",
  },
  {
    name: "Womens Dresses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/womens-dresses",
  },
  {
    name: "Womens Watches",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/womens-watches",
  },
  {
    name: "Mens Watches",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    url: "/category/mens-watches",
  },
];

export const help: LinksProps[] = [
  {
    name: "About us",
    url: "/about",
    description: "About the project and the author of the project.",
  },
  {
    name: "Contact us",
    url: "/contact",
    description: "Contact us for any questions or concerns about Tech Store. ",
  },
  {
    name: "Privacy Policy",
    url: "/privacy",
    description: "For all your security requirements.",
  },
  {
    name: "Terms of Service",
    url: "/terms",
    description:
      "Our legal agreement outlining your rights and responsibilities.",
  },
  {
    name: "FAQs",
    url: "/faq",
    description: "Find answers to common questions about MegaMart.",
  },
];

export const credits: LinksProps[] = [
  {
    name: "Dummy JSON",
    url: "https://dummyjson.com/",
  },
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Vercel",
    url: "https://vercel.com/",
  },
];

export const headerLinks: HeaderLinksProps[] = [
  {
    title: "Lobby",
    links: lobby,
  },
  {
    title: "Collections",
    links: collections,
  },
  {
    title: "Help",
    links: help,
  },
];

export const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/amrrkhaled_9/",
    icon: Instagram,
    username: "@amrrkhaled_9",
  },
  {
    name: "GitHub",
    url: "https://github.com/amr12338kh",
    icon: Github,
    username: "amr12338kh",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amr-khaled-a411bb217/",
    icon: Linkedin,
    username: "Amr Khaled",
  },
];

export const footerLinks: FooterLinksProps[] = [
  {
    title: "Lobby",
    links: lobby,
    blank: false,
  },
  {
    title: "Credits",
    links: credits,
    blank: true,
  },
  {
    title: "Socials",
    links: socials,
    blank: true,
  },
  {
    title: "Help",
    links: help,
    blank: false,
  },
];

export const techStack = [
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "shadcn/ui", url: "https://ui.shadcn.com/" },
  { name: "React Icons", url: "https://react-icons.github.io/react-icons/" },
  { name: "Lucide", url: "https://lucide.dev/" },
];

export const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by visiting our website, selecting the products you want, and proceeding to checkout. You can also place an order by calling our customer service number.",
  },
  {
    question: "What are your shipping options?",
    answer:
      "We offer standard and express shipping options. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Please check our shipping policy for more details.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return items within 30 days of purchase. Please ensure the items are in their original condition and packaging. For more details, please refer to our return policy.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "You can contact our customer service via email at amrkhaled12338@gmail.com, or by phone at +1 (555) 123-4567.",
  },
  {
    question: "Do you have a physical store?",
    answer:
      "Yes, we have a physical store located at MegaMart Headquarters, 123 Commerce Street, Business District, CA 94103.",
  },
];

export const mockOrders = [
  {
    id: "ORD-12345",
    date: "March 1, 2025",
    status: "Delivered",
    total: 127.95,
    items: 3,
  },
  {
    id: "ORD-12344",
    date: "February 15, 2025",
    status: "Processing",
    total: 89.5,
    items: 2,
  },
  {
    id: "ORD-12343",
    date: "January 28, 2025",
    status: "Delivered",
    total: 215.3,
    items: 4,
  },
];

export const quickAccessLinks = [
  {
    icon: Home,
    title: "Home",
    href: "/",
  },
  {
    icon: User,
    title: "Account",
    href: "/account",
  },
  {
    icon: Contact,
    title: "Contact",
    href: "/contact",
  },
  {
    icon: HelpCircle,
    title: "FAQs",
    href: "/faq",
  },
];

export const categoryDescriptions: Record<string, string> = {
  smartphones:
    "Shop the latest smartphones with cutting-edge technology, high-resolution cameras, and powerful performance at MegaMart.",
  laptops:
    "Explore our collection of laptops featuring the latest processors, vivid displays, and extended battery life for work and play.",
  fragrances:
    "Discover luxury fragrances and perfumes from top brands with long-lasting scents for every occasion.",
  skincare:
    "Browse premium skincare products with natural ingredients designed to nourish, protect and revitalize your skin.",
  groceries:
    "Find fresh, high-quality groceries and pantry essentials with fast delivery options.",
  "home-decoration":
    "Transform your space with our stylish home decoration items, from furniture to decor accessories.",
  furniture:
    "Shop durable, elegant furniture pieces designed for comfort and style to enhance your living spaces.",
  tops: "Explore fashionable tops for all seasons, from casual t-shirts to elegant blouses.",
  "womens-dresses":
    "Discover trendy women's dresses for every occasion, from casual day wear to elegant evening options.",
  "womens-shoes":
    "Shop comfortable and stylish women's shoes, from casual sneakers to elegant heels.",
  "mens-shirts":
    "Browse quality men's shirts in various styles, patterns, and fabrics for every occasion.",
  "mens-shoes":
    "Find durable and stylish men's shoes for work, sports, and casual wear.",
  "mens-watches":
    "Explore precision men's watches featuring elegant designs and reliable timekeeping.",
  "womens-watches":
    "Discover fashionable women's watches that combine style with functionality.",
  "womens-bags":
    "Shop trendy women's bags and purses that combine style, quality, and functionality.",
  "womens-jewellery":
    "Browse exquisite women's jewelry pieces that add elegance to any outfit.",
  sunglasses:
    "Protect your eyes in style with our collection of designer and fashion sunglasses.",
  automotive:
    "Find essential automotive parts and accessories to keep your vehicle running smoothly.",
  motorcycle:
    "Shop quality motorcycle parts and accessories for enhanced performance and style.",
  lighting:
    "Illuminate your space with our collection of stylish and energy-efficient lighting solutions.",
};
