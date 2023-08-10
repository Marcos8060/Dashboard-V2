import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import menus from "@/utils/menu";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
};
export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <section className="bg-[#272684] overflow-hidden fixed h-screen inset-0 w-1/2 px-4 py-2 text-white z-50">
          <div className="flex items-center justify-between border-b border-[#2C5BCD] my-2 py-1">
            <img className="w-8" src="/images/me.png" alt="" />
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="text-4xl cursor-pointer hover:bg-[#2C5BCD] rounded-full p-2"
            />
          </div>
          <ul className="space-y-4 my-4">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link className="flex items-center gap-2" href={menu.href}>
                  <span className="w-6">{menu.icon}</span>{" "}
                  <span>{menu.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

