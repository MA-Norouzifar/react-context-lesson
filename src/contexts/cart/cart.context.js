import { createContext } from "react";

//initial value to object because we need to set both
//a value that we want the context to hold
// but also the function that will end up updating value
// we create function in consumer component
// because parent component we need to leverage it's local state changes in order for these
//change to propagate into our context
const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {}, //anonymous function : because defualt value of toggle hidden should be an empty
  // empty function if we ever invoke this function from context and there is no other function defuned like
  //there's no new function defined for toggle hidden we don't want an error to be thrown beacuse if
  // if default value of this is null you connot invoke a null object so we're gonna put an empty function
});

export default CartContext;
