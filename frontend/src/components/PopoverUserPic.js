import React from "react";
import { Link } from "react-router-dom";
export default function PopoverUserPic() {
  return (
    <div>
      <button
        data-popover-target="popover-user-profile"
        type="button"
        className="w-10 h-10 rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onMouseEnter={() => {
          const popover = document.getElementById("popover-user-profile");
          popover.classList.remove("invisible", "opacity-0");
          popover.classList.add("visible", "opacity-100");
        }}
        onMouseLeave={() => {
          const popover = document.getElementById("popover-user-profile");
          popover.classList.add("invisible", "opacity-0");
          popover.classList.remove("visible", "opacity-100");
        }}
      >
        <img
          src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid"
          alt="User profile"
          className="w-full h-full rounded-full object-cover"
        />
      </button>

      <div
        data-popover
        id="popover-user-profile"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <Link to="#">
              <img
                className="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </Link>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <Link to="#">Jese Leos</Link>
          </p>
          <p className="mb-3 text-sm font-normal">
            <Link to="#" className="hover:underline">
              @jeseleos
            </Link>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{" "}
            <Link
              to="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              flowbite.com
            </Link>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <Link to="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  799
                </span>
                <span>Following</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  3,758
                </span>
                <span>Followers</span>
              </Link>
            </li>
          </ul>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
}
