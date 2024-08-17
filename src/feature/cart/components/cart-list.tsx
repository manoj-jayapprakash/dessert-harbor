import React from "react";
import { useCartContext } from "../cart-provider";
import Image from "next/image";
import { QuantityButton } from "./quantity-button";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export const CartList = () => {
  const { productsInCart, removeProductFromCart, updateQuantity } =
    useCartContext();
  const producstArr = Array.from(productsInCart.values());

  return (
    <section className='md:col-span-2 md:mb-16'>
      <h3 className='text-lg mb-4'>Desserts</h3>
      <ul className='space-y-4'>
        {producstArr.map((product) => (
          <li
            key={product.id}
            className='border p-4 flex gap-4 items-center rounded-lg'
          >
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className='rounded-lg'
            />
            <div className='flex flex-col md:flex-row gap-4 justify-between'>
              <div>
                <h4 className='font-medium text-balance'>{product.name}</h4>
                <p className='text-sm mt-2'>
                  Price: {formatCurrency(product.price)}
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <QuantityButton productId={product.id} className='w-1/2' />
                <p className='text-sm'>
                  Total:{" "}
                  <strong className='text-base'>
                    {formatCurrency(product.quantity * product.price)}
                  </strong>
                </p>
              </div>
            </div>
            <Button
              variant={"ghost"}
              className='p-1 self-start'
              onClick={() => removeProductFromCart(product)}
            >
              <Trash2 className='text-destructive' size={14} />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
