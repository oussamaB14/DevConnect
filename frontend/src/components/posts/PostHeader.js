import React from 'react'

export default function PostHeader({ onCreatePost }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://img.freepik.com/photos-gratuite/portrait-homme-riant_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid"
          alt="User profile"
        />
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          What's on your mind?
        </span>
      </div>
      <button
        onClick={onCreatePost}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        type="button"
      >
        Create Post
      </button>
    </div>
  )
}
