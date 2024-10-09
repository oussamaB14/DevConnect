import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggel";
import AccountDropdown from "./AccountDropDown";
import logo from "../assets/images/logo.png";
import NotificationButton from "./NotificationIconButton";
import TopBannerComponent from "./Toasts/TopBannerComponent";
import authService from "../Services/auth/authService";

export default function HomeNavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const isAuthenticated = authService.isAuthenticated();
    const hasSeenBanner = localStorage.getItem('hasSeenWelcomeBanner');

    if (isAuthenticated && !hasSeenBanner) {
      setShowBanner(true);
      localStorage.setItem('hasSeenWelcomeBanner', 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        {showBanner && <TopBannerComponent onClose={handleCloseBanner} />}
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  const sidebar = document.getElementById("logo-sidebar");
                  sidebar.classList.toggle("-translate-x-full");
                }}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/home" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8" alt=" Logo" />
                <span className="p-1 font-black self-center text-xl  whitespace-nowrap dark:text-white">
                  <span className="text-blue-800 dark:text-blue-400">Dev</span>
                  <span className="text-blue-500 dark:text-blue-300">
                    Connect.
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <NotificationButton />
              <AccountDropdown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
