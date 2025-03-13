import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useCart();

  if (Object.keys(cart).length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-4xl font-semibold mb-4">Your Cart is empty</h1>
        <Link
          className="text-indigo-600 hover:underline text-xl"
          to="/products"
        >
          Add products here!
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (event, id) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCart((prevCart) => {
        const updatedCart = { ...prevCart };
        updatedCart[id] = { ...updatedCart[id], quantity: value };
        return updatedCart;
      });
    }
  };

  const handleDelete = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto max-w-4xl p-4 md:p-6">
        <h1 className="text-4xl font-semibold mb-8 text-center">Your Cart</h1>
        <div className="grid grid-cols-1 gap-6">
          {Object.keys(cart).map((id) => {
            const item = cart[id];

            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
              >
                <Link
                  to={`/products/${id}`}
                  className="flex items-center space-x-4"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </Link>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <label htmlFor="quantity" className="mr-2 text-sm">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(event, id)}
                      className="border rounded-md p-1 w-16 text-sm"
                      min="1"
                    />
                  </div>
                  <button
                    onClick={() => handleDelete(id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
