import React from "react";
import { ChevronRight } from "lucide-react";
const projects = [
  {
    id: "1",
    name: "E-commerce Platform",
    description: "A fully functional online store with cart and checkout.",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "🛍️",
    owner: {
      id: "user1",
      name: "Alice Johnson",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: "2",
    name: "Task Management App",
    description: "Kanban-style task organizer with real-time updates.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    icon: "📋",
    owner: {
      id: "user2",
      name: "Bob Smith",
      avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  },
  {
    id: "3",
    name: "AI Chatbot",
    description: "Intelligent conversational agent for customer support.",
    tags: ["Python", "TensorFlow", "NLP"],
    icon: "🤖",
    owner: {
      id: "user3",
      name: "Carol Williams",
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  },
];

const ProjectCard = ({ project }) => (
  <li className="flex items-start space-x-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
    {/* <div className="flex-shrink-0 text-white p-2 ">{project.icon}</div> */}
    <div className="flex-grow">
      <h3 className="text-lg font-semibold mb-1 dark:text-white">
        {project.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-2">
          <img
            src={project.owner.avatarUrl}
            alt={`${project.owner.name}'s avatar`}
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-medium dark:text-gray-200">
            {project.owner.name}
          </span>
        </div>
        <button className="px-3 py-1 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white">
          Discover
          <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  </li>
);

const ProjectsListCard = () => {
  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold dark:text-white">
        🚀 Featured Projects
        </h2>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
};

export default ProjectsListCard;
