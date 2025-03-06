import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getProducts() {
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
      getProducts();
    } else {
      setLoading(false);
    }
  }, [productId]);

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {" "}
      {/* Center content vertically and horizontally */}
      <div className="container mx-auto w-full max-w-4xl p-4 md:p-6">
        {" "}
        {/* Use max-w-4xl to limit width */}
        {product ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {" "}
              {/* Use items-start to align content to the top */}
              <div className="flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-96 rounded-md"
                />
              </div>
              <div className="flex flex-col justify-start">
                {" "}
                {/* Use flex-col and justify-start to take up vertical space */}
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
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors text-base">
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
      </div>
    </div>
  );
};

export default ProductsPage;
