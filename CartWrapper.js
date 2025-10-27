import { useContext } from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

function CartWrapper() {
  const { cartOpen } = useContext(CartContext);
  return cartOpen ? <Cart /> : null;
}


export default CartWrapper;