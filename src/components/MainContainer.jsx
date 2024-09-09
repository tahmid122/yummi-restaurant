import React from "react";
import MarqueText from "./MarqueText";
import MainNavBar from "./MainNavBar";
import Banner from "./Banner";
import ChefMenu from "./ChefMenu";
import Shop from "./Shop";
import Blog from "./Blog";
import Home from "./Home";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <MarqueText />
      <MainNavBar />
      <Banner />
      <ChefMenu />
      <Shop />
      <Blog />
      <Home />
      <Footer />
    </section>
  );
};

export default MainContainer;
