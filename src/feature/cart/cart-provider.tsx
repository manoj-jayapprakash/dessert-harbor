"use client";

import { TProduct, TProductInCart } from "@/lib/models";
import React, { createContext, useContext, useState } from "react";

type TCartContext = {
  productsInCart: Map<string, TProductInCart>;
  addProductToCart: (product: TProduct) => void;
  removeProductFromCart: (product: TProduct) => void;
  updateQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<TCartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsInCart, setProductsInCart] = useState<
    Map<string, TProductInCart>
  >(new Map());

  const addProductToCart = (product: TProduct) => {
    setProductsInCart((prev) => {
      const newProductMap = new Map(prev);
      if (newProductMap.has(product.id)) {
        const existingProduct = newProductMap.get(product.id)!;
        newProductMap.set(product.id, {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        });
      } else {
        newProductMap.set(product.id, { ...product, quantity: 1 });
      }
      return newProductMap;
    });
  };

  const removeProductFromCart = (product: TProduct) => {
    if (!productsInCart.has(product.id)) return;
    setProductsInCart((prev) => {
      const newProductMap = new Map(prev);
      newProductMap.delete(product.id);
      return newProductMap;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (!productsInCart.has(productId)) return;
    setProductsInCart((prev) => {
      const newProductMap = new Map(prev);
      const existingProduct = newProductMap.get(productId)!;
      newProductMap.set(existingProduct.id, { ...existingProduct, quantity });
      return newProductMap;
    });
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addProductToCart,
        removeProductFromCart,
        updateQuantity,
      }}
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
