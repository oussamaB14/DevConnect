import React from "react";
import { ProfileTabs } from "../components/ProfileTabs";
import { useAuth } from "../context/AuthContext";
import { PostProvider } from "../Services/posts/postContext";
//import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  // if (!user) return <Navigate to="/home" />;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <img
              className="h-24 w-24 rounded-full"
              src={user.avatarUrl || "https://via.placeholder.com/150"}
              alt="Profile"
            />
            <div>
              <h2 className="text-2xl font-bold dark:text-white">
                {user.firstName || "No Name"} {user.lastName || ""}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {user.email || "No Email"}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {user.location || "No Location"}
              </p>
            </div>
          </div>

          <Link to="/home/profile/edit">
            <button className="text-blue-500 hover:text-white font-semibold bg-white dark:bg-gray-900 border border-blue-500 hover:border-blue-700 rounded-full px-4 py-2 hover:bg-blue-700  dark:hover:bg-blue-600">
              Edit Profile
            </button>
          </Link>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {user.bio || "No bio available"}
        </p>
        <PostProvider>
          <ProfileTabs />
        </PostProvider>
      </div>
    </div>
  );
}
