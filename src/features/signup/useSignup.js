import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../service/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// import { useMutation } from "@tanstack/react-query";
// import { signup as signupApi } from "../../services/apiAuth";
// import { toast } from "react-hot-toast";


export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
    
      toast.success('account  successfully created!');
      navigate("/homepageuser", { replace: true });
    },
    
    onError: (err) => {
      
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
