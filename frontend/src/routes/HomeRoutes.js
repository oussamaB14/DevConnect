import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Bookmarks from "../pages/Bookmarks";
import Projects from "../pages/Projects";

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="edit" element={<EditProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}
