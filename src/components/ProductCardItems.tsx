import { useProductContext } from "@/store/ProductStore";
import { ProudctTypes } from "@/types";
import AppTitle from "./AppTitle";
import Button from "./Button";

const ProductCardItems = ({
  product,
  isCartProductPage,
}: {
  product: ProudctTypes;
  isCartProductPage?: boolean;
}) => {
  const { handleAddProduct, handleRemoveProduct } = useProductContext();

  return (
    <li className="flex ">
      <div className="relative flex md:flex-col  shadow-[0px_4px_4px_rgba(0,0,0,0.1)] bg-gray-100 rounded-md overflow-hidden hover:shadow-[0px_4px_4px_rgba(0,0,0,0.4)] transition-all duration-200 ">
        <div className="w-24 h-20 md:w-80 md:h-64">
          <img
            src={product.image}
            alt={product.name}
            className="object-center object-cover"
          />
        </div>

        <div className="p-1">
          <AppTitle title={product.name} variant={"secondary"} size={"small"} />
          <p className="text-zinc-600 text-sm">
            Price: <span className="text-red-500">Rs.{product.price}</span>
          </p>
          <div className="flex w-full items-center gap-2">
            <Button label="Buy now" size={"small"} />

            {isCartProductPage ? (
              <Button
                label="Remove"
                size={"small"}
                variant={"secondary"}
                onClick={() => handleRemoveProduct(product.id)}
              />
            ) : product.isAddedToCart === true ? (
              <p>Already in Cart</p>
            ) : (
              <Button
                label="Add to cart"
                size={"small"}
                variant={"secondary"}
                onClick={() => {
                  handleAddProduct(product);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCardItems;
