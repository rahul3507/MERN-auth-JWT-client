/** @format */

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { backendUrl, setIsLoggedin } = useContext(AppContext);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/auth/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/auth/login", {
          email,
          password,
        });
        if (data.success) {
          setIsLoggedin(true);
          navigate("/");
          toast.success(data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen px-6 
    sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400 "
    >
      <img
        onClick={() => navigate("/")}
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

        <form onSubmit={onSubmitHandler}>
          {state === "Sign Up" && (
            <div
              className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full
           bg-blue-900"
            >
              <img src={assets.person_icon} alt="" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="bg-transparent outline-none h-full text-white"
                type="text"
                placeholder="Full Name"
                required
              ></input>
            </div>
          )}

          <div
            className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full
           bg-blue-900"
          >
            <img src={assets.mail_icon} alt="" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline-none h-full text-white"
              type="email"
              placeholder="Email id"
              required
            ></input>
          </div>

          <div
            className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full
           bg-blue-900"
          >
            <img src={assets.lock_icon} alt="" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline-none h-full text-white"
              type="password"
              placeholder="Password"
              required
            ></input>
          </div>

          <p
            onClick={() => navigate("/reset-password")}
            className="mb-4 text-indigo-500 cursor-pointer hover:text-indigo-300"
          >
            Forgot password?
          </p>

          <button
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900
          text-white font-medium cursor-pointer"
          >
            {state}
          </button>
        </form>

        {state === "Sign Up" ? (
          <p className="text-center text-gray-400 text-xs mt-4 ">
            Already have an account? {` `}
            <span
              onClick={() => setState("Login")}
              className="text-blue-400 hover:text-blue-300 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-400 text-xs mt-4 ">
            Don't have an account? {` `}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-400 hover:text-blue-300 cursor-pointer underline"
            >
              Sing Up here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
