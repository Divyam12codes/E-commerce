import { useState, useContext } from "react";
import ShopCard from './ShopCard';
import ShopFilter from './ShopFilter';
import products from "./products";
import { SearchContext } from "./SearchContext";
function Shop() {
  
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const {searchTerm} = useContext(SearchContext); 

  const filteredProducts = products.filter(p => {
    return (
      (brand ? p.brand === brand : true) &&
      (color ? p.color === color : true) &&
      (price ? p.price <= price : true) &&
      (searchTerm
        ? p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.name?.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <>
      <div className="m-4 p-4 font-serif text-xl">
        <p>
          Step into style with URBAN HOOD — where fashion meets comfort. Discover
          the latest trends in streetwear, casual fits, and timeless essentials crafted
          for everyday confidence. From statement tees to premium hoodies, we bring
          you quality, comfort, and attitude in every piece. Shop your vibe. Wear your story.
        </p>
      </div>
                      
      <div className="flex">
        <div className="w-1/4">
          <ShopFilter
            brand={brand}
            setBrand={setBrand}
            color={color}
            setColor={setColor}
            price={price}
            setPrice={setPrice}
          />
        </div>

        <div className="w-3/4 flex flex-row flex-wrap gap-4 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ShopCard
                key={item.id}
                src={item.img}
                brand={item.brand}
                price={item.price}
                id={item.id}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center w-full mt-10 text-xl">
              No products match your filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
