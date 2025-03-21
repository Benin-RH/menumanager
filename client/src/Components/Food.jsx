import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";
import AddMenuDataForm from "./AddMenuDataForm.jsx";
import axios from "axios";

const Food = ({ menu }) => {
  const [foodList, setFoodList] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  const handleAddFood = (newFood) => {
    axios
      .post("http://localhost:5000/addMenuItem", newFood, menu)
      .then((res) => {
        console.log(res);
        getFoodList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFoodList = () => {
    axios
      .get(`http://localhost:5000/menu/${menu}`)
      .then((res) => {
        setFoodList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching menu items:", err);
      });
  };

  useEffect(() => {
    getFoodList();
  }, [menu]);

  return (
    <>
      <div className="menu-items">
        <h2 className="menu-title">{menu}</h2>
        <button className="add-button" onClick={() => setOpenForm(true)}>
          Add
        </button>

        {foodList.map((food, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-text">
              <h3>
                {food.menuItem} <span className="price">${food.price}</span>
              </h3>
              <p>{food.description}</p>
            </div>
          </div>
        ))}
      </div>

      {openForm && (
        <AddMenuDataForm
          menu={menu}
          onClose={() => setOpenForm(false)}
          onAdd={handleAddFood}
        />
      )}
    </>
  );
};

export default Food;
