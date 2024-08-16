import Image from "next/image";
import React from "react";
import {
  InfoDescription,
  InfoDisplay,
  InfoTitle,
} from "@/components/info-display";
import { STATIC_CONTENT } from "@/lib/constants";

export const EmptyProduct = () => {
  return (
    <section className='space-y-4 text-balance text-center my-8'>
      <Image
        src='/images/illustration-empty-cart.svg'
        alt='Two sliced cakes'
        width={300}
        height={300}
        className='mx-auto'
      />
      <InfoDisplay>
        <InfoTitle>{STATIC_CONTENT.EMPTY_PRODUCT.TITLE}</InfoTitle>
        <InfoDescription>
          {STATIC_CONTENT.EMPTY_PRODUCT.DESCRIPTION}
        </InfoDescription>
      </InfoDisplay>
    </section>
  );
};
