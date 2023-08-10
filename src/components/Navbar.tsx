import React, { useState } from "react";
import { Drawer } from "./Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#272684] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-4 sticky top-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Main Dashboard</h1>
          </div>
          <div className="md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Drawer {...{ isOpen, setIsOpen }} />
          </div>
        </div>
    </section>
  );
};

export default Navbar;
