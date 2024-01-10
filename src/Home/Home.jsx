import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Fast from "../Fast/Fast";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <h2>this is home</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
