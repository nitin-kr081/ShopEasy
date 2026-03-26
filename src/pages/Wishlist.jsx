import useWishlist from "../hooks/useWishlist";
import ProductGrid from "../components/ProductGrid";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="px-4 sm:px-6 py-4 sm:py-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Wishlist ❤️</h1>

      {/* Empty Wishlist */}
      {wishlist.length === 0 && (
        <p className="text-gray-500 text-center">
          Your wishlist is empty
        </p>
      )}

      {/* Wishlist Items */}
      {wishlist.length > 0 && (
        <ProductGrid products={wishlist} />
      )}
    </div>
  );
};

export default Wishlist;