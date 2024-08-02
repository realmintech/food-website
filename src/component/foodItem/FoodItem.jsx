import React, { useContext } from 'react';
import './FoodItem.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} className="food-item-image" alt="" />
        {!cartItem[id] ? (
          <FaPlus className="add" onClick={() => addToCart(id)} />
        ) : (
          <div className="food-item-counter">
            <FaMinus onClick={() => removeFromCart(id)} />
            <p>{cartItem[id]}</p>
            <FaPlus onClick={() => addToCart(id)} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">#{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
