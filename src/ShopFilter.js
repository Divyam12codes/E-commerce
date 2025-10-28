function ShopFilter({ brand, setBrand, color, setColor, price, setPrice }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <label className="block mb-2">Brand:</label>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
      </select>

      <label className="block mb-2">Color:</label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Brown">Brown</option>
      </select>

      <label className="block mb-2">Max Price:</label>
      <input
        type="range"
        min="500"
        max="1000"
        step="100"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full"
      />
      <p className="text-sm text-gray-600 mt-2">Up to ₹{price || "1000"}</p>

      <button
        onClick={() => {
          setBrand("");
          setColor("");
          setPrice("");
        }}
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default ShopFilter;
