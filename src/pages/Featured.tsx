import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ProductCardItems from "@/components/ProductCardItems";
import SectionHeader from "@/components/SectionHeader";
import { PRODUCT_DATA } from "@/constants/data";

const Featured = () => {
  return (
    <>
      <section className="max-w-[1100px] mx-auto px-4">
        <HeroSection />
      </section>
      <div className="w-full ">
        <div className="max-w-[1100px] mx-auto mt-8 px-4 flex flex-col gap-8">
          {/* Kids section */}
          <section className="flex flex-col gap-2">
            <SectionHeader title="Kids" link="/kids" />

            <ProductCard
              data={PRODUCT_DATA.kids.slice(0, 3)}
              render={(product) => <ProductCardItems product={product} />}
            />
          </section>

          {/* Men's Fashion */}
          <section className="flex flex-col gap-2">
            <SectionHeader title="Men's Fashion" link="/men" />
            <ProductCard
              data={PRODUCT_DATA.menFashion}
              render={(product) => <ProductCardItems product={product} />}
            />
          </section>

          {/* Women's Fashion */}
          <section className="flex flex-col gap-2">
            <SectionHeader title="Women's Fashion" link="/women" />
            <ProductCard
              data={PRODUCT_DATA.womenFashion}
              render={(product) => <ProductCardItems product={product} />}
            />
          </section>

          {/* Gadgets */}
          <section className="flex flex-col gap-2">
            <SectionHeader title="Gadgets" link="/gadgets" />
            <ProductCard
              data={PRODUCT_DATA.gadgets}
              render={(product) => <ProductCardItems product={product} />}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Featured;
