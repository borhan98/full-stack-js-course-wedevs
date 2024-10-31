import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item?.product.id !== id));
  };

  const cartInfo = { cart, addToCart, removeFromCart };

  return <CartContext.Provider value={cartInfo}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;