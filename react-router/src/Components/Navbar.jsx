import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Nav = styled.div`

    display:flex;
    border:1px solid skyblue;
    padding:1vh;
    justify-content:space-evenly;
    background-color:black;
`
const StyleLink = styled(Link)`

text-decoration: none;
        padding:1vh;
        color:white;
        font-weight:700;
        border-radius:5px;

    &:hover{
        background-color:white;
        color:black

    }
`


function Navbar() {
  return (
    <Nav >
        <StyleLink to="">Home</StyleLink>
        <StyleLink to="/products">Products</StyleLink>
    </Nav>
  )
}

export default Navbar