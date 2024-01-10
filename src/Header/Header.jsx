import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div>
      <nav>
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/order">Order</ActiveLink>
        <ActiveLink to="/friends">Friends</ActiveLink>
        <ActiveLink to="/post">Post</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
      </nav>
    </div>
  );
};

export default Header;
