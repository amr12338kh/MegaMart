import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ShippingBenefits from "./ShippingBenefits";

const Hero = () => {
  const customers = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
    "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?b=1&s=612x612&w=0&k=20&c=hEPh7-WEAqHTHdQtPrfEN9-yYCiPGKvD32VZ5lcL6SU=",
  ];

  return (
    <div className="relative w-full overflow-hidden space-y-10 lg:space-y-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              MegaMart
            </h2>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Next-gen e-commerce experience
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Shop till you drop, from the comfort of your own home. The most
              advanced e-commerce platform.
            </p>
          </div>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
            <Link href="/products" className="z-10">
              <Button
                size="lg"
                className="gap-2 rounded-full hidden sm:flex group"
              >
                Shop Now{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 duration-200 transition-transform" />
              </Button>
              <Button size="sm" className="gap-2 rounded-full sm:hidden group">
                Shop Now{" "}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 duration-200 transition-transform" />
              </Button>
            </Link>
            <Link className="z-10" href="#categories">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full hidden sm:block"
              >
                Browse Categories
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full sm:hidden"
              >
                Categories
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 pt-4">
            <div className="flex -space-x-2">
              {customers.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="customer image"
                  className="h-8 w-8 rounded-full bg-primary/80 object-cover border-2 border-background"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">2,000+</span> happy
              customers
            </p>
          </div>
        </div>

        <div className="py-8 relative flex-1 lg:h-[500px] hidden sm:block">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 mx-auto">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-background group hover:scale-105 duration-300 transition-all shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="rounded-xl group-hover:-translate-y-4 group-hover:scale-105 duration-300 transition-all bg-muted p-2 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <div className="absolute tracking-widest -top-4 -right-4 bg-secondary/80 text-primary text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        NEW
                      </div>
                      <img
                        className="h-40 w-40 object-cover rounded-lg bg-primary/20 mx-auto"
                        src="/phone.png"
                        alt="phone"
                      />
                    </div>
                    <p className="mt-4 font-medium">Latest Products</p>
                    <p className="text-sm text-muted-foreground">
                      Starting at $999
                    </p>
                    <div className="mt-2 flex justify-center gap-2">
                      <span className="inline-block h-3 w-3 rounded-full bg-primary cursor-pointer"></span>
                      <span className="inline-block h-3 w-3 rounded-full bg-zinc-400 cursor-pointer"></span>
                      <span className="inline-block h-3 w-3 rounded-full bg-indigo-500 cursor-pointer"></span>
                      <span className="inline-block h-3 w-3 rounded-full bg-green-800 cursor-pointer"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-secondary/60 shadow-lg transition-all animate-bounce-slow"></div>
            <div className="absolute -right-3 -top-3 h-14 w-14 rounded-full bg-muted-foreground/10 shadow-lg transition-all animate-bounce-slow"></div>

            <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-muted-foreground/20 shadow-lg transition-all animate-pulse"></div>
            <div className="absolute -bottom-7 -left-7 h-10 w-10 rounded-full bg-secondary/10 shadow-lg transition-all animate-pulse"></div>
          </div>

          {/* Feature cards */}
        </div>
      </div>

      <div className="sm:p-4">
        <ShippingBenefits />
      </div>
    </div>
  );
};

export default Hero;
