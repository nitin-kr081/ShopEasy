import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/api";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

const ProductDetails = () => {
  const { id } = useParams();
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  // Loading state
  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="p-6 max-w-3xl mx-auto relative">
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute right-6 top-6 text-2xl"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? "❤️" : "🤍"}
      </button>
      
      {/* Image */}
      <div className="h-64 w-full overflow-hidden flex items-center justify-center bg-white mb-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

      {/* Description */}
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Price */}
      <p className="text-green-600 font-bold text-lg mb-4">
        ${product.price}
      </p>

      {/* Cart Controls */}
      {!cartItem && (
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}

      {cartItem && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => decreaseQty(product.id)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            -
          </button>
          <span className="font-semibold">{cartItem.quantity}</span>
          <button
            onClick={() => increaseQty(product.id)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;