import React, { useState } from "react";

export default function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", commentText);
    setCommentText("");
    setShowCommentInput(false);
  };

  return (
    <div className="w-full max-w-3xl border rounded-lg shadow-sm mt-4 mr-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 flex flex-row items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300 font-semibold">JD</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold dark:text-white">John Doe</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Software Engineer at Tech Co.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full ${isBookmarked ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="sr-only">Bookmark</span>
          </button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
              <span className="sr-only">More options</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10">
                <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left">Edit</button>
                <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left">Delete</button>
                <button className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 w-full text-left">Report</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="dark:text-gray-300">
          Just finished an exciting project using React and Next.js! It's
          amazing how these technologies can streamline the development process.
          #webdevelopment #reactjs #nextjs
        </p>
      </div>
      <div className="px-4 py-2 flex justify-between border-t dark:border-gray-700">
        <button
          className={`px-4 py-2 rounded-md flex items-center gap-2 ${isLiked ? "text-blue-500" : "text-gray-500 dark:text-gray-400"}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          Like
        </button>
        <button
          className="px-4 py-2 rounded-md flex items-center gap-2 text-gray-500 dark:text-gray-400"
          onClick={() => setShowCommentInput(!showCommentInput)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Comment
        </button>
        <button className="px-4 py-2 rounded-md flex items-center gap-2 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </button>
      </div>
      {showCommentInput && (
        <div className="px-4 py-2 border-t dark:border-gray-700">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
}
