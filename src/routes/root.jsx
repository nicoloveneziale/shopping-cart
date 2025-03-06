import { Link, useOutlet } from "react-router-dom";
import HomePage from "./homePage";

const Root = () => {
  const outlet = useOutlet();

  return (
    <div>
      <nav className="bg-slate-900 w-full flex justify-between items-center p-5 font-mono text-lg text-slate-50">
        <Link className="mr-12 pb-1" to="/">
          Binary Bazaar
        </Link>
        <ul className="w-15">
          <Link className="mr-6 border-b-2 border-slate-100 pb-1" to="/">
            Home
          </Link>
          <Link
            className="mr-6 border-b-2 border-slate-100 pb-1"
            to="/products"
          >
            Products
          </Link>
          <Link className="border-b-2 border-slate-100 pb-1" to="/about">
            About Us
          </Link>
        </ul>
        <Link to="cart" className="mr-5">
          Cart
        </Link>
      </nav>
      <>{outlet || <HomePage />}</>
      <footer></footer>
    </div>
  );
};

export default Root;
