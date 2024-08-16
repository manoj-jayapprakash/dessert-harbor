import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/feature/cart/cart-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Dessert Harbor", template: "%s | Dessert Harbor" },
  description: "Your safe haven for all things sweet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, "antialiased")}>
        <CartProvider>
          <Navbar />
          <div className='max-w-5xl mx-auto px-4'>{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
