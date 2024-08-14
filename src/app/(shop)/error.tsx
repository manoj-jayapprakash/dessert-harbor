"use client";
import { Button } from "@/components/ui/button";
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
        className='mx-auto'
      />
      <h2 className='text-lg font-semibold'>
        Uh-Oh! Our Dessert Machine Got a Sugar Rush
      </h2>
      <p>
        Something went wrong, but don&apos;t worry! Let&apos;s try that again.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </section>
  );
}
