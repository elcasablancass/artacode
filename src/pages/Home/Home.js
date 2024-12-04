import React from "react";
import "./Home.scss";
import "../../App.scss";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Steps from "../../components/Steps/Steps";

const Home = () => {
  return (
    <main className="homepage">
        <Hero />
        <Intro />
        <Steps />
    </main>
  );
};

export default Home;
