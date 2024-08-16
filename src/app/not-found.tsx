import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  InfoContent,
  InfoDescription,
  InfoDisplay,
  InfoTitle,
} from "@/components/info-display";
import { STATIC_CONTENT } from "@/lib/constants";
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
      <InfoDisplay>
        <InfoTitle>{STATIC_CONTENT.NOT_FOUND.TITLE}</InfoTitle>
        <InfoDescription>
          {STATIC_CONTENT.NOT_FOUND.DESCRIPTION}
        </InfoDescription>
        <InfoContent>
          <Link href={"/"} className={buttonVariants({ variant: "default" })}>
            {STATIC_CONTENT.NOT_FOUND.CTA}
          </Link>
        </InfoContent>
      </InfoDisplay>
    </section>
  );
}
