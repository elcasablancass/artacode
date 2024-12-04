import React from "react";
import "./Home.scss";
import "../../App.scss";
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";

const Home = () => {
  return (
    <main className="homepage">
        <Hero />
        <Intro />
    </main>
  );
};

export default Home;
