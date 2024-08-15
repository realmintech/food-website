import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="price-n-btn">
          <p className="food-item-price">#{price}</p>
            <button className="add-to-cart" onClick={() => addToCart(id)}>
              Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
