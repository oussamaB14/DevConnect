import React from 'react';
import { ChevronRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Intro to React Hooks",
    category: "React",
    url: "#"
  },
  {
    id: 2,
    title: "RESTful APIs with Node.js",
    category: "Backend",
    url: "#"
  },
  {
    id: 3,
    title: "TypeScript Basics",
    category: "JavaScript",
    url: "#"
  }
];

export default function ArticlesList() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-md w-full border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          📚 Latest Articles
        </h2>
      </div>
      <div className="p-4 space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                {article.title}
              </h4>
            </div>
            <div className="px-4 pb-4 flex justify-between items-center">
              <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                {article.category}
              </span>
              <a 
                href={article.url} 
                className="text-xs font-medium text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex flex-row items-center justify-end border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
          View All
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}