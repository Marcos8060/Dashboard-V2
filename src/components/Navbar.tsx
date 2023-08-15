import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "./Drawer";

type props ={
  collapsed: boolean
}

const Navbar = ({ collapsed }:props) => {
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


  return (
    <>
      <section
        className="flex justify-between sm:px-16 p-4 sticky top-0 z-50 shadow-xl bg-[#272684] text-white"
      >
        <div className="">
          <h1 className="text-xl">Main Dashboard</h1>
        </div>

        <div className="md:hidden block">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer {...{isOpen,setIsOpen,collapsed}} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
