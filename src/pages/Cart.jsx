import useCart from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { calculateTotal } from "../utils/helpers";

const Cart = () => {
  const { cart } = useCart();

  const total = calculateTotal(cart);

  return (
    <div className="p-6">
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
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;