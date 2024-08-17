import { TProduct } from "./models";

export const products: TProduct[] = [
  {
    id: "product-1",
    image: "/images/image-waffle-desktop.jpg",
    name: "Waffle with Berries",
    category: "Waffle",
    price: 300,
  },
  {
    id: "product-2",
    image: "/images/image-creme-brulee-desktop.jpg",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 450,
  },
  {
    id: "product-3",
    image: "/images/image-macaron-desktop.jpg",
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 250,
  },
  {
    id: "product-4",
    image: "/images/image-tiramisu-desktop.jpg",
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 550,
  },
  {
    id: "product-5",
    image: "/images/image-baklava-desktop.jpg",
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 500,
  },
  {
    id: "product-6",
    image: "/images/image-meringue-desktop.jpg",
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 100,
  },
  {
    id: "product-7",
    image: "/images/image-cake-desktop.jpg",
    name: "Red Velvet Cake",
    category: "Cake",
    price: 475,
  },
  {
    id: "product-8",
    image: "/images/image-brownie-desktop.jpg",
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 325,
  },
  {
    id: "product-9",
    image: "/images/image-panna-cotta-desktop.jpg",
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 175,
  },
];

export const STATIC_CONTENT = {
  ERROR: {
    TITLE: "Uh-Oh! Our Dessert Machine Got a Sugar Rush",
    DESCRIPTION: "Something went wrong, but don't worry! Let's try that again.",
    CTA: "Try Again",
  },
  NOT_FOUND: {
    TITLE: "Whoops! This Dessert Took a Detour",
    DESCRIPTION:
      "The treat you're looking for isn't here. Let's find you something even yummier!",
    CTA: "Return Home",
  },
  EMPTY_CART: {
    TITLE: "Your Dessert Plate is Empty!",
    DESCRIPTION:
      "Time to fill it up with some yummy desserts! What are you craving today?",
    CTA: "View Desserts",
  },
  EMPTY_PRODUCT: {
    TITLE: "Oops! We're All Out of Sweets",
    DESCRIPTION:
      "Our desserts were so delicious, they've all been gobbled up. We're restocking with fresh goodies soon!",
  },
  ORDER_CONFIRMATION: {
    TITLE: "Sweet Success! Your Order is Confirmed",
    DESCRIPTION:
      "Your order is locked in! Our bakers are working their magic. We'll let you know when your treats are ready to delight you.",
    CTA: "Return Home",
  },
};
