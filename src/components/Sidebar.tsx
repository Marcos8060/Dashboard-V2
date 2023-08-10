import React, { useState } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { BsChevronDoubleLeft,BsChevronDoubleRight } from 'react-icons/bs'
import classNames from "classnames";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({ collapsed, setCollapsed }: Props) => {


  return (
    <>
      <section className="bg-[#272684] h-screen px-2 text-white">
        <div className="h-16 flex items-center justify-between border-b border-[#2C5BCD]">
          {!collapsed && <img className="w-12" src="/images/me.png" alt="" /> }
          <button onClick={()=>setCollapsed(!collapsed)} className="pl-2">
            {collapsed ? <BsChevronDoubleRight className="text-xl" /> : <BsChevronDoubleLeft className="text-xl" />}
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
