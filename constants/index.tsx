import { FooterLinksProps, HeaderLinksProps, LinksProps } from "@/types";

export const lobby: LinksProps[] = [
  {
    title: "Home",
    description: "Go to the home page.",
    link: "/",
  },
  {
    title: "Products",
    description: "All products we have to offer.",
    link: "/products",
  },
  {
    title: "Contact",
    description: "Contact us to sell your products.",
    link: "/contact",
  },
];

export const collections: LinksProps[] = [
  {
    title: "Smartphones",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/smartphones",
  },
  {
    title: "Laptops",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/laptops",
  },
  {
    title: "Mens Shirts",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/mens-shirts",
  },
  {
    title: "Womens Dresses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/womens-dresses",
  },
  {
    title: "Womens Watches",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/womens-watches",
  },
  {
    title: "Mens Watches",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ullam beatae aliquid eaque consectetur. Repellendus, dolorem libero! Molestiae eaque pariatur nisi repellat ipsa iste illum, animi suscipit possimus cum dignissimos?",
    link: "/category/mens-watches",
  },
];

export const help: LinksProps[] = [
  {
    title: "About",
    link: "/about",
    description: "About the project and the author of the project.",
  },
  {
    title: "Contact",
    link: "/contact",
    description: "Contact us for any questions or concerns about Tech Store. ",
  },
  {
    title: "Privacy",
    link: "/privacy",
    description: "For all your security requirements.",
  },
];

export const credits: LinksProps[] = [
  {
    title: "Dummy JSON",
    link: "https://dummyjson.com/",
  },
  {
    title: "shadcn/ui",
    link: "https://ui.shadcn.com/",
  },
  {
    title: "Email JS",
    link: "https://www.emailjs.com/",
  },
];

export const social: LinksProps[] = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/amrrkhaled_9/",
  },
  {
    title: "GitHub",
    link: "https://github.com/amr12338kh",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/amr-khaled-a411bb217/",
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
    title: "Social",
    links: social,
    blank: true,
  },
  {
    title: "Help",
    links: help,
    blank: false,
  },
];
