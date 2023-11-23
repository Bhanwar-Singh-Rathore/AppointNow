import { useForm } from "react-hook-form";
// import Button from "../../ui/Button";
// import Form from "../../ui/Form";
// import FormRow from "../../ui/FormRow";
// import Input from "../../ui/Input";

import { Link, useNavigate } from "react-router-dom";
import { useSignupService } from "./useSignupService";
import Spinner from "../../ui/Spinner";
import toast from "react-hot-toast";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignupService();
  const { register, handleSubmit, reset } = useForm();
  // const { errors } = formState;
  const navigate = useNavigate();
  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
      {
        onSuccess: () => {
          toast.success("account  successfully created!");
          navigate("/detailsform", { replace: true });
        },

        onError: (err) => {
          toast.error(err.message);
        },
      }
    );
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="  flex-col justify-center ml-24 md:ml-[630px] mt-20">
        <img className="h-20  " src="/logo/mainLogo.png" />
        <p className="font-bold text-2xl gap-6 line-clamp-4  ">
          Create a New Account
        </p>
      </div>
      <form
        className="
     flex flex-col justify-center  mt-5  ml-20 md:ml-[540px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <FormRow label="Full name" error={errors?.fullName?.message}> */}

        <label>Full name</label>
        <input
          className=" border border-white-800 h-14 w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
        {/* </FormRow> */}

        <label>Email</label>
        <input
          type="email"
          className=" border border-white-800 h-14 w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
        {/* </FormRow> */}

        {/* <FormRow
         label="Password (min 8 characters)"
         error={errors?.password?.message}
       > */}
        <label>Password</label>
        <input
          className=" border border-white-800 h-14 w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
        {/* </FormRow> */}

        {/* <label>Confirm Password</label>
       <input
         className="   border border-white-800 h-10 w-96 mt-4  mb-4 rounded "
         type="password"
         id="passwordConfirm"
         disabled={isLoading}
         {...register("passwordConfirm", {
           required: "This field is required",
           validate: (value) =>
             value === getValues().password || "Passwords need to match",
         })} */}
        {/* />  */}
        {/* </FormRow> */}

        {/* <FormRow> */}
        {/* type is an HTML attribute! */}
        {/* <button
         // variation="secondary"
         className=" bg-blue-500   w-44 rounded ml-64 text-white py-2 px-7"
         type="reset"
         disabled={isLoading}
         onClick={reset}
       >
         Cancel
       </button> */}
        <button
          className=" bg-blue-500 w-44  mt:6 md:mt-8 rounded ml-10 md:ml-28 text-white py-3 px-2"
          disabled={isLoading}
        >
          Signup
        </button>
        {/* </FormRow> */}
        <p>
          already account <Link to="/loginservice">Login</Link>
        </p>
      </form>
    </>
  );
}
export default SignupForm;
