import React from 'react'
import HomeNavBar from '../components/HomeNavBar'
import HomeSideBar from '../components/HomeSideBar'
import { Outlet } from 'react-router-dom'   

export default function HomeLayout() {
  return (
    <div className="dark:bg-gray-900">
    
      <HomeNavBar />
      <HomeSideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
