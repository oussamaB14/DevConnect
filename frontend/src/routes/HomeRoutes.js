import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

export default function HomeRoutes() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
      </Route>
    </Routes>
  )
}
