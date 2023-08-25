import React from 'react'
import { useParams } from "react-router-dom";

function ProductDetails() {
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
                <h2>{productDetails.name}</h2>
            )
        }
    </div>
  )
}

export default ProductDetails