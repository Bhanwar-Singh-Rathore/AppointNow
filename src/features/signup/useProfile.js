import { useNavigate } from "react-router-dom";
import { insertProfile } from "../../service/apiUserProfile";
import { useMutation } from "@tanstack/react-query";

const { data, error } = await supabase
  .from('profiles')
  .insert([
    { some_column: 'someValue' },
    { some_column: 'otherValue' },
  ])
  .select()

  
export function useSignup() {
    // const navigate = useNavigate();
    const { mutate: profile, isLoading } = useMutation({
      mutationFn:insertProfile ,
      onSuccess: () => {
        // console.log(
        //   "Account successfully created!"
        // );
        // toast.success('account  successfully created!');
        // navigate("/homepageuser", { replace: true });
      },
    });
  
    return { profile, isLoading };
  }