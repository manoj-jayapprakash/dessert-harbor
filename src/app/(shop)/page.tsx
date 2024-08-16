import { EmptyProduct } from "@/feature/product/components/empty-product";
import { ProductList } from "@/feature/product/components/product-list";
import { ProductListSchema } from "@/lib/models";
import { products } from "@/lib/constants";

export default function Home() {
  const parsedProducts = ProductListSchema.parse(products);

  if (parsedProducts.length === 0)
    return (
      <main>
        <EmptyProduct />
      </main>
    );

  return (
    <main className='py-4'>
      <section className='space-y-4'>
        <h2 className='font-bold text-2xl'>Desserts</h2>
        <ProductList products={parsedProducts} />
      </section>
    </main>
  );
}
