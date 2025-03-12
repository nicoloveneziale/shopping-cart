import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductBox from "../components/productBox";

const ProductsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useCart();

  function handleClick() {
    setCart({ ...cart, [productId]: { id: productId, quantity: quantity } });
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        ).then((res) => res.json());
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }
    if (productId) {
      getProduct();
    } else {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        const data = await fetch(
          "https://fakestoreapi.com/products/category/electronics",
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

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!product && productId) {
    return <div className="text-center py-10">Product not found.</div>;
  }

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-9/12 bg-gray-100">
      <div className="container mx-auto w-full max-w-4xl p-4 md:p-6">
        {product ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-96 rounded-md"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
                <p className="text-gray-700 mb-6 text-base">
                  {product.description}
                </p>
                <div className="mb-3">
                  <span className="font-semibold text-base">Price:</span> $
                  {product.price}
                </div>
                <div className="mb-3">
                  <span className="font-semibold text-base">Rating:</span>{" "}
                  {product.rating.rate} (Count: {product.rating.count})
                </div>
                <div className="flex items-center mb-3">
                  <label htmlFor="quantity" className="mr-2 text-base">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border rounded-md p-1 w-16 text-base"
                    min="1"
                  />
                </div>
                <button
                  onClick={() => handleClick()}
                  className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors text-base"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Products</h1>
            <p className="text-lg text-gray-700">
              Select a product to view details.
            </p>
          </div>
        )}
        <div>
          <h1 className="text-2xl font-semibold mb-4">More Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              return (
                <ProductBox
                  key={product.id}
                  name={product.title}
                  description={product.description}
                  price={product.price}
                  img={product.image}
                  productId={product.id}
                  setQuantity={() => setQuantity(1)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
