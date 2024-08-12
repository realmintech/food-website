import { createContext, useState, useEffect } from 'react';
import { food_list } from '../assest/Food';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(() => {
    const savedCart = localStorage.getItem('cartItem');
    return savedCart ? JSON.parse(savedCart) : {};
  });


  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem]);

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      localStorage.setItem('cartItem', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...rest } = prev;
        localStorage.setItem('cartItem', JSON.stringify(rest));
        return rest;
      } else {
        const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
        localStorage.setItem('cartItem', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const itemInfo = food_list.find(
        (product) => product._id === parseInt(itemId)
      );
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItem[itemId];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
