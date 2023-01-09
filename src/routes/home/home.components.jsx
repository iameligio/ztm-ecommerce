import React from "react";
import { Outlet } from "react-router-dom";
import HomeCategories from "../../components/home-categories/home-categories.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <HomeCategories />;
    </div>
  );
};

export default Home;
