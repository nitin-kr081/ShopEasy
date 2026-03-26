import { useState } from "react";
import useProducts from "../hooks/useProducts";
import useDebounce from "../hooks/useDebounce";
import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const Products = () => {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const debouncedSearch = useDebounce(search);

  // Unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Filtering logic
  const filteredProducts = products
    .filter((product) => {
      return product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
    })
    .filter((product) => {
      if (category) {
        return product.category === category;
      }
      return true;
    })
    .filter((product) => {
      if (maxPrice) {
        return product.price <= maxPrice;
      }
      return true;
    });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Filters */}
      <Filters
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        categories={categories}
      />

      {/* Loading */}
      {loading && (
        <p className="text-center mt-10">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center mt-10 text-red-500">{error}</p>
      )}

      {/* No Results */}
      {!loading && !error && filteredProducts.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-500">No products found 😔</p>
          <p className="text-sm text-gray-400">
            Try changing your search or filters
          </p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && filteredProducts.length > 0 && (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
};

export default Products;