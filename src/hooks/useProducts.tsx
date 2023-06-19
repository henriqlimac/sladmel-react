import { useContext } from "react";
import ProductsContext from "../components/context/ProductsProvider";
import { UseProductsContextType } from "../components/context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
    return useContext(ProductsContext)
}

export default useProducts;