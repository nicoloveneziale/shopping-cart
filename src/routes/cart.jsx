import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useCart();
  console.log(cart);

  if (Object.keys(cart).length == 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl">Your Cart is empty</h1>
        <Link className="text-blue-800 text-xl" to="/products">
          Add products here!
        </Link>
      </div>
    );
  }

  return (
    <>
      <div></div>
    </>
  );
};

export default Cart;
