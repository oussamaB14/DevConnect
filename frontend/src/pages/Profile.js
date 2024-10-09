import React from "react";
import { ProfileTabs } from "../components/ProfileTabs";
import { useAuth } from "../context/AuthContext";
//import { Navigate } from "react-router-dom";

export default function Profile() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  // if (!user) return <Navigate to="/home" />;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-24 w-24 rounded-full"
            src={user.picture || "https://via.placeholder.com/150"}
            alt="Profile"
          />
          <div>
            <h2 className="text-2xl font-bold dark:text-white">{user.name || 'No Name'}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {user.email || 'No Email'}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{user.location || 'No Location'}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {user.bio || 'No bio available'}
        </p>
        <ProfileTabs />
      </div>
    </div>
  );
}
