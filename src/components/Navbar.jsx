import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import useWishlist from "../hooks/useWishlist";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  // Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-blue-600 text-white shadow z-50">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold hover:opacity-80">
        ShopEasy
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center">
        {/* <Link to="/products" className="hover:underline">
          Products
        </Link> */}

        <Link to="/wishlist" className="relative hover:underline">
          Wishlist ({wishlist.length})
        </Link>

        <Link to="/cart" className="relative hover:underline">
          🛒 Cart ({totalItems})
        </Link>
      </div>

    </div>
  );
};

export default Navbar;