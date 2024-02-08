"use client"

import Link from "next/link"
import { ShoppingBasket } from 'lucide-react';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="grid items-center gap-8 pb-8 pt-6 md:py-8 container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <Link
              className="flex w-[200px] flex-col justify-end"
              href="/"
          >
              <ShoppingBasket className="h-6 w-6" aria-hidden="true" />
              <div className="mb-2 mt-4 text-lg font-medium">Tech Store</div>
              <p className="text-sm leading-tight text-muted-foreground">
                  An E-commerce website for training built with everything new in Next.js
              </p>
          </Link>
          <section className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
            <div>
              <h3 className=" text-base font-medium">Lobby</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <Link
                      className="footerListClass"
                       href="/"  
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footerListClass"
                      href="/products" 
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footerListClass" 
                      href="/contact" 
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
            </div>
            <div>
              <h3 className=" text-base font-medium">Credits</h3>
              <ul className="flex flex-col gap-2 mt-2">
                <li>
                  <a
                    className="footerListClass"
                    href="/https://ui.shadcn.com/" 
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    shadcn/ui
                  </a>
                </li>
                <li>
                  <a
                    className="footerListClass"
                    href="/https://react-icons.github.io/react-icons/" 
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    React Icons
                  </a>
                </li>
                <li>
                  <a
                      className="footerListClass"
                      href="/https://www.emailjs.com/" 
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      EmailJS
                    </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" text-base font-medium">Help</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <Link
                      className="footerListClass"
                      href="/about" 
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="footerListClass"
                      href="/contact" 
                    >
                      Contact
                    </Link>
                  </li>            
                  <li>
                    <Link
                      className="footerListClass" 
                      href="/privacy"
                    >
                      Privacy
                    </Link>
                  </li>
                </ul>
            </div>

            <div>
              <h3 className=" text-base font-medium">Social</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  <li>
                    <a
                      className="footerListClass"
                      href="/https://www.instagram.com/amrrkhaled_9/" 
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="footerListClass"
                      href="/https://github.com/amr12338kh" 
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      className="footerListClass" 
                      href="/https://www.linkedin.com/in/amr-khaled-a411bb217/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
            </div>
          </section>
        </div>
      <div className="flex flex-col justify-center items-center mt-3">
          <p className="text-gray-400 text-sm">
            ©{year} Tech Store, Inc, All Rights Reserved.
          </p>
          <p className="text-gray-400 text-sm">
            amrkhaled12338@gmail.com
          </p>

          <div className=" mt-2">
            <p 
              className="text-gray-400 text-xs"
            >
              Built by 
              <a 
                href="/https://github.com/amr12338kh" 
                className="text-gray-600 font-semibold "
                rel="noopener noreferrer"
                target="_blank"
              >
                Amr Khaled.
              </a>
            </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer