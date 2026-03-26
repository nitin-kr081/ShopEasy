import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border p-4 mb-3 rounded shadow-sm hover:shadow transition">
      
      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <h2 className="font-semibold break-words">{item.title}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2 self-start sm:self-auto">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ➖
        </button>

        <span className="font-medium">{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ➕
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 self-start sm:self-auto"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartItem;