import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { calculateTotal } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = calculateTotal(cart);

  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          🛒 Your cart is empty
        </p>
      )}

      {/* Cart Items */}
      {cart.length > 0 && (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Total */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;