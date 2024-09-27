import React from "react";
import Hero from "../components/Hero";
import Features from "./Features";
import Stats from "../components/Stats";
import Sponsors from "../components/Sponsors";
import SmallFeatures from "./SmallFeatures";
const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <Stats />
      <Features />
      <Sponsors />
      <SmallFeatures />
    </div>
  );
};

export default Home;
