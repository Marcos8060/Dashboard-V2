// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import MainSection from "./MainSection";
// import Navbar from "./Navbar";

// const Layout = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <>
//       <section className={`${collapsed ? "flex gap-1" : "flex"}`}>
//         <div className={`${collapsed ? "w-16" : "w-3/12"}`}>
//           <Sidebar
//             collapsed={collapsed}
//             setCollapsed={() => setCollapsed((prev) => !prev)}
//           />
//         </div>
//         <div className="w-full">
//           <Navbar />
//           <MainSection />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Layout;






import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import Navbar from "./Navbar";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`${
          collapsed ? "w-16" : "w-3/12"
        } h-screen bg-gray-100 md:block hidden`}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setCollapsed((prev) => !prev)}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <MainSection />
      </div>
    </div>
  );
};

export default Layout;

