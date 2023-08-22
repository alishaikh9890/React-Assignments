import React from "react";

export const AuthContext = React.createContext();


export function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = React.useState()

    const handleAuth = () => {
      setIsAuth(!isAuth)
    }
    

    return(
        <AuthContext.Provider value={{handleAuth, isAuth}} >
            {children}
        </AuthContext.Provider>
    )
}