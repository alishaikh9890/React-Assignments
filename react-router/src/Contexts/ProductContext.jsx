import React from "react";
// import { useParams } from "react-router-dom";

export const ProductContext = React.createContext();

export function ProductContextProvider({children}) {
    // const {Id} = useParams();

    const [loading, setLoading] = React.useState(true);
    const [error, setError]  = React.useState(false);
    const [products, setProducts] = React.useState([])
    // const [productDetails, setProductDetails] = React.useState([])

    React.useEffect(() => {
        fetch(`http://localhost:3004/products`)
        .then((res) => res.json()) 
        .then((res) => setProducts(res))
        .catch((err) => setError(true))
        .finally(() => setLoading(false))
    },[])

    // React.useEffect(() => {
    //     fetch(`http://localhost:3004/products/${Id}`)
    //     .then((res) => res.json())
    //     .then((res) => setProductDetails(res))

    // },[Id])


    return (
        <ProductContext.Provider value={{products}} >
            {children}
        </ProductContext.Provider>
    )
}