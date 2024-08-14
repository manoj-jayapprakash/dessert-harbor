import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className='space-y-4 text-balance text-center my-8'>
      <Image
        src='/images/404.png'
        alt='A man looks lost with map in his hand'
        width={300}
        height={300}
        className='mx-auto'
      />
      <h2 className='text-lg font-semibold'>
        Whoops! This Dessert Took a Detour
      </h2>
      <p>
        The treat you&apos;re looking for isn&apos;t here. Let&apos;s find you
        something even yummier!
      </p>
      <Link href={"/"} className={buttonVariants({ variant: "default" })}>
        Return Home
      </Link>
    </section>
  );
}
