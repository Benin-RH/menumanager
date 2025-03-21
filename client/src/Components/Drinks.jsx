import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";
import AddMenuDataForm from "./AddMenuDataForm";
import axios from 'axios'

const Drinks = ({ menu }) => {
  const [drinkList, setDrinkList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddDrink = (newDrink) => {
    axios
      .post("http://localhost:5000/addMenuItem", newDrink, menu)
      .then((res) => {
        console.log(res);
        getDrinkList();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getDrinkList = () => {
    axios
      .get(`http://localhost:5000/menu/${menu}`)
      .then((res) => {
        setDrinkList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };
  useEffect(() => {
    getDrinkList();
  }, [menu]);
  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>

        {drinkList.map((drink, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-text">
              <h3>
                {drink.menuItem} <span className="price">${drink.price}</span>
              </h3>
              <p>{drink.description}</p>
            </div>
          </div>
        ))}
      </div>

      {openForm && (
        <AddMenuDataForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddDrink}
        />
      )}
    </>
  );
};

export default Drinks;
