"use client";
import { useCartContext } from "@/feature/cart/cart-provider";
import React from "react";

export default function Cart() {
  const { productsInCart } = useCartContext();
  console.log(productsInCart);
  return <div>Cart</div>;
}
