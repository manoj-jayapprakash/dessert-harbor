"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartContext } from "../cart-provider";

export const QuantityButton = ({ productId }: { productId: string }) => {
  const { productsInCart, updateQuantity } = useCartContext();
  const currentProduct = productsInCart.get(productId);
  const quantity = currentProduct?.quantity ?? 1;

  return (
    <div className='h-10 border rounded-lg flex px-1  items-center bg-ring w-3/4'>
      <Input
        type='number'
        value={quantity}
        onChange={(e) => updateQuantity(productId, +e.target.value)}
        className='text-center h-6 border-0 bg-transparent ring-offset-ring'
      />
    </div>
  );
};
