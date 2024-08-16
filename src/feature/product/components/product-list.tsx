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
import { AddToCartButton } from "./add-to-cart-button";
import { IndianRupee } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export const ProductList = ({ products }: { products: TProduct[] }) => {
  return (
    <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product) => (
        <li key={product.id} className='w-80 h-[28rem] mx-auto'>
          <Card className='p-4 flex flex-col justify-between h-full'>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className='rounded-lg'
            />
            <CardHeader className='grid p-0'>
              <p className='mb-2'>{product.category}</p>
              <div className='flex justify-between'>
                <CardTitle className='w-3/4 text-balance'>
                  {product.name}
                </CardTitle>
                <p className='m-0 flex items-center'>
                  <IndianRupee size={12} />
                  {formatCurrency(product.price)}
                </p>
              </div>
            </CardHeader>
            <CardFooter className='p-0'>
              <AddToCartButton product={product} />
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};
