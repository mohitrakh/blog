import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" mt-32 max-w-[30rem] mx-auto flex flex-col gap-12">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            User Name:
          </label>
          <input type="text" className="bg-gray-300 py-3 px-6 rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            E-mail:
          </label>
          <input type="email" className="bg-gray-300 py-3 px-6 rounded-lg" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            Password:
          </label>
          <input type="password" className="bg-gray-300 py-3 px-6 rounded-lg" />
        </div>

        <button className="bg-red-500 py-3 rounded-lg text-white text-xl">
          Login
        </button>
        <p>
          Already have an account ?{" "}
          <Link className="underline text-blue-700" to={"/login"}>
            Login
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

export default Register;
