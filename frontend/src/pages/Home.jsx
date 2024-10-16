import React, { useState } from "react";
import PostHeader from "../components/posts/PostHeader";
import SpeedDial from "../components/SpeedDial";
import Post from "../components/posts/Post";
import FollowListCard from "../components/UsersToFollowCard";
import ProjectsListCard from "../components/ProjectsListCard";
import AnnouncementsCard from "../components/AnnouncementsCard";
import ArticlesList from "../components/ArticlesList";
import CreatePostModal from "../components/posts/CreatePostModal";
import { PostProvider } from "../Services/posts/postContext";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <SpeedDial />

      {/* <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <PopoverUserPic />
      </div> */}
      <PostHeader onCreatePost={openModal} />
      <CreatePostModal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex justify-between">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-4 md:w-3/4 md:pr-3 sm:landscape:w-3/4 sm:landscape:pr-3">
          {/* List of posts */}
          <PostProvider>
            <Post />
          </PostProvider>
          {/* Add more Post components here as needed */}
        </div>
        <div className="hidden lg:block w-1/3 pt-4 space-y-4">
          {/* FollowListCard and future components */}
          <FollowListCard />
          <ProjectsListCard />
          <AnnouncementsCard />
          <ArticlesList />
          {/* Add more components here in the future */}
        </div>
      </div>
    </div>
  );
}
