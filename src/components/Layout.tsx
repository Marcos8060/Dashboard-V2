import React, { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode; // Specify the type for children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${
          collapsed ? "w-16" : "w-2/12"
        } h-screen bg-gray-100 md:block hidden`}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setCollapsed((prev) => !prev)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Navbar collapsed={collapsed} />
        <div className="bg-[#DFEAF0]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
