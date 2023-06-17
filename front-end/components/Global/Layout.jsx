import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="py-5">
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 ">
        <Navbar />
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
