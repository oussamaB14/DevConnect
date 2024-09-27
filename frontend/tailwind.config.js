/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  plugins: [],
};
