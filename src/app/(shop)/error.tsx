"use client";
import {
  InfoContent,
  InfoDescription,
  InfoDisplay,
  InfoTitle,
} from "@/components/info-display";
import { Button } from "@/components/ui/button";
import { STATIC_CONTENT } from "@/lib/constants";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className='space-y-4 text-balance text-center my-8'>
      <Image
        src='/images/err.svg'
        alt='coffee machine'
        width={300}
        height={300}
        className='mx-auto my-8'
      />
      <InfoDisplay>
        <InfoTitle>{STATIC_CONTENT.ERROR.TITLE}</InfoTitle>
        <InfoDescription>{STATIC_CONTENT.ERROR.DESCRIPTION}</InfoDescription>
        <InfoContent>
          <Button onClick={reset}>{STATIC_CONTENT.ERROR.CTA}</Button>
        </InfoContent>
      </InfoDisplay>
    </section>
  );
}
