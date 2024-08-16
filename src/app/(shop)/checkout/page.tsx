import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Checkout() {
  return (
    <main className='py-4'>
      <h2>Your order placed successfully!</h2>
      <p>You will receive an email confirmation soon</p>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Return Home
      </Link>
    </main>
  );
}
