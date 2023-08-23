import React from "react";

export const AuthContext = React.createContext();


export function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  
    const handleSubmit = () => {
    
      const payload = {email, password}
      fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type" : "application/json"
        }
      })
      .then((res) => res.json())
      .then((res) => {
        if(res.token){
            console.log(res.token)
            setIsAuth(true)
        }
      })
    }
    

    return(
        <AuthContext.Provider value={{ handleSubmit, isAuth, setEmail, setPassword}} >
            {children}
        </AuthContext.Provider>
    )
}