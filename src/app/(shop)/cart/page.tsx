"use client";
import { useCartContext } from "@/feature/cart/cart-provider";
import { CartList } from "@/feature/cart/components/cart-list";
import { CartSummary } from "@/feature/cart/components/cart-summary";
import { Checkout } from "@/feature/cart/components/checkout";
import React from "react";

export default function Cart() {
  const { totalProductsInCart, productsInCart } = useCartContext();
  return (
    <main>
      <header className='flex mb-6 justify-between items-center sticky top-14 py-4 z-[3] bg-background'>
        <h2 className='text-lg'>Your cart ( {totalProductsInCart} )</h2>
        <Checkout className='md:hidden' />
      </header>
      <div className='grid md:grid-cols-3 gap-4'>
        <CartList />
        <CartSummary products={productsInCart} />
      </div>
    </main>
  );
}
