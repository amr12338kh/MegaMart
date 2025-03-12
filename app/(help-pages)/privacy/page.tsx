import React from "react";
import Link from "next/link";
import { Shield, Clock, AlertCircle, Check, Mail } from "lucide-react";
import HelpHeroBanner from "@/components/help/HelpHeroBanner";
import { CTA } from "@/components/help/CTA";

const PrivacyPolicyPage = () => {
  return (
    <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl py-12 md:py-16 lg:py-20">
        <HelpHeroBanner
          title="Privacy Policy"
          subTitle="We value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data."
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
                  <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                  <p className="text-muted-foreground">
                    MegaMart is committed to protecting your privacy. This
                    Policy explains our data practices. By using our services,
                    you agree to these terms.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-2">
                    We collect personal information when you register, order, or
                    contact us, including your name, email, address, and payment
                    details. We also automatically collect device information
                    and browsing data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground">
                    We use your information to provide services, process
                    transactions, personalize experiences, and communicate with
                    you about offers and updates.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement security measures to protect your data, but no
                    method is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
                  <p className="text-muted-foreground">
                    Depending on your location, you may have rights to access,
                    update, delete, or restrict the use of your data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground">
                    We may update this Policy periodically. Please review it
                    regularly for changes.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-primary" />
                  </span>
                  Privacy at a Glance
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Data Protection</p>
                      <p className="text-muted-foreground text-sm">
                        We implement industry-standard security measures
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Personal Choice</p>
                      <p className="text-muted-foreground text-sm">
                        You control your marketing preferences
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Data Access</p>
                      <p className="text-muted-foreground text-sm">
                        You can request a copy of your data
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Third Parties</p>
                      <p className="text-muted-foreground text-sm">
                        We carefully vet all our partners
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
                        This policy was last updated on March 6, 2025. Please
                        review regularly for changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm p-6 border border-border/50">
                <h2 className="text-xl font-semibold mb-4">Have Questions?</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  If you have any questions about our Privacy Policy, please
                  contact our Data Protection Officer.
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
            icon={Shield}
            title="Your Privacy Matters"
            subTitle="We're committed to transparency and protecting your personal information. If you have any questions about how we handle your data, we're here to help."
            btnText="Contact Support"
            link="/contact"
            secBtnText="Terms of Service"
            secLink="/terms"
          />
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
