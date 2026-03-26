import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex justify-between items-center border p-4 mb-3 rounded shadow-sm hover:shadow transition">
      
      {/* Product Info */}
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-gray-600">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ➖
        </button>

        <span className="font-medium">{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          ➕
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartItem;