import Contact from "@/components/forms/Contact";
import Link from "next/link";
import React from "react";
import {
  Mail,
  Instagram,
  Linkedin,
  MapPin,
  Clock,
  HelpCircle,
} from "lucide-react";
import HelpHeroBanner from "@/components/help/HelpHeroBanner";

const ContactPage = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <HelpHeroBanner
          title="Let's Connect"
          subTitle="Have questions or feedback about MegaMart? Our team is ready to assist you with personalized support and solutions."
        />

        <div className="space-y-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <section className="bg-card rounded-xl shadow-sm p-8 border border-border/50 lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Complete the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
              <Contact />
            </section>

            <section className="space-y-8">
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </span>
                  Response Time
                </h2>
                <p className="text-muted-foreground">
                  We typically respond within 24 hours on business days. For
                  urgent matters, please contact us directly via phone.
                </p>

                <div className="h-px w-full bg-border/60 my-6" />

                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  Our Location
                </h2>
                <address className="not-italic text-muted-foreground mb-4">
                  MegaMart Headquarters
                  <br />
                  123 Commerce Street
                  <br />
                  Business District, CA 94103
                </address>

                <div className="h-px w-full bg-border/60 my-6" />

                <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-3 bg-card hover:bg-accent/30 rounded-md border border-border/50 transition-colors">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <Link
                        href="mailto:amrkhaled12338@gmail.com"
                        className="text-primary hover:underline underline-offset-4 text-sm"
                      >
                        amrkhaled12338@gmail.com
                      </Link>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 p-3 bg-card hover:bg-accent/30 rounded-md border border-border/50 transition-colors">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Instagram</p>
                      <Link
                        href="https://www.instagram.com/amrrkhaled_9/"
                        className="text-primary hover:underline underline-offset-4 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @amrrkhaled_9
                      </Link>
                    </div>
                  </li>

                  <li className="flex items-center gap-4 p-3 bg-card hover:bg-accent/30 rounded-md border border-border/50 transition-colors">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">LinkedIn</p>
                      <Link
                        href="https://www.linkedin.com/in/amr-khaled-a411bb217/"
                        className="text-primary hover:underline underline-offset-4 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Amr Khaled
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <section className="text-center bg-card rounded-xl p-6 border border-border/50 shadow-sm">
            <div className="bg-primary/10 p-3 rounded-full mx-auto mb-4 w-fit">
              <HelpCircle />
            </div>
            <h2 className="text-xl font-semibold mb-3">Need Quick Answers?</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Find solutions to common questions in our comprehensive FAQ
              section.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
            >
              Browse FAQs
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
