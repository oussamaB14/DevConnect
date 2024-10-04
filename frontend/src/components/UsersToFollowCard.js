import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const users = [
  {
    id: "1",
    name: "Alice Johnson",
    jobTitle: "UX Designer",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Bob Smith",
    jobTitle: "Frontend Developer",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Carol Williams",
    jobTitle: "Product Manager",
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "David Brown",
    jobTitle: "Data Scientist",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const UsersToFollowCard = () => {
  const [followedUsers, setFollowedUsers] = useState(new Set());

  const handleFollow = (userId) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg max-w-md w-full border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        🌐 Who to follow
        </h2>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between px-6 py-4"
          >
            <div className="flex items-center space-x-3">
              <img
                src={user.avatarUrl}
                alt={`${user.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.jobTitle}
                </p>
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                followedUsers.has(user.id)
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  : "bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-400"
              }`}
              onClick={() => handleFollow(user.id)}
            >
              {followedUsers.has(user.id) ? (
                <>
                  <span className="mr-2">✓</span>
                  Following
                </>
              ) : (
                <>
                  <span className="mr-2">+</span>
                  Follow
                </>
              )}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 flex flex-row items-center justify-end border-t border-gray-200 dark:border-gray-700">
        <button className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
          View All
          <ChevronRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default UsersToFollowCard;
