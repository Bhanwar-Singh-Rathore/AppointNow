// import { Link } from "react-router-dom";

// import { useState } from "react";



// import Spinner from "../../ui/Spinner";
// import { useLoginService } from "./useLoginservice";
import { insertProfile } from "../../service/apiUserProfile";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useUser } from "../../user/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

export default function ProfileDetails() {



function onSubmits(data) { 
  // console.log("data is:",data);
   mutate(data);
}
const navigate=useNavigate();
const { mutate, } = useMutation({
  mutationFn: insertProfile,
  mutationKey: ["profile"],
  onSuccess: () => {
   
    toast.success("profile created successfully");
    navigate("/homepageuser");
  },
  onError: (err) => console.log(err.message),
});
const { register, handleSubmit } = useForm();
const {user,isLoading}=useUser()

  if(isLoading)return <Spinner/>;
  return (
    <>
      <div className="flex-col justify-center ml-[630px] mt-20">
        <img className="h-20" src="./public/logo/mainLogo.png" alt="Logo" />
        <p className="font-bold text-2xl gap-6 line-clamp-4">Log in to your account</p>
      </div>
      <form className="flex-col" onSubmit={handleSubmit(onSubmits)}>
      <div>
          <input
            type="hidden"
            className="border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none focus:border-blue-400 hover:border-blue-400 border-1 mb-4"
          
            {...register("id")}
            value={ user.id}
          />
        </div>
        
        <div>
          <input
            type="text"
            className="border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none focus:border-blue-400 hover:border-blue-400 border-1 mb-4"
            placeholder="Enter name"
            {...register("username")}
          />
        </div>
        <div>
          <input
            type="text"
            className="border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none focus:border-blue-400 hover:border-blue-400 border-1 mb-4"
            placeholder="Date time"
            {...register("full_name")}
          />
        </div>
        <div>
          <input
            type="text"
            className="border border-white-800 h-14 w-[450px] rounded-xl mt-4 focus:outline-none focus:border-blue-400 hover:border-blue-400 border-1 mb-4"
            placeholder="Mobile"
            {...register("mobile_no")}
          />
        </div>
        <button type="submit" className="bg-blue-500 w-44 mt-8 rounded ml-28 text-white py-3 px-2">
          Submit
        </button>
      </form>
    </>
  );
}