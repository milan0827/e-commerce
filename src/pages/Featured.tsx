import AppTitle from "@/components/AppTitle";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";

const Featured = () => {
  return (
    <>
      <section className="max-w-[1100px] mx-auto px-4">
        <HeroSection />
      </section>
      <section className="w-full px-4">
        <div className="max-w-[1140px] mx-auto mt-8">
          <SectionHeader title="Kids" link="/kids" />
          <div className="flex">
            <div className="w-60 shadow-[0px_4px_4px_rgba(0,0,0,0.1)] bg-gray-100 rounded-md overflow-hidden hover:shadow-[0px_4px_4px_rgba(0,0,0,0.4)] transition-all duration-200 ">
              <div className="w-full  ">
                <img src="/images/sweater.jpeg" alt="earphones" className="" />
              </div>

              <div className="p-1">
                <AppTitle
                  title="Earphones"
                  variant={"secondary"}
                  size={"small"}
                />
                <p className="text-zinc-600">
                  Price: <span className="text-red-500">Rs.1234</span>
                </p>
                <div className="flex w-full items-center gap-2">
                  <Button label="Buy now" size={"small"} />
                  <Button
                    label="Add to cart"
                    size={"small"}
                    variant={"secondary"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
