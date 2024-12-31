import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative">
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main className="mb-10">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
