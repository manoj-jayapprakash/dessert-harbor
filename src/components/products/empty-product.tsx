import Image from "next/image";
import React from "react";

export const EmptyProduct = () => {
  return (
    <section className=''>
      <Image
        src='/images/illustration-empty-cart.svg'
        alt='Two sliced cakes'
        width={300}
        height={300}
        className='mx-auto'
      />
      <p className='text-lg text-balance text-center'>
        No desserts available now. Please check again later.
      </p>
    </section>
  );
};
