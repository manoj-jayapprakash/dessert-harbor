import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  price: z.number().min(1),
  category: z.string(),
});

export const ProductListSchema = z.array(ProductSchema);

export type TProduct = z.infer<typeof ProductSchema>;

export type TProductInCart = Map<
  string,
  TProduct & { quantity: number; totalPrice: number }
>;
