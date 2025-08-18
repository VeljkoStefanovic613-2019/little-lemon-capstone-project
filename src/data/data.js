import { Bike } from "lucide-react";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Bruchetta,
  CaesarSalad,
  CapreseSalad,
  ChocolateMouseDessert,
  GreekSalad,
  LemonDessert,
  LemonTartDessert,
  PastaPrimavera,
  QuinoaSalad,
  StrawberryCheesecakeDessert,
  ThaiChickenSalad,
  TiramisuDessert,
  FrenchOnionSoup,
  ButternutSquashSoup,
  ChickenNoodleSoup,
  TomatoBasilSoup,
  SpinachArtichokeDip,
  GarlicBreadsticks,
  CrispyCalamari,
  StuffedMushrooms,
  HotChocolate,
  BerrySmoothie,
  IcedCoffee,
  FreshLemonade,
  ChickenParmesan,
  VegetableStirFry,
  BeefMedallions,
  GrilledSalmon,
} from "../assets";

// Highlights
export const highlights = [
  {
    id: 1,
    image: GreekSalad,
    title: "Greek Salad",
    price: "$10.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: Bruchetta,
    title: "Bruschetta",
    price: "$12.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil and topped with tomatoes.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: LemonDessert,
    title: "Lemon Dessert",
    price: "$13.50",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: PastaPrimavera,
    title: "Pasta Primavera",
    price: "$14.25",
    description:
      "A vibrant medley of fresh seasonal vegetables tossed with al dente pasta and a light olive oil sauce, capturing the essence of Italian springtime.",
    order: "order a delivery",
    icon: Bike,
  },
];

export const testimonials = [
  {
    id: 1,
    image: Avatar1,
    name: "David Malan",
    message:
      "'Little Lemon's flavors are an exquisite delight. Culinary perfection in a cozy ambiance—undeniably wonderful!'",
  },
  {
    id: 2,
    image: Avatar2,
    name: "Ahsan Ali",
    message:
      "'At Little Lemon, indulge in a delightful journey of flavors and warmth. Exceptional taste, inviting atmosphere—truly memorable.'",
  },
  {
    id: 3,
    image: Avatar3,
    name: "Daniel Harris",
    message:
      "'Little Lemon's stand-out dishes and cozy ambiance promise a delightful experience. Memorable dining awaits with joyous flavors.'",
  },
  {
    id: 4,
    image: Avatar4,
    name: "Brian Arthur",
    message:
      "'Savor Little Lemon's gastronomic delights—a culinary gem with impeccable service and a warm, inviting atmosphere.'",
  },
];

// Order Online
export const salad = [
  {
    id: 1,
    image: CaesarSalad,
    title: "Caesar Salad",
    price: "$9.49",
    description:
      "Crisp romaine lettuce tossed with creamy Caesar dressing, garlic croutons, and shaved parmesan cheese. A timeless classic.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: QuinoaSalad,
    title: "Quinoa Power Salad",
    price: "$11.25",
    description:
      "A hearty mix of tri-color quinoa, chickpeas, cucumber, cherry tomatoes, and avocado with lemon-tahini dressing.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: CapreseSalad,
    title: "Caprese Salad",
    price: "$8.95",
    description:
      "Fresh mozzarella, juicy tomatoes, and fragrant basil drizzled with balsamic glaze and olive oil.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: ThaiChickenSalad,
    title: "Thai Chicken Salad",
    price: "$12.75",
    description:
      "Grilled chicken on a bed of greens, with shredded carrots, bell peppers, peanuts, and spicy peanut dressing.",
    order: "order a delivery",
    icon: Bike,
  },
];

export const dessert = [
  {
    id: 1,
    image: ChocolateMouseDessert,
    title: "Chocolate Mousse",
    price: "$6.99",
    description:
      "A silky smooth chocolate mousse topped with whipped cream and chocolate shavings, perfect for chocolate lovers.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: StrawberryCheesecakeDessert,
    title: "Strawberry Cheesecake",
    price: "$7.49",
    description:
      "Creamy cheesecake with a buttery graham cracker crust and a sweet strawberry glaze.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: TiramisuDessert,
    title: "Classic Tiramisu",
    price: "$8.25",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder for an Italian classic.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: LemonTartDessert,
    title: "Lemon Tart",
    price: "$6.50",
    description:
      "A zesty lemon custard tart with a crisp buttery crust, garnished with fresh berries.",
    order: "order a delivery",
    icon: Bike,
  },
];
export const mainCourses = [
  {
    id: 1,
    image: GrilledSalmon,
    title: "Grilled Salmon",
    price: "$18.99",
    description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and a lemon butter sauce.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: BeefMedallions, 
    title: "Beef Medallions",
    price: "$22.50",
    description: "Tender beef medallions cooked to your preference, served with garlic mashed potatoes and red wine reduction.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: VegetableStirFry,
    title: "Vegetable Stir Fry",
    price: "$15.75",
    description: "Crisp seasonal vegetables stir-fried in a savory ginger-soy sauce, served over jasmine rice.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: ChickenParmesan, 
    title: "Chicken Parmesan",
    price: "$16.99",
    description: "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.",
    order: "order a delivery",
    icon: Bike,
  },
];


export const beverages = [
  {
    id: 1,
    image: FreshLemonade, 
    title: "Fresh Lemonade",
    price: "$3.99",
    description: "Freshly squeezed lemons with a hint of mint and sweetness. Refreshing and revitalizing.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: IcedCoffee,
    title: "Iced Coffee",
    price: "$4.25",
    description: "Cold brewed coffee with milk and a touch of vanilla, served over ice.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: BerrySmoothie, 
    title: "Berry Smoothie",
    price: "$5.50",
    description: "Mixed berries blended with Greek yogurt and honey. A healthy and delicious choice.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: HotChocolate, 
    title: "Hot Chocolate",
    price: "$4.75",
    description: "Rich, creamy hot chocolate topped with whipped cream and chocolate shavings.",
    order: "order a delivery",
    icon: Bike,
  },
];
export const appetizers = [
  {
    id: 1,
    image: StuffedMushrooms, 
    title: "Stuffed Mushrooms",
    price: "$8.99",
    description: "Button mushrooms stuffed with herbed cream cheese and breadcrumbs, baked to golden perfection.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: CrispyCalamari,
    title: "Crispy Calamari",
    price: "$10.50",
    description: "Tender squid rings lightly battered and fried, served with lemon aioli and marinara dipping sauces.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image:  GarlicBreadsticks,
    title: "Garlic Breadsticks",
    price: "$6.25",
    description: "Freshly baked breadsticks brushed with garlic butter and herbs, served with marinara sauce.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: SpinachArtichokeDip,
    title: "Spinach Artichoke Dip",
    price: "$9.75",
    description: "Creamy blend of spinach, artichokes, and cheeses served warm with tortilla chips.",
    order: "order a delivery",
    icon: Bike,
  },
];

export const soups = [
  {
    id: 1,
    image: TomatoBasilSoup,
    title: "Tomato Basil Soup",
    price: "$7.25",
    description: "Creamy tomato soup with fresh basil, served with a sprinkle of parmesan and crusty bread.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 2,
    image: ChickenNoodleSoup, 
    title: "Chicken Noodle Soup",
    price: "$8.50",
    description: "Homestyle chicken broth with tender chicken, vegetables, and egg noodles - comfort in a bowl.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 3,
    image: ButternutSquashSoup,
    title: "Butternut Squash Soup",
    price: "$7.99",
    description: "Velvety smooth roasted butternut squash soup with a hint of cinnamon and nutmeg.",
    order: "order a delivery",
    icon: Bike,
  },
  {
    id: 4,
    image: FrenchOnionSoup, 
    title: "French Onion Soup",
    price: "$9.25",
    description: "Rich beef broth with caramelized onions, topped with toasted bread and melted gruyère cheese.",
    order: "order a delivery",
    icon: Bike,
  },
];