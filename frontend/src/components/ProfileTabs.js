import { Link } from "react-router-dom";
import { useState } from "react";

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('settings');
  // const tabContent = {
  //   settings: (
  //     <div className="mt-4">
  //       <h3 className="text-lg font-semibold mb-2">Settings</h3>
  //       <p>Manage your account settings and preferences here.</p>
  //     </div>
  //   ),
  //   messages: (
  //     <div className="mt-4">
  //       <h3 className="text-lg font-semibold mb-2">Messages</h3>
  //       <p>View and manage your messages here.</p>
  //     </div>
  //   ),
  //   archive: (
  //     <div className="mt-4">
  //       <h3 className="text-lg font-semibold mb-2">Archive</h3>
  //       <p>Access your archived content here.</p>
  //     </div>
  //   ),
  //   notifications: (
  //     <div className="mt-4">
  //       <h3 className="text-lg font-semibold mb-2">Notifications</h3>
  //       <p>Manage your notification preferences here.</p>
  //     </div>
  //   ),
  // };

  return (
    // <Tabs aria-label="Profile tabs" className={{ '--tab-active-color': '#3b82f6', '--tab-border-color': 'transparent' }}>
    //   <Tabs.Item active title="Posts">
    //     This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
    //     Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
    //     control the content visibility and styling.
    //   </Tabs.Item>
    //   <Tabs.Item title="Projects">
    //     This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
    //     Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
    //     control the content visibility and styling.
    //   </Tabs.Item>
    //   <Tabs.Item title="Contacts">
    //     This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
    //     Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
    //     control the content visibility and styling.
    //   </Tabs.Item>
    //   <Tabs.Item disabled title="Disabled">
    //     Disabled content
    //   </Tabs.Item>
    // </Tabs>

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
          <option value="settings">Settings</option>
          <option value="messages">Messages</option>
          <option value="archive">Archive</option>
          <option value="notifications">Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {['settings', 'messages', 'archive', 'notifications'].map((tab) => (
              <Link
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 border-b-2 px-1 pb-4 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                aria-current={activeTab === tab ? 'page' : undefined}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4">
        {activeTab === 'settings' && (
          <p className="text-gray-700 dark:text-gray-300">Settings content goes here.</p>
        )}
        {activeTab === 'messages' && (
          <p className="text-gray-700 dark:text-gray-300">Messages content goes here.</p>
        )}
        {activeTab === 'archive' && (
          <p className="text-gray-700 dark:text-gray-300">Archive content goes here.</p>
        )}
        {activeTab === 'notifications' && (
          <p className="text-gray-700 dark:text-gray-300">Notifications content goes here.</p>
        )}
      </div>
    </div>
  );
}
