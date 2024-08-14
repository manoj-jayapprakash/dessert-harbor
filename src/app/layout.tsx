import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

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
        <Navbar />
        <div className='max-w-5xl mx-auto p-4'>{children}</div>
      </body>
    </html>
  );
}
