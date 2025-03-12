import React from "react";
import Link from "next/link";
import { Scale, Clock, AlertCircle, Check, Mail } from "lucide-react";
import HelpHeroBanner from "@/components/help/HelpHeroBanner";
import { CTA } from "@/components/help/CTA";

const TermsOfServicePage = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <HelpHeroBanner
          title="Terms of Service"
          subTitle="Please read these terms carefully. They establish the rules for using our services and outline our relationship with you as a customer."
        />

        <div className="space-y-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <section className="bg-card rounded-xl shadow-sm p-8 border border-border/50 lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Last Updated</h2>
                    <p className="text-muted-foreground">March 6, 2025</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Agreement to Terms
                  </h2>
                  <p className="text-muted-foreground">
                    By accessing or using MegaMart&apos;s services, you agree to
                    be bound by these Terms of Service. If you disagree with any
                    part of the terms, you may not access our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Service Usage</h2>
                  <p className="text-muted-foreground mb-2">
                    You agree to use our services only for lawful purposes and
                    in accordance with these Terms. You must not use our
                    services in any way that violates applicable laws or
                    regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Account Responsibilities
                  </h2>
                  <p className="text-muted-foreground">
                    You are responsible for maintaining the confidentiality of
                    your account information and for all activities that occur
                    under your account. You must notify us immediately of any
                    unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Payment Terms</h2>
                  <p className="text-muted-foreground">
                    You agree to pay all fees and charges associated with your
                    account. All payments are non-refundable unless otherwise
                    specified in our Refund Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Intellectual Property
                  </h2>
                  <p className="text-muted-foreground">
                    All content on our platform, including text, graphics,
                    logos, and software, is the property of MegaMart and is
                    protected by intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground">
                    MegaMart shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages resulting from
                    your use or inability to use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Changes to Terms
                  </h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We
                    will provide notice of significant changes through our
                    website or by other means.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Scale className="h-5 w-5 text-primary" />
                  </span>
                  Terms at a Glance
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Legal Agreement</p>
                      <p className="text-muted-foreground text-sm">
                        These terms form a binding legal agreement
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Account Security</p>
                      <p className="text-muted-foreground text-sm">
                        You are responsible for maintaining account security
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Payment Obligations</p>
                      <p className="text-muted-foreground text-sm">
                        You agree to pay all applicable fees
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Proper Use</p>
                      <p className="text-muted-foreground text-sm">
                        Use our services only for lawful purposes
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="h-px w-full bg-border/60 my-6" />

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-amber-700 text-sm">
                        Important Notice
                      </h3>
                      <p className="text-amber-600 text-sm mt-1">
                        These terms were last updated on March 6, 2025. By
                        continuing to use our services, you accept these terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-xl font-semibold mb-4">
                  Need Clarification?
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  If you have any questions about our Terms of Service, please
                  contact our Legal Team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </div>
            </section>
          </div>

          <CTA
            icon={Scale}
            title="Your Agreement Matters"
            subTitle="We strive to make our terms fair and transparent. If anything is unclear or you have questions about your obligations, please reach out to our support team."
            btnText="Contact Support"
            link="/contact"
            secBtnText="Privacy Policy"
            secLink="/privacy"
          />
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
