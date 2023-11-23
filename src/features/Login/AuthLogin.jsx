// import { Link } from "react-router-dom";

import { useState } from "react";

import { useLogin } from "./useLogin";

import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";

export default function AuthLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      <div className="  flex-col justify-center ml-24 md:ml-[630px] mt-20 ">
        <img className="h-20  " src="/logo/mainLogo.png" />
        <p className="font-bold text-2xl gap-6 line-clamp-4 w-34">
          Log in to your account
        </p>
      </div>
      <form
        className="flex flex-col justify-center  mt-5  ml-20 md:ml-[540px]"
        onSubmit={handleSubmit}
      >
        <label label="Email address" className="w-24" orientation="vertical">
          Email
          <input
            className=" border md:border-white-800 h-14  w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            disabled={isLoading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="w-24">Password</label>
        <input
          className=" border border-white-800 h-14 w-[250px] md:w-[450px] rounded-xl mt-4 focus:outline-none  focus:border-blue-400 hover:border-blue-400 border-1 mb-4  "
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLoading}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" bg-blue-500 w-44 mt-8 rounded ml-8 md:ml-28 text-white py-3 px-2"
          disabled={isLoading}
        >
          Login
        </button>
      </form>
      <Link to="/signupuser">
        <p className="md:text-center ml-20  md:mr-56">
          don't have account
          <span className="text-blue-500">create account</span>
        </p>
      </Link>
    </>
  );
}

// export default AuthLogin;
