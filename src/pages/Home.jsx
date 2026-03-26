import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">
        Welcome to ShopEasy 🛒
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 mb-6 max-w-md">
        Discover amazing products, add them to your cart, and enjoy a smooth shopping experience.
      </p>

      {/* Button */}
      <Link
        to="/products"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
      >
        Browse Products
      </Link>

    </div>
  );
};

export default Home;