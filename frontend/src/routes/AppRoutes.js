import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Features from "../pages/Features";
import Blog from "../pages/Blog";
import SmallFeatures from "../pages/SmallFeatures";
import Home from "../pages/Home";
import Layout from "./Layout";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/small-features" element={<SmallFeatures />} />
      </Route>
      {/* Add more routes as needed */}
    </Routes>
  );
}
