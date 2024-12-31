import ProductCard from "@/components/ProductCard";
import ProductCardItems from "@/components/ProductCardItems";
import { PRODUCT_DATA } from "@/constants/data";
import { useState } from "react";

const filterOption = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Lowest Price",
    value: "lowest-price",
  },
  {
    name: "Highest Price",
    value: "highest-price",
  },
];

const Kids = () => {
  // const [selectedOption, seSelectedOption] = useState("all");
  const [selectedOption, setSelectedOption] = useState("all");

  let filteredProducts = PRODUCT_DATA.kids;

  if (selectedOption === "lowest-price") {
    filteredProducts = PRODUCT_DATA.kids.sort((a, b) => a.price - b.price);
  } else if (selectedOption === "highest-price") {
    filteredProducts = PRODUCT_DATA.kids.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-full ">
      <div className="max-w-[1100px] mx-auto mt-8 px-4 flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {filterOption.map((filter) => (
              <option value={filter.value}>{filter.name}</option>
            ))}
          </select>

          <ProductCard
            data={filteredProducts}
            render={(product) => <ProductCardItems product={product} />}
          />
        </section>
      </div>
    </div>
  );
};

export default Kids;
