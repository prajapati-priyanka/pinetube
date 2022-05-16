import { createContext,useContext } from "react";
import {  } from "react/cjs/react.production.min";


const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    return <AuthContext.Provider>
         {children}
    </AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider}