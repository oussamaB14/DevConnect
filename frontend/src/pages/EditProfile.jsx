import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function EditProfile() {
  const { user, loading } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        position: user.position || "",
        email: user.email || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="dark:bg-gray-800">
      <h1 className="text-2xl font-semibold dark:text-white">Edit Profile</h1>
      <form className="space-y-4">
        <div className="relative inline-block px-4 py-2">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src={user.avatarUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover dark:border-gray-600"
            />
          </div>
          <label
            htmlFor="avatar-upload"
            className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-1.5 cursor-pointer shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            <span className="sr-only">Edit profile picture</span>
          </label>
          <input id="avatar-upload" type="file" accept="image/*" className="hidden" />
        </div>

        <div className="space-y-2">
          <label className="block text-lg dark:text-white" htmlFor="firstName">
            First Name
          </label>
          <input
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg dark:text-white" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg dark:text-white" htmlFor="position">
            Position
          </label>
          <input
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg dark:text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-lg dark:text-white" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            id="bio"
            name="bio"
            rows="4"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full dark:bg-blue-600 dark:hover:bg-blue-700"
          type="submit"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
