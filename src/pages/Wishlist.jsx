import useWishlist from "../hooks/useWishlist";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Wishlist ❤️</h1>

      {/* Empty Wishlist */}
      {wishlist.length === 0 && (
        <p className="text-gray-500 text-center">
          Your wishlist is empty
        </p>
      )}

      {/* Wishlist Items */}
      {wishlist.length > 0 && (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;