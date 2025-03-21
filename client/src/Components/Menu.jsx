import React from "react";
import Footer from "./Footer.jsx";
import MenuData from "./MenuData.jsx";
import MenuHeader from "./MenuHeader.jsx";

const Menu = () => {
  return (
    <div className='"menuContainer flex-fill"'>
      <MenuHeader/>
      <MenuData />
      <Footer />
    </div>
  );
};

export default Menu;
