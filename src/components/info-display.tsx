import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const InfoDisplay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={cn(className, "space-y-4")} {...props} />;
});

InfoDisplay.displayName = "InfoDisplay";

const InfoTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-xl font-semibold", className)} {...props} />
));
InfoTitle.displayName = "InfoTitle";

const InfoDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
InfoDescription.displayName = "InfoDescription";

const InfoContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
InfoContent.displayName = "InfoContent";

export { InfoContent, InfoDescription, InfoTitle, InfoDisplay };
