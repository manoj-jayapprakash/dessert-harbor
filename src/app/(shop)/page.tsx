import { EmptyProduct } from "@/components/products/empty-product";
import { ProductList } from "@/components/products/product-list";
import { ProductListSchema } from "@/lib/models";
import { products } from "@/lib/constants";

export default function Home() {
  const parsedProducts = ProductListSchema.parse(products);

  return (
    <main className=''>
      {parsedProducts.length === 0 ? (
        <EmptyProduct />
      ) : (
        <section className='space-y-4'>
          <h2>Desserts</h2>
          <ProductList products={parsedProducts} />
        </section>
      )}
    </main>
  );
}
