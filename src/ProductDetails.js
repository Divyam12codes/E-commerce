import { useState ,useContext} from "react";
import { useParams } from "react-router-dom";
import products from "./products";
import plus from "./assets/plus.jpg";
import minus from "./assets/minus.jpg";
import { CartContext } from "./CartContext";
function ProductDetails(){
    const {id} = useParams();
    const product = products.find((p)=> p.id === parseInt(id));
    const [count,setCount]=useState(1); 
    const {addToCart} = useContext(CartContext);
    
    if(!product){
        return (
            <h2>"Product Not Found!!</h2>
        );
    }
    return(
        <>  
            <div className="flex">
                <div className="w-80 h-50 m-4 p-3">
                    <img src={product.img} className="w-full h-96"/>
                </div>
                <div className="m-4 p-4 flex flex-col gap-4">
                    <h2 className="text-2xl ">{product.brand}</h2>
                    <p>{product.description}</p>
                    <h2 className="font-semibold"> Rs. {product.price}</h2>
                    <p>Select your size :</p>
                    <select className="border border-black">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                    <p>Select the quantity : </p>
                    <div className="border border-black h-10 w-30 flex justify-between">
                        <img src={plus} className="h-8 w-15 object-contain" onClick={() => setCount(count+1)}/>
                        <p className="flex items-center">{count}</p>
                        <img src={minus} className="h-8 w-15 object-contain" onClick={() => setCount(Math.max(1,count-1))}/>
                    </div>
                </div>
                <div className="m-20 p-10 flex flex-col gap-10 items-center">
                    <button className="border border-black text-black w-40 p-3" onClick={()=>addToCart({ ...product, quantity: count })}>Add to Cart</button>
                    <button className=" bg-slate-500 text-white w-40 p-3" onClick={()=> alert("This product is not available right now. Sorry for inconvenience")}>Shop Now</button>
                </div> 

            </div>
        </>
    );
}
 
export default ProductDetails;