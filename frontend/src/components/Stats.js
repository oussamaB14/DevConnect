import React from "react";

export default function Stats() {
  const stats = [
    {
      data: "35K",
      title: "Clients",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Projects",
    },
  ];
  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
            Our customers are always happy
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis sollicitudin quam ut tincidunt.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
            {stats.map((item, idx) => (
              <li
                key={idx}
                className="w-full text-center bg-gray-100 dark:bg-gray-800 px-12 py-4 rounded-lg sm:w-auto"
              >
                <h4 className="text-4xl text-gray-800 dark:text-white font-semibold">
                  {item.data}
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-400 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
