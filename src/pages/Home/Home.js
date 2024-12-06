import React from "react";
import "./Home.scss";
import "../../App.scss";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Steps from "../../components/Steps/Steps";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <main className="homepage">
        <Hero />
        <Intro />
        <Steps />
        <Product />
    </main>
  );
};

export default Home;
