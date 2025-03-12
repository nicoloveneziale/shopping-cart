import { Link, useOutlet } from "react-router-dom";
import HomePage from "./homePage";
import { useCart } from "../context/CartContext";

const Root = () => {
  const outlet = useOutlet();
  const { cart } = useCart();
  const cartItemCount = Object.keys(cart).reduce((acc, id) => {
    acc += cart[id].quantity;
    return acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 w-full flex md:flex-row flex-col justify-between md:items-center p-5 font-mono text-lg text-white">
        <Link className="font-bold" to="/">
          Binary Bazaar
        </Link>
        <ul className="flex items-center space-x-5">
          <Link
            className="border-b-2 border-white pb-1 hover:text-gray-200 transition-colors"
            to="/"
          >
            Home
          </Link>
          <Link
            className="border-b-2 border-white pb-1 hover:text-gray-200 transition-colors"
            to="/products"
          >
            Products
          </Link>
          <Link
            className="border-b-2 border-white pb-1 hover:text-gray-200 transition-colors"
            to="/about"
          >
            About Us
          </Link>
          <Link
            to="cart"
            className="border-b-2 border-white pb-1 hover:text-gray-200 transition-colors"
          >
            Cart {cartItemCount}
          </Link>
        </ul>
      </nav>
      <main className="flex-grow">{outlet || <HomePage />}</main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Binary Bazaar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Root;
