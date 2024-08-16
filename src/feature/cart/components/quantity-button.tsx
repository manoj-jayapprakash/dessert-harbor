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

  return (
    <div className={cn("border rounded-lg flex items-center", className)}>
      <Input
        type='number'
        value={quantity}
        onChange={(e) => updateQuantity(productId, +e.target.value)}
        className='text-center bg-gray-100 ring-offset-ring'
      />
    </div>
  );
};
