import {Link} from "react-router-dom";

function ShopCard({src,brand,price,id}) {
    return (

        <>
            <Link to={`/product/${id}`}>
            <div className="flex flex-col justify-between items-center w-[250px] h-[350px] cursor-pointer overflow-hidden transition-transform border border-black rounded-xl">
                <img src={src} className="w-full h-[80%] object-cover"></img>
                <div>
                    <p className="text-xl">{brand}</p>
                    <p className="text-xl">Rs. {price}</p>
                </div>
            </div>
            </Link>
        </>
    );
}

export default ShopCard;