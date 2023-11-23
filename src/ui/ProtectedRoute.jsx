import { useNavigate } from "react-router-dom";
import { useUser } from "../user/useUser";
import { useEffect } from "react";
// import { duration } from "@mui/material";

function ProtectedRoute({children}) {
//load the authienticed user
const {isAuthenticated,isLoading}=useUser()


const navigate=useNavigate()


useEffect(function(){
    if(!isAuthenticated && !isLoading) navigate("/login")
},[isAuthenticated,isLoading,navigate]);

   if(isAuthenticated) return  children;

    
    
}

export default ProtectedRoute

