import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import classNames from "classnames";
import menus from "../utils/menu";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  return (
    <>
      <section className="bg-[#272684] h-screen text-white px-3">
        <div className="h-16 flex items-center justify-between border-b border-[#2C5BCD]">
          {!collapsed && <img className="w-12" src="/images/me.png" alt="" />}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="pl-2 hover:bg-[#2C5BCD] p-1 rounded-full w-10 h-10 flex place-items-center justify-center"
          >
            {collapsed ? (
              <BsChevronDoubleRight className="text-xl" />
            ) : (
              <BsChevronDoubleLeft className="text-xl" />
            )}
          </button>
        </div>
        <ul className="space-y-4 my-4">
          {menus.map((menu, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-6">{menu.icon}</span> <span>{!collapsed && menu.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
