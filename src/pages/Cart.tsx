import AppTitle from "@/components/AppTitle";
import ProductCardItems from "@/components/ProductCardItems";
import { useProductContext } from "@/store/ProductStore";

const Cart = () => {
  const { productList } = useProductContext();
  return (
    <div className="">
      <div className="max-w-[1140px] mx-auto p-4">
        <AppTitle title="Carts" variant={"secondary"} />
        {productList.length === 0 ? (
          <div className="flex items-center justify-center  my-20">
            <AppTitle
              title="There are no products in cart"
              variant={"secondary"}
            />
          </div>
        ) : null}

        <ul className="flex flex-wrap gap-4 items-center justify-between w-full">
          {productList.map((product) => (
            <ProductCardItems product={product} isCartProductPage />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
