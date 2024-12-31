export interface ProudctTypes {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  isAddedToCart?: boolean;
}

export interface ProductDetailsType {
  [key: string]: ProudctTypes[];
}

export interface NavItemsTypes {
  id: number;
  name: string;
  link: string;
}
