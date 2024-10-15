import React from "react";
import { useAuth } from "./../../context/AuthContext";
export default function PostHeader({ onCreatePost }) {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <img
        className="w-8 h-8 rounded-full"
        src={"https://avatars.githubusercontent.com/u/33694049?s=200&v=4"}
        alt="User avatar"
      />
    );
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src={user.avatarUrl || "https://via.placeholder.com/150"}
          alt="User profile"
        />
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          What's on your mind?
        </span>
      </div>

      <button
        onClick={onCreatePost}
        className="flex items-center px-2 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
        <span className="hidden sm:inline">Create Post</span>
        <span className="sm:hidden">Post</span>
      </button>
    </div>
  );
}
