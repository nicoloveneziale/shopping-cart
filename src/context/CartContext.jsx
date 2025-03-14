import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { CartContext } from "./CartContextObject";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export const useCart = () => useContext(CartContext);
