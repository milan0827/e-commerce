import { NavItemsTypes, ProductDetailsType } from "@/types";
export const NAVITEMS: NavItemsTypes[] = [
  {
    id: 1,
    name: "Featured",
    link: "/featured",
  },
  {
    id: 2,
    name: "Kids",
    link: "/kids",
  },
  {
    id: 3,
    name: "Men",
    link: "/men",
  },
  {
    id: 4,
    name: "Women",
    link: "/women",
  },
  {
    id: 5,
    name: "Gadgets",
    link: "/gadgets",
  },
  {
    id: 6,
    name: "Carts",
    link: "/carts",
  },
];

export const PRODUCT_DATA: ProductDetailsType = {
  menFashion: [
    {
      id: 1,
      category: "clothes",
      name: "Sweater",
      price: 1234,
      image: "/images/cap.jpeg",
      isAddedToCart: false,
    },
    {
      id: 2,
      category: "clothes",
      name: "Cap",
      price: 13,
      image: "/images/sweater.jpeg",
      isAddedToCart: false,
    },
    {
      id: 3,
      category: "clothes",
      name: "Jeans",
      price: 123,
      image: "/images/menJeans.jpg",
      isAddedToCart: false,
    },
  ],
  kids: [
    {
      id: 4,
      category: "clothes",
      name: "Baby Suits",
      price: 500,
      isAddedToCart: false,
      image: "/images/babySuites.jpg",
    },
    {
      id: 5,
      category: "clothes",
      name: "Baby Hat",
      price: 2340,
      isAddedToCart: false,
      image: "/images/babyHat.jpeg",
    },
    {
      id: 6,
      category: "clothes",
      name: "Slippers",
      price: 600,
      isAddedToCart: false,
      image: "/images/slippers.jpg",
    },
    {
      id: 21,
      category: "clothes",
      name: "Slippers",
      price: 300,
      isAddedToCart: false,
      image: "/images/slippers.jpg",
    },
    {
      id: 22,
      category: "clothes",
      name: "Slippers",
      price: 1100,
      isAddedToCart: false,
      image: "/images/slippers.jpg",
    },
    {
      id: 23,
      category: "clothes",
      name: "Slippers",
      price: 1400,
      isAddedToCart: false,
      image: "/images/slippers.jpg",
    },
    {
      id: 24,
      category: "clothes",
      name: "Slippers",
      price: 720,
      isAddedToCart: false,
      image: "/images/slippers.jpg",
    },
  ],

  womenFashion: [
    {
      id: 7,
      category: "clothes",
      name: "Saaree",
      price: 123,
      isAddedToCart: false,
      image: "/images/saaree.jpg",
    },
    {
      id: 8,
      category: "clothes",
      name: "Cholo",
      price: 123,
      isAddedToCart: false,
      image: "/images/cholo.jpg",
    },
    {
      id: 9,
      category: "clothes",
      name: "Jeans",
      price: 123,
      isAddedToCart: false,
      image: "/images/womenJeans.jpg",
    },
  ],

  gadgets: [
    {
      id: 10,
      category: "gadgets",
      name: "earphone",
      price: 123,
      isAddedToCart: false,
      image: "/images/earphones.jpg",
    },
    {
      id: 11,
      category: "gadgets",
      name: "IPhone",
      price: 123,
      isAddedToCart: false,
      image: "/images/iphone.png",
    },
    {
      id: 12,
      category: "gadgets",
      name: "watch",
      price: 123,
      isAddedToCart: false,
      image: "/images/watch.jpg",
    },
  ],
};
