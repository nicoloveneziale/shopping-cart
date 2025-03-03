import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav className="bg-slate-900 w-full flex justify-between items-center p-2 font-mono text-lg text-slate-50">
        <Link className="m-5" to="/home">
          Main Page
        </Link>
        <ul className="w-15">
          <Link className="mr-6 border-b-2 border-slate-100 pb-1" to="/shirts">
            Shirts
          </Link>
          <Link className="border-b-2 border-slate-100 pb-1" to="/about">
            About Us
          </Link>
        </ul>
        <Link to="cart" className="mr-5">
          Cart
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
