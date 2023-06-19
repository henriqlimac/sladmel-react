import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Lorem",
    price: 23.99,
  },
  {
    sku: "item0002",
    name: "Ipsum",
    price: 12.99,
  },
  {
    sku: "item0003",
    name: "Dolor",
    price: 49.99,
  },
  {
    sku: "item0004",
    name: "Sit",
    price: 34.99,
  },
];

export type UseProductsContextType = { products: ProductType[] }

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType []> => {
    //         const data = await fetch('http://localhost:3500/products').then(res => {
    //             return res.json()
    //         }).catch(err => {
    //             if (err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // },[])

    return(
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext;