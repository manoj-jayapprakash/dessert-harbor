"use client";

import { TProductInCart } from "@/lib/models";
import React, { useEffect, useState } from "react";
import { getTotalPrice } from "../helpers";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { Checkout } from "./checkout";
import { formatCurrency } from "@/lib/utils";

export const CartSummary = ({
  products,
  totalProducts,
}: {
  products: TProductInCart;
  totalProducts: number;
}) => {
  const [basePrice, setBasePrice] = useState(getTotalPrice(products));
  const [isDiscountActivated, setIsDiscountActivated] = useState(false);

  const applyDiscount = (price: number) => {
    if (isDiscountActivated) {
      return basePrice > 1000 ? basePrice * 0.9 : basePrice;
    }

    return basePrice;
  };

  const totalPrice = applyDiscount(basePrice);

  useEffect(() => {
    setBasePrice(getTotalPrice(products));
  }, [products]);

  return (
    <section className='mb-16 md:mb-0 md:sticky h-fit top-32'>
      <h3 className='text-lg mb-4'>Summary</h3>
      <div className='border p-4 rounded-lg grid gap-4'>
        <p className='flex justify-between font-medium'>
          Total
          <strong className='text-base'>{formatCurrency(totalPrice)}</strong>
        </p>
        <Separator />
        <div>
          <h4 className='font-medium'>Discount</h4>
          <div className='grid grid-cols-2 gap-4 my-2'>
            <p className='text-sm text-balance'>
              10% discount available for orders above 1000
            </p>
            <Toggle
              onClick={() => setIsDiscountActivated(!isDiscountActivated)}
              disabled={totalPrice <= 1000}
              aria-label='Toggle Discount Activate'
              className='p-0 border'
            >
              Activate 10%
            </Toggle>
          </div>
        </div>
        <Separator />
        <p className='flex justify-between font-medium'>
          Grand Total{" "}
          <strong className='text-base'>{formatCurrency(totalPrice)}</strong>
        </p>
      </div>
      {totalProducts > 0 && <Checkout className={"w-full my-4"} />}
    </section>
  );
};
