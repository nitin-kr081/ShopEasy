import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold hover:opacity-80">
        ShopEasy
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-3 sm:gap-6 items-center">
        {/* <Link to="/products" className="hover:underline">
          Products
        </Link> */}

        <Link
          to="/wishlist"
          className="relative hover:underline px-2 py-1 rounded hover:bg-blue-500"
        >
          Wishlist ({wishlist.length})
        </Link>

        <Link
          to="/cart"
          className="relative hover:underline px-2 py-1 rounded hover:bg-blue-500"
        >
          🛒 Cart ({totalItems})
        </Link>
      </div>

    </div>
    </div>
  );
};

export default Navbar;