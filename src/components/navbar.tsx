import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className='sticky top-0 bg-muted shadow-sm p-4'>
      <nav className='flex items-center justify-between'>
        <Link href={"/"}>Dessert Harbor</Link>
        <Link href={"/cart"}>Cart</Link>
      </nav>
    </header>
  );
};
