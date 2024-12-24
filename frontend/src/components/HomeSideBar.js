import React from "react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaInbox } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineBookmark } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";

export default function HomeSideBar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/home"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <TiHome className="w-6 h-6 text-gray-500  dark:text-white" />
              <span className="ms-3">Home</span>
            </Link>
          </li>

          <li>
            <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <FaInbox className="w-6 h-6 text-gray-500  dark:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/home/projects"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <AiFillFolderOpen className="w-6 h-6 text-gray-500  dark:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/home/bookmarks"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <MdOutlineBookmark className="w-6 h-6 text-gray-500  dark:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Bookmarks</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/home/profile"}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaUser className="w-6 h-6 text-gray-500  dark:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <TbLogout2 className="w-6 h-6 " />
              <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
