import products from "./products";
import ShopFilter from "./ShopFilter";
import ShopCard from "./ShopCard";
import { useState } from "react";
function Sale() {
    const [brand, setBrand] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");

    const saleProducts=products.filter(p=>{
        return p.sale==="true";
    });

    const filteredProducts = saleProducts.filter(p => {
        return (
        (brand ? p.brand === brand : true) &&
        (color ? p.color === color : true) &&
        (price ? p.price <= price : true)
        );
    });
    
    
    return(
        <>
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
export default Sale;