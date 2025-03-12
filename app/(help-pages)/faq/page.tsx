import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import HelpHeroBanner from "@/components/help/HelpHeroBanner";
import { faqs } from "@/data";
import { CTA } from "@/components/help/CTA";

const FaqPage = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <HelpHeroBanner
          title="Frequently Asked Questions"
          subTitle="Find answers to common questions about MegaMart."
        />

        <div className="space-y-10">
          <section className="bg-card rounded-xl shadow-sm p-8 border border-border/50">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <HelpCircle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">FAQs</h2>
            </div>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className=" text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <CTA
            icon={HelpCircle}
            title="Need More Help?"
            subTitle="If you can't find the answer you're looking for, feel free to contact us."
            btnText="Contact Us"
            link="/contact"
          />
        </div>
      </div>
    </main>
  );
};

export default FaqPage;
