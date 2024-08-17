"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { useCartContext } from "../cart-provider";

export const Checkout = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { resetCart } = useCartContext();
  const [isPending, startTransition] = useTransition();

  const checkoutHandler = () => {
    router.push("/checkout");
    startTransition(() => {
      resetCart();
    });
  };

  return (
    <Button
      className={cn(
        buttonVariants({ variant: "default" }),
        "bg-ring text-foreground hover:text-white",
        className
      )}
      onClick={checkoutHandler}
      disabled={isPending}
    >
      Checkout
    </Button>
  );
};
