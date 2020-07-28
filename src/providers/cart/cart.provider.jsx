import React, { createContext, useState, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {}, //anonymous function : because defualt value of toggle hidden should be an empty
  // empty function if we ever invoke this function from context and there is no other function defuned like
  //there's no new function defined for toggle hidden we don't want an error to be thrown beacuse if
  // if default value of this is null you connot invoke a null object so we're gonna put an empty function
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

// cart provider component
// this is going to be equal to a function component that of course has children
//because all the children are going to be all those component
//that we're wrapping which represent our entire application
const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setcartItemsCount] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));


  useEffect(() => {
    setcartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
