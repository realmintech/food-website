import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className="cart-item-title cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>#{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>#{item.price * cartItem[item._id]}</p>
                  <FaTimes
                    onClick={() => removeFromCart(item._id)}
                    className="cross"
                  />
                </div>
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
        </div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>{0}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery fee</p>
          <p>{2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p className="bold-it">Total</p>
          <p className="bold-it">{0}</p>
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Cart;
