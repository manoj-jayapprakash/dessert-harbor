import { TProductInCart } from "@/lib/models";

export function getProductsCountInCart(productsInCart: TProductInCart) {
  const productsArray = Array.from(productsInCart.values());
  return productsArray.reduce((total, item) => item.quantity + total, 0);
}

export function getTotalPrice(
  productsInCart: TProductInCart,
  discount?: number
) {
  const productsArray = Array.from(productsInCart.values());
  const totalPrice = productsArray.reduce(
    (total, item) => item.totalPrice + total,
    0
  );
  return discount ? totalPrice - discount : totalPrice;
}
