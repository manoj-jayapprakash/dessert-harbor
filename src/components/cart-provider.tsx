"use client";

import { TProduct } from "@/lib/models";
import React, { createContext, useContext, useState } from "react";

type TCartContext = {
  productsInCart: TProduct[];
  addProductToCart: (product: TProduct) => void;
  removeProductFromCart: (product: TProduct) => void;
};

const CartContext = createContext<TCartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<TProduct[]>([]);

  const addProductToCart = (product: TProduct) => {
    setProductsInCart((prev) => [...prev, product]);
  };

  const removeProductFromCart = (product: TProduct) => {
    setProductsInCart((prev) => prev.filter((prod) => prod.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{ productsInCart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cart = useContext(CartContext);

  if (!cart)
    throw new Error(
      "Cart context cannot be used outside the Cart Context Provider"
    );

  return cart;
};
