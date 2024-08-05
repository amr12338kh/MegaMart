"use client";

import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { footerLinks } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <Link className="flex w-[200px] flex-col justify-end" href="/">
            <ShoppingBasket className="h-6 w-6" aria-hidden="true" />
            <div className="mb-2 mt-4 text-lg font-medium">MegaMart</div>
            <p className="text-sm leading-tight text-muted-foreground">
              An E-commerce website for training built with everything new in
              Next.js
            </p>
          </Link>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            {footerLinks.map(({ title, links, blank }, i) => (
              <div key={i}>
                <h3 className=" text-base font-medium">{title}</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  {links.map(({ title, link }, j) => (
                    <li key={j}>
                      <Link
                        className="footerListClass"
                        href={link}
                        target={blank ? "_blank" : ""}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <p className="text-gray-400 text-sm">
            ©{year} MegaMart, Inc, All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">amrkhaled12338@gmail.com</p>

          <div className=" mt-2">
            <p className="text-gray-400 text-xs">
              Built by{" "}
              <Link
                href="https://amr-portfolio-dev.vercel.app/"
                className="text-gray-600 font-semibold "
                target="_blank"
              >
                Amr Khaled.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
