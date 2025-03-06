import { Link } from "react-router-dom";
import ProductBox from "../components/productBox";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Binary Bazaar</h1>
          <p className="text-lg mb-8">
            Your one-stop shop for the latest tech gadgets and gizmos.
          </p>
          <Link
            className="bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            to="/products"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductBox
              name="product"
              description="description"
              price="price"
            />

            <ProductBox
              name="product"
              description="description"
              price="price"
            />

            <ProductBox
              name="product"
              description="description"
              price="price"
            />

            <ProductBox
              name="product"
              description="description"
              price="price"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            About Binary Bazaar
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Binary Bazaar is your premier online destination for cutting-edge
            technology. We pride ourselves on offering a wide selection of
            high-quality tech products at competitive prices. Our mission is to
            make the latest technology accessible to everyone.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
