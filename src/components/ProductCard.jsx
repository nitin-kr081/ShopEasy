import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

const ProductCard = ({ product }) => {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  // Find if product is already in cart
  const cartItem = cart.find((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="relative border rounded-lg p-4 shadow hover:shadow-lg transition">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 text-xl"
        aria-label={
          isInWishlist ? "Remove from wishlist" : "Add to wishlist"
        }
      >
        {isInWishlist ? "❤️" : "🤍"}
      </button>
      
      {/* Image */}
      <div className="h-44 w-full overflow-hidden flex items-center justify-center bg-white mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Title */}
      <Link to={`/product/${product.id}`}>
        <h2 className="text-lg font-semibold hover:underline">
          {product.title}
        </h2>
      </Link>

      {/* Description */}
      <p className="text-gray-600 text-sm line-clamp-2">
        {product.description}
      </p>

      {/* Price + Controls */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-green-600 font-bold">
          ${product.price}
        </span>

        {/* If NOT in cart → show Add */}
        {!cartItem && (
          <button
            onClick={() => addToCart(product)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            ➕ Add
          </button>
        )}

        {/* If IN cart → show - qty + */}
        {cartItem && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(product.id)}
              className="px-2 bg-gray-300 rounded"
            >
              ➖
            </button>

            <span>{cartItem.quantity}</span>

            <button
              onClick={() => increaseQty(product.id)}
              className="px-2 bg-gray-300 rounded"
            >
              ➕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;