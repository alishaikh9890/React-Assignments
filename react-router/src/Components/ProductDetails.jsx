import React from 'react'
import { ProductContext } from '../Contexts/ProductContext';

import { useParams } from "react-router-dom";

function ProductDetails() {

  // const {productDetails} = React.useContext(ProductContext)

    const {productId} = useParams();

  const [loading, setLoading] = React.useState(true)
  const [ error, setError] = React.useState(false)
  const [productDetails, setProductDetails] = React.useState([])

  React.useEffect(() => {
    fetch(`http://localhost:3004/products/${productId}`)
    .then((res) => res.json())
    .then((res) => setProductDetails(res))
    .catch((err) => setError(true))
    .finally(() => setLoading(false))

},[productId])


  return (
    <div>
        {
            loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>Something Went Wrong</h2>
            ) : (
              <div>
              <h2>Product Name : {productDetails.name}</h2>
              <h2>Price : {productDetails.price} $</h2>
              </div>
            )
        }
    </div>
  )
}

export default ProductDetails