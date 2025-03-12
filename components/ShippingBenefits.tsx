import React from "react";
import {
  ShoppingBag,
  Truck,
  RotateCcw,
  Clock,
  ShieldCheck,
} from "lucide-react";

const ShippingBenefits = () => {
  const benefits = [
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: "Free Shipping",
      description: "On all orders over $50",
      color: "from-blue-400/20 to-blue-500/30",
    },
    {
      icon: <RotateCcw className="h-5 w-5 text-primary" />,
      title: "Easy Returns",
      description: "30-day money back guarantee",
      color: "from-green-400/20 to-green-500/30",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: "Secure Payments",
      description: "Protected by industry encryption",
      color: "from-purple-400/20 to-purple-500/30",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "24/7 Support",
      description: "Customer service always available",
      color: "from-amber-400/20 to-amber-500/30",
    },
  ];

  return (
    <div className=" z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="rounded-lg bg-gradient-to-b from-primary/5 to-background p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg bg-gradient-to-br ${benefit.color} p-3 shadow-sm group-hover:scale-110 transition-all duration-300`}
              >
                {benefit.icon}
              </div>
              <div className="group-hover:translate-x-1 transition-all duration-300">
                <p className="text-sm font-medium text-foreground">
                  {benefit.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingBenefits;
