"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useCartContext } from "../cart-provider";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export const QuantityButton = ({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) => {
  const { productsInCart, updateQuantity } = useCartContext();
  const currentProduct = productsInCart.get(productId);
  const quantity = currentProduct?.quantity ?? 1;
  const { toast } = useToast();
  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentQuantity = +e.target.value;

    if (currentQuantity < 0 || currentQuantity > 10) {
      toast({
        description: (
          <p className='text-destructive'>
            Minimum of 1 and maximum of 10 quantity per dessert allowed
          </p>
        ),
      });
      return;
    }
    updateQuantity(productId, currentQuantity);
  };

  return (
    <Input
      type='number'
      value={quantity}
      min={1}
      step={1}
      onKeyDown={(e) => e.key === "." && e.preventDefault()}
      onChange={quantityHandler}
      className={cn(
        "border rounded-lg flex text-center items-center",
        className
      )}
    />
  );
};
