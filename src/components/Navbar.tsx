// import React, { useState } from "react";
// import { Drawer } from "./Drawer";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section className="bg-[#272684] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 p-4 sticky top-0 z-50">
//       <div className="flex items-center justify-between z-0">
//         <div>
//           <h1 className="text-xl font-semibold">Main Dashboard</h1>
//         </div>
//         <div className="md:hidden block right-4">
//           {!isOpen && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6 cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           )}
//           <Drawer {...{ isOpen, setIsOpen }} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Navbar;



import React, { useState,useRef,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "./Drawer";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);


  return (
    <>
      <section className="flex justify-between sm:px-16 px-4 sticky top-0 z-50"
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "#112240" : "transparent",
      }} 
      >
        <div className="py-4">
          <Link href="/" className="">
            <img className="w-10" src="/images/me.png" alt="" />
          </Link>
        </div>
        <nav className="md:block hidden py-6">
          <ul className="flex items-center gap-8">
            <li className="text-secondary text-xs">
              <a href="#about" className="text-white text-sm">About</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#experience" className="text-white text-sm">Experience</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#projects" className="text-white text-sm">Work</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#contact" className="text-white text-sm">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block py-4">
          <AiOutlineMenu
            className="text-secondary text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
