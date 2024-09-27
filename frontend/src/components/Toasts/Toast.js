import React from "react";

// export default function Toast({ message, icon }) {
//   return (
//     <div>
//       <div
//         id="toast-simple"
//         className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
//         role="alert"
//       >
//         {icon}
//         <div className="ps-4 text-sm font-normal">{message}</div>
//       </div>
//     </div>
//   );
// }

// Example usage:
// <Toast
//   message="Message sent successfully."
//   icon={
//     <svg
//       className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
//       aria-hidden="true"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 18 20"
//     >
//       <path
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
//       />
//     </svg>
//   }
// />

// Enum for toast types
export const ToastType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

// Configuration for each toast type
const ToastConfig = {
  [ToastType.SUCCESS]: {
    message: "Operation completed successfully.",
    icon: (
      <svg
        className="w-5 h-5 text-green-600 dark:text-green-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 10l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  [ToastType.ERROR]: {
    message: "An error occurred. Please try again.",
    icon: (
      <svg
        className="w-5 h-5 text-red-600 dark:text-red-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 11V6m0 8h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  [ToastType.WARNING]: {
    message: "Warning: Please check your input.",
    icon: (
      <svg
        className="w-5 h-5 text-yellow-600 dark:text-yellow-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 13.5h.01M10 8.5v3"
        />
      </svg>
    ),
  },
  [ToastType.INFO]: {
    message: "Information: Your request is being processed.",
    icon: (
      <svg
        className="w-5 h-5 text-blue-600 dark:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
};

// Updated Toast component
export default function Toast({ type = ToastType.INFO, customMessage }) {
  const { message, icon } = ToastConfig[type];
  const [isVisible, setIsVisible] = React.useState(true);
  const timerRef = React.useRef(null);
  React.useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(timerRef.current);
    }
  }, [isVisible]);
  // const handleClose = () => {
  //   setIsVisible(false);
  // };

  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div
        id="toast-simple"
        className="fixed bottom-4 right-4 flex items-center border-2 border-blue-300 justify-between w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-gray-50 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 fade-out dark:divide-gray-700 dark:bg-gray-800"
        role="alert"
      >
        <div className="flex items-center">
          {icon}
          <div className="ps-4 text-sm font-normal">
            {customMessage || message}
          </div>
        </div>
      </div>
    </div>
  );
}

// Example usage:
// <Toast type={ToastType.SUCCESS} />
// <Toast type={ToastType.ERROR} customMessage="Custom error message" />
