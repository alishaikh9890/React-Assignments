import React from 'react'

import styled from "styled-components"
import { AuthContext } from '../Contexts/AuthContext'


import { useDisclosure } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from '@chakra-ui/react'



const NavWrapper = styled.div`
    border: 1px solid red;
    padding:2vh;
    display:flex;
    flex-direction: row-reverse;

    & button{
        padding:0.5vh 2vh;
        background-color:whitesmoke;
        border-radius:5px;
        font-weight: 700;
    }
`


function Navbar() {

  const { isAuth, handleSubmit, setEmail, setPassword} = React.useContext(AuthContext)

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  React.useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth, onClose]);
  


  return (
    <NavWrapper className='navbar'>


      <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        {isAuth ? "Log Out" : "Log In"}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent 
        style={{
              backgroundColor: "black",
              color:"white",
              borderRadius:"10px",
              width: "500px",
              margin: " 20vh auto",
              padding:" 3vh 2vh",

           }}
           >
          <ModalHeader textAlign="center" marginTop="5vh" fontWeight="700" fontSize="20px" >LOGIN PAGE</ModalHeader>
          <ModalCloseButton  margin="auto"
                             position="absolute" 
                             right="18px" 
                             color="white"
                             fontWeight="700"
                             backgroundColor="black"
                            //  border="1px solid white" 
                            />
          <ModalBody>
            <div style={{ width:"350px", margin:" 5vh auto"}}>
              <label style={{ display:"flex",flexDirection:"column", gap:"10px", marginBottom:"20px"}}>
                E-mail
                <input style={{borderRadius:"10px",  padding:"2vh"}} type="text" placeholder='E-mail'
                onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <br/>
              <label style={{ display:"flex",flexDirection:"column", gap:"10px"}}>
                Password
                <input style={{borderRadius:"10px", padding:"2vh"}} type="Password" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}/>
              </label>
              <br/>
              <button style={{color:"white", fontSize:"20px", fontWeight:"700", margin:"30px 5vh", padding:"1.5vh 10vh", backgroundColor:"blueviolet", borderRadius:"10px"}}
                onClick={handleSubmit} 
              >Login</button>
            </div>
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>


    </NavWrapper>


  )
}

export default Navbar