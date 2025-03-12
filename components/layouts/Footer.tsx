"use client";

import Link from "next/link";
import {
  ShoppingBasket,
  Twitter,
  Instagram,
  Facebook,
  Github,
  Linkedin,
} from "lucide-react";
import { footerLinks } from "@/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Link className="flex items-center gap-2" href="/">
              <ShoppingBasket
                className="h-7 w-7 text-primary"
                aria-hidden="true"
              />
              <span className="text-xl font-semibold">MegaMart</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              An e-commerce destination offering premium products with
              exceptional service. Built with cutting-edge Next.js technology
              for the optimal shopping experience.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {footerLinks.map(({ title, links, blank }, i) => (
                <div key={i}>
                  <h3 className="font-semibold text-base mb-4">{title}</h3>
                  <ul className="space-y-3">
                    {links.map(({ name, url }, j) => (
                      <li key={j}>
                        <Link
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          href={url}
                          target={blank ? "_blank" : ""}
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground order-2 md:order-1">
            <p>©{year} MegaMart, Inc. All Rights Reserved.</p>
          </div>

          <div className="flex space-x-6 order-1 md:order-2">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>

        {/* Credit */}
        <div className="text-center mt-6">
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <Link
              href="https://amr-portfolio-dev.vercel.app/"
              className="text-primary hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amr Khaled
            </Link>{" "}
            •{" "}
            <a
              href="mailto:amrkhaled12338@gmail.com"
              className="hover:underline"
            >
              amrkhaled12338@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
