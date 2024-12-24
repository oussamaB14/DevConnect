import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import ProfilePosts from "./posts/ProfilePosts";

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Posts");
  const { user, loading } = useAuth();
  // const posts = user.posts;
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/home" />;

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select
          id="Tab"
          className="w-full rounded-md border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
        >
          <option value="Posts">posts</option>
          <option value="Projects">Projects</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {["Posts", "Projects"].map((tab) => (
              <Link
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
                aria-current={activeTab === tab ? "page" : undefined}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === "Posts" && (
          <p className="text-gray-700 dark:text-gray-300">
            <ul className="space-y-3">
              <ProfilePosts />
            </ul>
          </p>
        )}
        {activeTab === "Projects" && (
          <p className="text-gray-700 dark:text-gray-300">
            Projects here
          </p>
        )}
      </div>
    </div>
  );
}
