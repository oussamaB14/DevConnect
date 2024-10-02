import React from "react";
import Hero from "../components/Hero";
import Features from "./Features";
import Stats from "../components/Stats";
import Sponsors from "../components/Sponsors";
import SmallFeatures from "./SmallFeatures";
import About from "./About";
import Toast from "../components/Toasts/Toast";
import { ToastType } from "../components/Toasts/Toast";
import Accordion from "../components/Accordion";
import PopoverUserPic from "../components/PopoverUserPic";
const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Toast type={ToastType.SUCCESS} />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Sponsors />
      <SmallFeatures />
      <Accordion />
      <PopoverUserPic />
      </div>
  );
};

export default Landing;
