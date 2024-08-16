"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/models";
import { Trash2 } from "lucide-react";
import { useCartContext } from "@/feature/cart/cart-provider";
import { QuantityButton } from "@/feature/cart/components/quantity-button";

export const AddToCartButton = ({ product }: { product: TProduct }) => {
  const { productsInCart, addProductToCart, removeProductFromCart } =
    useCartContext();

  const addToCartHandler = () => {
    addProductToCart(product);
  };

  const removeFromCartHandler = () => {
    removeProductFromCart(product);
  };

  return (
    <div className='mx-auto w-40'>
      {productsInCart.has(product.id) ? (
        <div className='flex items-center gap-1'>
          <QuantityButton productId={product.id} />
          <Trash2
            onClick={removeFromCartHandler}
            className='text-destructive'
          />
        </div>
      ) : (
        <Button className='w-full' onClick={addToCartHandler}>
          Add to Cart
        </Button>
      )}
    </div>
  );
};
