import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AccountDropdown from "./AccountDropDown";
import ThemeToggle from "./ThemeToggel";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-indigo-600"
      : "text-gray-700 hover:text-indigo-600";
  };

  return (
    <nav className="relative z-50 h-24 select-none bg-white dark:bg-gray-900">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 dark:border-gray-700 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <Link to="/" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none">
              <span className="text-blue-800 dark:text-blue-400">Dev</span>
              <span className="text-blue-500 dark:text-blue-300">Connect.</span>
            </span>
          </Link>
        </div>
        <div
          className={`top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex ${
            showMenu ? "flex fixed" : "hidden md:flex"
          }`}
        >
          <div className="flex-col w-full h-auto overflow-hidden bg-white dark:bg-gray-900 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <Link
              to="/"
              className="items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 dark:text-white md:hidden"
            >
              DevConnect<span className="text-indigo-600 dark:text-indigo-400">.</span>
            </Link>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <Link
                to="/"
                className={`inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isActive(
                  "/"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                Home
              </Link>
              <Link
                to="/features"
                className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isActive(
                  "/features"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                Features
              </Link>
              <Link
                to="/about"
                className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isActive(
                  "/about"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isActive(
                  "/blog"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center ${isActive(
                  "/contact"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                Contact
              </Link>
              <a
                href="#_"
                className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 dark:text-gray-400 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative"
              >
                <svg
                  className="inline w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <ThemeToggle
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />

              <Link
                to="/signin"
                className={`w-full px-3 py-2 mr-0 md:mr-2 lg:mr-3 md:w-auto ${isActive(
                  "/signin"
                )} dark:text-gray-300 dark:hover:text-indigo-400`}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white bg-indigo-600 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                Sign Up
              </Link>
            </div>
            <AccountDropdown />
          </div>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full cursor-pointer md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {!showMenu ? (
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
