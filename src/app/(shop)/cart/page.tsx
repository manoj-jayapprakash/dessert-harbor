"use client";
import { useCartContext } from "@/feature/cart/cart-provider";
import { CartList } from "@/feature/cart/components/cart-list";
import { CartSummary } from "@/feature/cart/components/cart-summary";
import React from "react";

export default function Cart() {
  const { totalProductsInCart, productsInCart } = useCartContext();
  return (
    <main>
      <h2 className='text-lg mb-6'>Your cart ( {totalProductsInCart} )</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        <CartList />
        <CartSummary products={productsInCart} />
      </div>
    </main>
  );
}
