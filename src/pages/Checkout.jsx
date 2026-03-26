import useCart from "../hooks/useCart";
import { calculateTotal } from "../utils/helpers";

const Checkout = () => {
  const { cart } = useCart();

  const subtotal = calculateTotal(cart);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout 💳</h1>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty</p>
      )}

      {/* Order Summary */}
      {cart.length > 0 && (
        <>
          <div className="space-y-3 border rounded-lg p-4 sm:p-5 bg-white">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-3 border-b pb-2 text-sm sm:text-base"
              >
                <span className="break-words">
                  {item.title} × {item.quantity}
                </span>
                <span className="whitespace-nowrap">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 text-right border rounded-lg p-4 sm:p-5 bg-gray-50">
            <p className="text-gray-700">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <p className="text-gray-700">Tax (10%): ${tax.toFixed(2)}</p>
            <h2 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>
          </div>

          {/* Button */}
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto">
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;