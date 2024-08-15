import { TProduct } from "@/lib/models";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { AddToCartButton } from "./add-to-cart-button";

export const ProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product) => (
        <li key={product.id} className='w-80  mx-auto'>
          <Card className='p-4 grid gap-4'>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className='rounded-lg'
            />
            <p className=''>{product.category}</p>
            <CardHeader className='items-center justify-between p-0'>
              <CardTitle>{product.name}</CardTitle>
              <p className='m-0'>{product.price}</p>
            </CardHeader>
            <CardFooter className='p-0'>
              <AddToCartButton />
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};
