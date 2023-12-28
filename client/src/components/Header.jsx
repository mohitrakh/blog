import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/package-lock.json" className="logo text-red-500">
        MyBlog
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register regsiter</Link>
      </nav>
    </header>
  );
};

export default Header;
