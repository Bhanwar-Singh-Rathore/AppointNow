import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as logOutApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// import { useToast } from "react-toastify";

export function useLogout(){
  
    const navigate=useNavigate();
    const queruyClient=useQueryClient()

    const {mutate:logout,isLoading}=useMutation({
         mutationFn:logOutApi,
         onSuccess:()=>{
            toast.success('account successfully Logged Out');
            queruyClient.removeQueries();
            navigate("/",{replace:true});

         },
    });
    return {logout,isLoading}
}