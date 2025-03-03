import shopImage from "../assets/shop3.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-600">
      <div className="flex bg-gray-300 text-8xl font-serif text-bold tracking-wide text-slate-900 p-5">
        <h1>
          Welcome to <span className="text-blue-900">Tallity.</span>
        </h1>
      </div>
      <div className="flex text-4xl font-serif tracking-wide p-3 pl-10 text-gray-200">
        <h2>The clothes tailored for the giants</h2>
      </div>
      <div className="flex p-5 bg-gray-100">
        <div className="p-4 pt-8 ">
          <Link
            to="/about"
            className="text-5xl font-mono text-slate-800 m-2 text-bold border-b-4 border-slate-700 w-max"
          >
            About Us
          </Link>
          <p className="border-r-8 border-slate-800 text-2xl bg-gray-200 font-mono p-5 m-4">
            A Legacy of Length. For generations, the struggle to find clothing
            that truly fits has been a familiar tale for the tall among us.
            Tallity was born from this very story. Founded in 2025 by Nicolo
            Veneziale, a towering individual with a passion for tailoring, we
            began as a small workshop dedicated to crafting garments that
            celebrated height, not concealed it. From hand-measuring each piece
            to sourcing the finest, extra-long fabrics, our commitment to
            quality and fit has remained unwavering. Today, we carry on this
            legacy, blending time-honored techniques with modern designs,
            ensuring that every tall person can experience the confidence that
            comes with perfectly fitting clothing.
          </p>
        </div>
        <img src={shopImage} className="w-6/12" alt="shop image" />
      </div>
    </div>
  );
};

export default HomePage;
