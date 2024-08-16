"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useCartContext } from "../cart-provider";
import { cn } from "@/lib/utils";

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

  const quantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentQuantity = +e.target.value;
    if (currentQuantity < 1) return;
    updateQuantity(productId, currentQuantity);
  };

  return (
    <Input
      type='number'
      value={quantity}
      onChange={quantityHandler}
      className={cn(
        "border rounded-lg flex text-center items-center",
        className
      )}
    />
  );
};
