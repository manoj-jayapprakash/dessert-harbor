"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { useCartContext } from "../cart-provider";

export const Checkout = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { resetCart } = useCartContext();

  const checkoutHandler = () => {
    router.push("/checkout");
    resetCart();
  };

  return (
    <Button
      className={cn(
        buttonVariants({ variant: "default" }),
        "bg-ring text-foreground",
        className
      )}
      onClick={checkoutHandler}
    >
      Checkout
    </Button>
  );
};
