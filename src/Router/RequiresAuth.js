import { useAuth } from "../context/auth-context"
import { useLocation, Navigate } from "react-router-dom";

export const RequiresAuth = ({children}) => {
    const {authState}=useAuth();
    const location=useLocation();
    
  return (
    authState.token ? (children) : <Navigate to="/login" replace state={{from: location }}  />
    
  )
}