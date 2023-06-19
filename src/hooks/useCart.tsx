import { useContext } from "react";
import CartContext from "../components/context/CartProvider";
import { UseCartContextType } from "../components/context/CartProvider";

const useCart = (): UseCartContextType => {
    return useContext(CartContext)
}

export default useCart;