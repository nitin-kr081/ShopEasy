import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border p-4 mb-3 rounded-lg shadow-sm hover:shadow transition">
      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <h2 className="font-semibold text-base sm:text-lg break-words">
          {item.title}
        </h2>
        <p className="text-gray-600 mt-1">${item.price}</p>
      </div>

      {/* Right Action Group */}
      <div className="flex items-center gap-3 self-end sm:self-auto">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-3 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            ➖
          </button>

          <span className="font-medium min-w-6 text-center">
            {item.quantity}
          </span>

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
          className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;