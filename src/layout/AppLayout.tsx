import Navbar from "@/components/Navbar";
import { ProductProvider } from "@/store/ProductStore";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <ProductProvider>
      <div className="relative flex flex-col min-h-screen">
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <main className="mb-10 flex-grow">
          <Outlet />
        </main>

        {/* NOTE: Footer is not completed because other core required features are done, so Please consider this */}
        <footer className="bg-zinc-800 p-20">
          <p className="text-gray-100">GeeKTech</p>
          <p className="text-gray-100">About Us</p>
          <p className="text-gray-100">Contact Us</p>
          <p className="text-gray-100">Career</p>
          <p className="text-gray-100">Privacy Policy</p>
        </footer>
      </div>
    </ProductProvider>
  );
};

export default AppLayout;
