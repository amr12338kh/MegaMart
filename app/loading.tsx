"use client";

import { Loader2, ShoppingBasket } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <ShoppingBasket className="size-10 text-primary" strokeWidth={1.5} />
          <h1 className="text-2xl font-bold text-foreground">MegaMart</h1>
        </div>

        <div className="flex items-center gap-2 justify-center">
          <Loader2
            className="h-9 w-9 text-primary/70 animate-spin"
            strokeWidth={1.5}
          />

          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
