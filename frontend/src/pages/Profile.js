import React from "react";
import { ProfileTabs } from "../components/ProfileTabs";

export default function Profile() {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 rounded-full"
            src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid"
            alt="Profile"
          />
          <div>
            <h2 className="text-2xl font-bold dark:text-white">John Doe</h2>
            <p className="text-gray-700 dark:text-gray-300">
              johndoe@example.com
            </p>
            <p className="text-gray-600 dark:text-gray-400">New York, USA</p>
          </div>
        </div>
        npm install flowbite-react
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ProfileTabs />
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex mb-4">
            <button className="flex-1 py-2 px-4 text-center bg-blue-500 text-white rounded-l-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Posts
            </button>
            <button className="flex-1 py-2 px-4 text-center bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
              Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Sample post/project cards */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Post/Project 1
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Short description of the post or project.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Post/Project 2
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Short description of the post or project.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 dark:text-white">
                Post/Project 3
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Short description of the post or project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
