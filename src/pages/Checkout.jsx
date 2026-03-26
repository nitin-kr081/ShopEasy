import useCart from "../hooks/useCart";
import { calculateTotal } from "../utils/helpers";

const Checkout = () => {
  const { cart } = useCart();

  const total = calculateTotal(cart);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout 💳</h1>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty</p>
      )}

      {/* Order Summary */}
      {cart.length > 0 && (
        <>
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b pb-2"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>
          </div>

          {/* Button */}
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;