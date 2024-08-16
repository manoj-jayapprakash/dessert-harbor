import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const EmptyCart = () => {
  return (
    <section className='space-y-4 text-balance text-center my-8'>
      <Image
        src='/images/illustration-empty-cart.svg'
        alt='Two sliced cakes'
        width={300}
        height={300}
        className='mx-auto'
      />
      <h2 className='text-lg font-semibold'>Your Dessert Plate is Empty!</h2>
      <p>
        Time to fill it up with some yummy desserts! What are you craving today?
      </p>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        View Desserts
      </Link>
    </section>
  );
};
