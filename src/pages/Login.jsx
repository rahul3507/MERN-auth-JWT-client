/** @format */

import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  return (
    <div
      className="flex items-center justify-center min-h-screen px-6 
    sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400 "
    >
      <img
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer "
        src={assets.logo}
        alt=""
      />
      <div
        className=" bg-slate-900 p-10 rounded-lg shadow-lg w-full
      sm:w-96 text-indigo-300 text-sm"
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-3">
          {state === "Sign Up" ? "Create account" : "Login"}
        </h2>
        <p className="text-sm text-center mb-3">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account"}
        </p>

        <form>
          <div
            className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full
           bg-blue-900"
          >
            <img src={assets.person_icon} alt="" />
            <input
              className="bg-transparent outline-none h-full text-white"
              type="text"
              placeholder="Full Name"
              required
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
