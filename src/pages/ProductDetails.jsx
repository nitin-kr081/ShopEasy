import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/api";
import useCart from "../hooks/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

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

  return (
    <div className="p-6 max-w-3xl mx-auto">
      
      {/* Image */}
      <div className="h-60 flex items-center justify-center bg-white mb-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-h-full object-contain"
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

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;