import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/fetchApi";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  signInFailed,
  signInStart,
  signInSuccess,
} from "../features/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(signInFailed(error.response.data.message));
    }
  };
  return (
    <div className=" mt-32 max-w-[30rem] mx-auto flex flex-col gap-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            E-mail:
          </label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            className="bg-gray-300 py-3 px-6 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            Password:
          </label>
          <input
            onChange={handleChange}
            id="password"
            type="password"
            className="bg-gray-300 py-3 px-6 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 py-3 rounded-lg text-white text-xl"
        >
          Login
        </button>
        <p>
          Don't have an account ?{" "}
          <Link className="underline text-blue-700" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
      <div className="w-full bg-black h-[0.1rem]"></div>

      <button className="bg-red-600 py-3 rounded-lg text-white text-xl">
        Google
      </button>
    </div>
  );
};

export default Login;
