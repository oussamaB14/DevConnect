/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // Add custom colors if needed
      colors: {
        // Example:
        // primary: '#3490dc',
        // secondary: '#ffed4a',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
