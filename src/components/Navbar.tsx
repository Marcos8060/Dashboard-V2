import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "./Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef<boolean>();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("navBackground:", navBackground);

  return (
    <>
      <section
        className="flex justify-between sm:px-16 p-4 sticky top-0 z-50"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#272684" : "transparent",
        }}
      >
        <div className="">
          <h1 className="text-xl">Main Dashboard</h1>
        </div>

        <div className="md:hidden block">
          <AiOutlineMenu
            className="text-black text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
