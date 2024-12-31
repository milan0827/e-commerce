import AppTitle from "./AppTitle";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] relative">
      <div className="w-full h-full bg-black/50 absolute "></div>
      <img src="/images/guitar.jpeg" alt="guitar" />
      <div className="absolute  left-[5%] sm:left-[20%] top-[30%] flex flex-col gap-6">
        <AppTitle
          className="w-[15rem] sm:w-[20rem]"
          size={"large"}
          title="Pick Two Musical Instruments, Get Guitar Free"
        />
        <div className="flex items-center gap-3">
          <Button size={"small"} variant={"primary"} label="Buy Now" />
          <Button size={"small"} variant={"secondary"} label="View Details" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
