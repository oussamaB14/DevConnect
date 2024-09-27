import React, { useEffect } from 'react'

export default function ThemeToggle({ darkMode, toggleDarkMode }) {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="top-4 right-4 bg-white-100 dark:bg-gray-700 p-2 rounded-full w-10 h-10 flex items-center justify-center border-2 border-gray-100 dark:border-gray-600"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  )
}
