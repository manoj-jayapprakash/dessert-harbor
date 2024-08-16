"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/lib/models";
import { Trash2 } from "lucide-react";
import { useCartContext } from "@/feature/cart/cart-provider";
import { QuantityButton } from "@/feature/cart/components/quantity-button";
import { useToast } from "@/components/ui/use-toast";

export const AddToCartButton = ({ product }: { product: TProduct }) => {
  const { toast } = useToast();
  const { productsInCart, addProductToCart, removeProductFromCart } =
    useCartContext();

  const addToCartHandler = () => {
    addProductToCart(product);
    toast({
      description: (
        <p>
          <strong>{product.name}</strong> added to cart!
        </p>
      ),
    });
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
            className='text-destructive cursor-pointer'
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
