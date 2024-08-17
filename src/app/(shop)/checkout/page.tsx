import {
  InfoDescription,
  InfoDisplay,
  InfoTitle,
} from "@/components/info-display";
import { buttonVariants } from "@/components/ui/button";
import { STATIC_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Checkout() {
  return (
    <main className='py-4 '>
      <InfoDisplay className='grid place-items-center text-balance md:w-1/2 mx-auto text-center my-8'>
        <InfoTitle>{STATIC_CONTENT.ORDER_CONFIRMATION.TITLE}</InfoTitle>
        <InfoDescription>
          {STATIC_CONTENT.ORDER_CONFIRMATION.DESCRIPTION}
        </InfoDescription>
        <Link
          href={"/"}
          className={cn(
            buttonVariants({ variant: "default" }),
            "hover:text-white"
          )}
        >
          {STATIC_CONTENT.ORDER_CONFIRMATION.CTA}
        </Link>
      </InfoDisplay>
    </main>
  );
}
