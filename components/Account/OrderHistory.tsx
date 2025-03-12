import React from "react";
import { mockOrders } from "@/data";
import Link from "next/link";
import { Button } from "../ui/button";
import TabsCardWrapper from "./TabsCardWrapper";

const OrderHistory = () => {
  return (
    <TabsCardWrapper
      tabValue="orders"
      title="Order History"
      description="View your previous orders and their status."
    >
      {mockOrders.length > 0 ? (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-4 hover:bg-accent transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{order.id}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <p>{order.date}</p>
                <p>
                  {order.items} {order.items === 1 ? "item" : "items"}
                </p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-muted-foreground">Total:</p>
                <p className="font-medium">${order.total.toFixed(2)}</p>
              </div>
              <div className="mt-3">
                <Link href="#" className="text-sm text-primary hover:underline">
                  View Order Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            You haven&apos;t placed any orders yet.
          </p>
          <Button variant="outline" className="mt-4">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      )}
    </TabsCardWrapper>
  );
};

export default OrderHistory;
