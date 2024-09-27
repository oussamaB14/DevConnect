import React from "react";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 dark:text-white md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">Start Crafting Your</span>
          <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">
            Next Great Idea
          </span>
        </h1>
        <div className="mx-auto mt-5 text-gray-500 dark:text-gray-300 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
          A platform for developers to showcase their projects, collaborate, and
          grow together!
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <a
              href="#_"
              type="button"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Join the Community
            </a>
            <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-3 text-xs font-medium leading-tight text-white bg-green-400 dark:bg-green-500 rounded-full">
              free
            </span>
          </span>
          <a href="#_" className="mt-3 text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
