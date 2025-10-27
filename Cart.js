import { useContext } from "react";
import { CartContext } from "./CartContext";
import plus from "./assets/plus.jpg";
import minus from "./assets/minus.jpg";
function Cart() {
    
    const { cartItems, cartOpen, toggleCart, removeFromCart, setCartOpen , setCartItems, increaseQuantity, decreaseQuantity} = useContext(CartContext);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (!cartOpen) return null;

    return(
        <>
            <div className={`fixed top-0 right-0 h-full w-[30%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-4 flex justify-between">
                        <p className="flex text-2xl font-serif"> CART </p>
                        <button
                            onClick={() => {
                                setCartOpen(false)
                            }}
                            className="text-gray-600 hover:text-black"
                        >
                            ❌  
                        </button>
                </div>
                <div className="border border-black border-thick"></div>
                <div className="h-[75%] overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="p-4 text-gray-500">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b p-3">
                            <div>
                                <p className="font-semibold">{item.brand}</p>
                                <p>₹{item.price} × {item.quantity}</p>
                                </div>
                                <div className="border border-black h-10 w-30 flex justify-between">
                                    <img src={plus} className="h-8 w-15 object-contain" onClick={() => increaseQuantity(item.id)}/>
                                    <img src={minus} className="h-8 w-15 object-contain" onClick={() => decreaseQuantity(item.id)}/>
                                </div>
                                <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                                >
                                ✖
                                </button>
                            </div>
                            ))
                        )}
                        </div>
                        
                        <div className="flex flex-col bottom-0">
                            <p className="ml-2 font-bold font-sans">Total Amount Payable:{total}</p>
                            <button className="bg-black text-white w-25 m-2 p-3" onClick={()=> alert("This product is not available right now. Sorry for inconvenience")}>Checkout</button>
                        </div>
                    </div>
        </>
    );
}

export default Cart;