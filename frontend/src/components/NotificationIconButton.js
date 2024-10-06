import React, { useState, useEffect, useRef } from "react";
import { Bell, Heart, MessageSquare, Megaphone } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "like",
    content: "liked your post 'React Best Practices'",
    time: "5 minutes ago",
    user: {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 2,
    type: "comment",
    content: "commented on your post 'TypeScript Tips and Tricks'",
    time: "1 hour ago",
    user: {
      name: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  {
    id: 3,
    type: "announcement",
    content: "New feature release: Dark mode is now available!",
    time: "2 hours ago",
  },
];

export default function NotificationButton() {
  const [unreadCount, setUnreadCount] = useState(notifications.length);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = () => {
    setUnreadCount(0);
  };

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-red-500" />;
      case "comment":
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case "announcement":
        return <Megaphone className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
      >
        <Bell className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border-2 border-gray-200 dark:border-gray-700">
          <div className="py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
          🔔 Notifications
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={handleNotificationClick}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  {notification.type !== "announcement" &&
                    notification.user && (
                      <img
                        src={notification.user.avatar}
                        alt={notification.user.name}
                        className="h-8 w-8 rounded-full"
                      />
                    )}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center">
                      {getIcon(notification.type)}
                      <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                        {notification.user ? notification.user.name : "System"}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {notification.content}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
