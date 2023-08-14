// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import menus from "@/utils/menu";
// import Link from "next/link";

// type Props = {
//   isOpen: boolean;
//   setIsOpen(isOpen: boolean): void;
// };
// export const Drawer = ({ isOpen, setIsOpen }: Props) => {
//   return (
//     <>
//       {isOpen && (
//         <section className="bg-[#272684] overflow-hidden fixed h-screen inset-0 w-1/2 px-4 py-2 text-white z-50">
//           <div className="flex items-center justify-between border-b border-[#2C5BCD] my-2 py-1">
//             <img className="w-8" src="/images/me.png" alt="" />
//             <AiOutlineClose
//               onClick={() => setIsOpen(false)}
//               className="text-4xl cursor-pointer hover:bg-[#2C5BCD] rounded-full p-2"
//             />
//           </div>
//           <ul className="space-y-4 my-4">
//             {menus.map((menu, index) => (
//               <li key={index}>
//                 <Link className="flex items-center gap-2" href={menu.href}>
//                   <span className="w-6">{menu.icon}</span>{" "}
//                   <span>{menu.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </section>
//       )}
//     </>
//   );
// };




import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";


type Props = {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
};

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden bg-black bg-opacity-50 inset-0 transform ease-in-out z-50" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0 z-50  "
            : " transition-all delay-500 opacity-0 translate-x-full z-50  ")
        }
      >
        <section
          className={
            "right-0 md:w-3/12 w-3/4 absolute bg-[#272684] opacity-100 px-8 py-12 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 z-50 " : " translate-x-full ")
          }
        >
          <article className="">
            <div className="flex items-center justify-end">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl float-right cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-end px-48">
              <ul className="text-left space-y-8 w-48 py-12">
                <li className="w-72 px-3 py-2 flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <a
                    className="no-underline text-white hover:text-secondary transition ease-in-out duration-700"
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <a
                    className="text-white no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <a
                    className="text-white no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="#projects"
                  >
                    Work
                  </a>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <a
                    className="text-white no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}


