import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import classNames from "classnames";
import menus from "../utils/menu";
import Link from "next/link";

type Props = {
  collapsed: boolean;
  setCollapsed(collapsed: boolean): void;
};

const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const [showChild, setShowChild] = useState(false);

  const icon = showChild == true ? <AiFillCaretDown /> : <AiFillCaretRight />;

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
            <li key={index}>
              {menu?.children ? (
                <>
                  <span
                    className="flex items-center justify-between hover:bg-[#2C5BCD] rounded py-2 px-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6">{menu.icon}</span>{" "}
                      <span>{!collapsed && menu.label}</span>
                    </div>
                    <div>
                      <span className="cursor-pointer" onClick={()=> setShowChild((prev) => !prev)}>{!collapsed &&  icon}</span>
                    </div>
                  </span>
                </>
              ) : (
                <>
                  <Link
                    className="flex items-center gap-2 hover:bg-[#2C5BCD] rounded py-2 px-2"
                    href={menu.href}
                  >
                    <span className="w-6">{menu.icon}</span>{" "}
                    <span>{!collapsed && menu.label}</span>
                  </Link>
                </>
              )}
              {showChild && (
                <ul>
                  {menu?.children?.map((child, index) => (
                    <li key={index} className="px-8 text-sm">
                      <Link
                        className="flex items-center gap-2 hover:bg-[#2C5BCD] rounded py-2 px-2"
                        href={child.href}
                      >
                        <span className="w-6">{child.icon}</span>{" "}
                        <span>{!collapsed && child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
