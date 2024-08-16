"use client";

import { useCartContext } from "@/feature/cart/cart-provider";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { totalProductsInCart } = useCartContext();

  return (
    <header className='sticky top-0 bg-primary shadow-sm p-4 text-white'>
      <nav className='flex items-center justify-between max-w-5xl mx-auto'>
        <Link href={"/"}>Dessert Harbor</Link>
        <Link href={"/cart"} className='flex gap-1'>
          {totalProductsInCart} <ShoppingBasket />
        </Link>
      </nav>
    </header>
  );
};
