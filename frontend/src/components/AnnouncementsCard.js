import React from "react";
import { Bell, ChevronRight, Megaphone, Zap } from "lucide-react";

const announcements = [
  {
    id: "1",
    title: "New Feature Release",
    content:
      "We've just launched our new AI-powered code review tool. Try it now!",
    date: "2023-10-15",
    type: "update",
  },
  {
    id: "2",
    title: "Upcoming Maintenance",
    content:
      "Scheduled downtime on Oct 20, 2023, from 2 AM to 4 AM UTC for system upgrades.",
    date: "2023-10-18",
    type: "alert",
  },
  {
    id: "3",
    title: "Dev Conference 2023",
    content:
      "Join us for our annual developer conference on Nov 15-17, 2023. Early bird tickets available!",
    date: "2023-10-01",
    type: "news",
  },
];

export default function AnnouncementsCard() {
  const getAnnouncementIcon = (type) => {
    switch (type) {
      case "update":
        return <Zap className="h-5 w-5" />;
      case "news":
        return <Megaphone className="h-5 w-5" />;
      case "alert":
        return <Bell className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getAnnouncementColor = (type) => {
    switch (type) {
      case "update":
        return "bg-blue-100 text-blue-800";
      case "news":
        return "bg-green-100 text-green-800";
      case "alert":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "";
    }
  };

  return (
    <div className="w-full max-w-2xl border rounded-lg shadow-sm bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className="p-4 flex flex-row items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">📢 Announcements</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center justify-center rounded-full p-2 mr-2 ${getAnnouncementColor(
                      announcement.type
                    )}`}
                  >
                    {getAnnouncementIcon(announcement.type)}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {announcement.title}
                  </h3>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {announcement.date}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {announcement.content}
              </p>
            </li>
          ))}
        </ul>
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
