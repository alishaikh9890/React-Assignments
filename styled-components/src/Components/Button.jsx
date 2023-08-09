
import styled from "styled-components"

// rgb(46,141,70);
// -webkit-transition: font-size 0.5s 0s;
const Button = styled.button`
background-color: ${({theme})  => (theme === "bl" ? "skyblue" : "rgb(46,141,70)")};
color: ${({theme}) => (theme === "bl" ? "black" : "white")};
font-weight:700;
width:20vh;
height:5vh;
border-radius:1vh;
margin:2vh;
font-size:2vh;

&:hover{
    border:none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    font-size:2.2vh;
    background-color: ${({theme})  => (theme === "bl" ? "rgb(46,141,70)" : "skyblue" )};
    color: ${({theme}) => (theme === "bl" ? "white" : "black")};
    transition: font-size 1s 0s, font-weight 1s 0s, color 1s 0s ; 
    font-weight:600;
}
`


export  {Button}