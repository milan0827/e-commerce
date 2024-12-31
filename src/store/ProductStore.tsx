import { ProudctTypes } from "@/types";
import { createContext, SetStateAction, useContext, useState } from "react";

type ProductContextType = {
  productList: ProudctTypes[];
  setProductList: React.Dispatch<SetStateAction<ProudctTypes[] | []>>;
  handleAddProduct: (data: ProudctTypes) => void;
  handleRemoveProduct: (id: number) => void;
};

const ProductContext = createContext<ProductContextType | []>([]);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productList, setProductList] = useState<ProudctTypes[] | []>([]);

  const handleAddProduct = (data: ProudctTypes) => {
    setProductList((prod) => {
      const productExists = prod.some((item) => item.id === data.id);
      if (productExists) {
        return prod.map((item) =>
          item.id === data.id ? { ...item, isAddedToCart: true } : item
        );
      }

      return [...prod, { ...data, isAddedToCart: true }];
    });
  };

  const handleRemoveProduct = (id: number) => {
    if (!productList) {
      console.log("No product");
      return;
    }

    setProductList((prod) => prod.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        handleAddProduct,
        handleRemoveProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext) as ProductContextType;

  if (!context)
    throw new Error(
      "useProductContext must be used within the CartProductProvider"
    );

  return context;
};
