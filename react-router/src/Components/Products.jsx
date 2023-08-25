import React from 'react'
import { ProductContext } from '../Contexts/ProductContext'
import {Link} from "react-router-dom"
import styled from "styled-components"

const Table = styled.table`
border:1px solid black;
padding:1vh;
margin:5vh auto;
border-collapse: collapse;


& th, td{
    border:1px solid gray;
    padding:1vh;
    
}

&  th:nth-child(2){
    text-align:start;
}
&  td:nth-child(2){
    text-align:start;
}

`

function Products() {
    const {products} = React.useContext(ProductContext);
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th> 
                    <th>Price</th>
                    <th>More Details</th>
                </tr>
            </thead>

            <tbody>
            {products.map((product) => (
                 <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td><Link to={`/products/${product.id}`}>Product-Details</Link></td>
                </tr>
            ))}
               
            </tbody>
        </Table>
    </div>
  )
}

export default Products