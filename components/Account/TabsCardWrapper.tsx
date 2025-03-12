import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TabsCardWrapperProps } from "@/types";
import { TabsContent } from "../ui/tabs";

const TabsCardWrapper = ({
  title,
  tabValue,
  description,
  children,
  className = "",
  headerClassName = "",
  contentClassName = "",
  noBorder = true,
}: TabsCardWrapperProps) => {
  return (
    <TabsContent value={tabValue}>
      <Card
        className={`${noBorder ? "border-none shadow-none" : ""} ${className}`}
      >
        {(title || description) && (
          <CardHeader className={`px-0 sm:p-6 ${headerClassName}`}>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={`p-0 sm:p-6 ${contentClassName}`}>
          {children}
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default TabsCardWrapper;
