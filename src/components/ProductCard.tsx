import { ReactNode } from "react";

const ProductCard = <T,>({
  data,
  render,
  className,
}: {
  data: T[];
  render: (a: T) => ReactNode;
  className?: string;
}) => {
  return (
    <ul
      className={`flex flex-wrap gap-4 items-center justify-between w-full ${className}`}
    >
      {data.map(render)}
    </ul>
  );
};

export default ProductCard;
