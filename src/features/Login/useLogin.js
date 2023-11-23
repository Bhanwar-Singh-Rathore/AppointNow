import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import { useToast } from "react-toastify";
import toast from "react-hot-toast";
// import { useId } from "react";




//  export function userID({userID}){
//    <p>{userID}</p>
//     }

export function useLogin() {


  const navigate = useNavigate();

  const { mutate: login, isLoading, } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
     
     toast.success('account  successfully Login');

      navigate("/homepageuser", { replace: true });
    },

    onError: (err) => {
      
      toast.error(err.message);
    },
  });
  return { login, isLoading, };
}
