import { TProductInCart } from "@/lib/models";
import React from "react";
import { getTotalPrice } from "../helpers";

export const CartSummary = ({ products }: { products: TProductInCart }) => {
  const totalPrice = getTotalPrice(products);
  return (
    <section>
      <h2 className='text-lg my-4'>Summary</h2>
      <div className='border p-4 rounded-lg'>
        <p>
          Total:
          <strong className='text-base'>{totalPrice}</strong>
        </p>
      </div>
    </section>
  );
};
