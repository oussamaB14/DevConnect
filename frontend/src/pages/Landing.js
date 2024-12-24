import React from "react";
import Hero from "../components/Hero";
import Features from "./Features";
import Stats from "../components/Stats";
import Sponsors from "../components/Sponsors";
import SmallFeatures from "./SmallFeatures";
import About from "./About";
import Accordion from "../components/Accordion";
const Landing = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors ">
        <Hero />
        <Stats />
        <About />
        <Features />
        <Sponsors />
        <SmallFeatures />
        <Accordion />
      </div>
    </>
  );
};

export default Landing;
