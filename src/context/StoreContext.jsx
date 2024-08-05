import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assest/Food';
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(()=>{
    console.log(cartItem)
  },[cartItem])


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