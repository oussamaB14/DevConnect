import React from "react";

export default function sectionHeader() {
  const navigation = [
    {
      href: "",
      name: "Overview",
    },
    {
      href: "",
      name: "Integration",
    },
    {
      href: "",
      name: "Billing",
    },
    {
      href: "",
      name: "Transactions",
    },
    {
      href: "",
      name: "plans",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div>
          <h3 className="text-gray-800 text-2xl font-bold">Blogs</h3>
        </div>
        <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
          <button
            className="flex items-center justify-center gap-x-2 px-4 py-2 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 md:text-sm"
            onClick={() => {
              /* Add filter functionality */
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                clipRule="evenodd"
              />
            </svg>
            Filter
          </button>
          <button
            className="block px-4 py-2 mt-3 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 sm:mt-0 md:text-sm"
            onClick={() => {
              /* Add create payment functionality */
            }}
          >
            Create payment
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-4">
        <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
          {navigation.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 ${
                idx === 0
                  ? "border-indigo-600 text-indigo-600"
                  : "border-white text-gray-500"
              }`}
            >
              <button
                onClick={() => {
                  /* Add navigation functionality */
                }}
                className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
