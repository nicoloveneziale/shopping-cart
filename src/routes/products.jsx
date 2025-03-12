import { useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductBox from "../components/productBox";

const Products = () => {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const [sideHidden, setSideHidden] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/category/electronics`,
        ).then((res) => res.json());
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.price - b.price;
    } else if (sortBy === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return outlet ? (
    outlet
  ) : (
    <main className="flex min-h-screen bg-gray-100">
      <aside
        className={`w-64 p-4 bg-gray-200 fixed top-0 left-0 h-full transform transition-transform duration-300 ease-in-out ${
          sideHidden ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0 md:static md:block`}
      >
        <button
          onClick={() => setSideHidden(true)}
          className="mb-4 p-2 bg-gray-300 rounded md:hidden"
        >
          Close
        </button>
        <h2 className="text-lg font-semibold mt-6 mb-4">Sort By</h2>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </aside>

      <div className="flex-grow p-6 w-full">
        <button
          onClick={() => setSideHidden(!sideHidden)}
          className="md:hidden p-2 bg-gray-200 rounded  top-4 left-4"
        >
          {sideHidden ? "Show Filters" : "Hide Filters"}
        </button>
        <div>
          <h1 className="text-3xl font-semibold mb-6">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductBox
                key={product.id}
                name={product.title}
                description={product.description}
                price={product.price}
                img={product.image}
                productId={product.id}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
