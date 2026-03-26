import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      
      {/* Render Products */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default ProductGrid;