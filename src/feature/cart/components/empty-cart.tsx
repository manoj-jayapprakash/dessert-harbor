import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  InfoContent,
  InfoDescription,
  InfoDisplay,
  InfoTitle,
} from "@/components/info-display";
import { STATIC_CONTENT } from "@/lib/constants";

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
      <InfoDisplay>
        <InfoTitle>{STATIC_CONTENT.EMPTY_CART.TITLE}</InfoTitle>
        <InfoDescription>
          {STATIC_CONTENT.EMPTY_CART.DESCRIPTION}
        </InfoDescription>
        <InfoContent>
          <Link href={"/"} className={buttonVariants({ variant: "default" })}>
            {STATIC_CONTENT.EMPTY_CART.CTA}
          </Link>
        </InfoContent>
      </InfoDisplay>
    </section>
  );
};
