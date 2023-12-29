import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((store) => store.user);
  const userJson = JSON.parse(user);
  return (
    <header className="flex justify-between items-center">
      <Link to="/" className="logo text-red-500 font-bold text-2xl">
        MyBlog
      </Link>
      {!user ? (
        <nav className="flex text-[1rem] gap-3">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      ) : (
        <Link to={`/${userJson.username}`} className="">
          <img className="rounded-full w-9 h-9" src={userJson.avatar} alt="" />
        </Link>
      )}
    </header>
  );
};

export default Header;
