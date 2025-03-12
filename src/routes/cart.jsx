import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useCart();

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
      <div className="flex align-center justify-center w-full h-max">
        <h1 className="mt-20 text-4xl">Your Cart</h1>
        {Object.keys(cart).map((id) => {
          let item = cart[id];
          return (
            <div key={item.id}>
              <img src={item.img} alt="hi" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
