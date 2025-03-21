import React from "react";
import { useState } from "react";
import "..//Styles/MenuData.css";
import MenuDataSelection from "./MenuDataSelection";

const MenuData = () => {
  const [selectMenu, setSelectMenu] = useState();
  const handleMenuSelector = (menuItem) => {
    setSelectMenu(menuItem);
  };
  return (
    <div className="menu-container">
      <div className="menu-tabs">
        <button
          className={`tab ${selectMenu == "Foods" ? "active" : ""}`}
          onClick={() => {
            handleMenuSelector("Foods");
          }}
        >
          FOODS
        </button>
        <button
          className={`tab ${selectMenu == "Drinks" ? "active" : ""}`}
          onClick={() => {
            handleMenuSelector("Drinks");
          }}
        >
          DRINKS
        </button>
      </div>

      <div className="menu-content border ">
        {!selectMenu && (
          <p>Please select Drinks or Foods to add your favourite </p>
        )}

        {selectMenu && <MenuDataSelection menu={selectMenu} />}
      </div>
    </div>
  );
};

export default MenuData;
