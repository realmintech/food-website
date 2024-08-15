import React from 'react';
import './ExploreMenu.css';
import food1 from '../../assest/food.jpg';
import food2 from '../../assest/food2.jpg';
import food3 from '../../assest/food3.jpg';
import food4 from '../../assest/food2.webp';
import food5 from '../../assest/food5.jpg';
import food6 from '../../assest/food6.jpg';
import food7 from '../../assest/food7.jpg';
import food8 from '../../assest/food8.jpg';

const ExploreMenu = ({category, setCategory}) => {
  const menuFood = [
    { image: food1, name: 'Salad', price: 1500, category: 'Local food' },
    { image: food2, name: 'Hamburger', price: 4000 },
    { image: food3, name: 'Semo and egusi', price: 2500 },
    { image: food4, name: 'Jollof rice and chicken', price: 3800 },
    { image: food5, name: 'Moimoi', price: 1500 },
    { image: food6, name: 'Efo riro', price: 2000 },
    { image: food7, name: 'Ofada rice', price: 5000 },
    { image: food8, name: 'Ewa igonyi', price: 2500 },
  ];
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="menu-header">Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the favorite recipes.
      </p>
      <div className="explore-menu-list">
        {menuFood.map((food, index) => (
          <div
            className="explore-menu-list-item"
            key={index}
            onClick={() => setCategory((prev) => prev===food.name? 'All': food.name)}
          >
            <img src={food.image} alt="" id="menu-img" className={category===food.name?'active':''}/>
            <p className="menu-name">{food.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
