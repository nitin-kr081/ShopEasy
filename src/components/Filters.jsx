const Filters = ({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  categories,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Categories</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Clear Filters Button (NEW but simple) */}
      <button
        onClick={() => {
          setCategory("");
          setMaxPrice("");
        }}
        className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
      >
        Clear
      </button>
    </div>
  );
};

export default Filters;