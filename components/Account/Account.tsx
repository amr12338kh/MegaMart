"use client";

import { User, Lock, History, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileInformation from "./ProfileInformation";
import OrderHistory from "./OrderHistory";
import SecuritySettings from "./SecuritySettings";

const Account = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <div className="container py-8 min-h-[80vh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="scroll-m-20 text-2xl sm:text-3xl font-extrabold tracking-tight">
          My Account
        </h1>
        <Button
          variant="outline"
          onClick={handleLogout}
          className="flex items-center"
        >
          <LogOut size={16} className="mr-2" />
          Log Out
        </Button>
      </div>
      <Separator className="mb-8" />

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="flex flex-col items-center space-y-4 mb-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.png" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-sm text-muted-foreground">
                  Member since January 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="profile" className="flex items-center">
                <User size={16} className="mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center">
                <History size={16} className="mr-2" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Lock size={16} className="mr-2" />
                Security
              </TabsTrigger>
            </TabsList>
            <ProfileInformation />
            <OrderHistory />
            <SecuritySettings />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Account;
