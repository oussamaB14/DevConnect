import React from "react";
import { Link } from "react-router-dom";
import SignupImage from "../assets/images/DevConnect.(1)(1).png";

export default function Signup() {
  return (
    <>
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row ">
            <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
              <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-2xl">
                  <div className="relative w-full mb-2  pt-10 md:pt-12">
                    <img
                      src={SignupImage}
                      alt="Feature illustration"
                      className="w-full h-auto "
                    />
                  </div>
                  <div className="relative">
                    <p className="mb-2 font-medium text-gray-700 dark:text-gray-300 uppercase">
                      Join Us
                    </p>
                    <h2 className="font-bold text-gray-900 dark:text-white xl:text-5xl">
                      Join the DevConnect Community
                    </h2>
                  </div>
                  <p className="text-2xl text-gray-700 dark:text-gray-300">
                    Discover a world of possibilities with DevConnect.
                  </p>
                  <button className="mb-8 inline-block px-5 py-3 mt-3 text-lg font-bold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ">
                    🚀 Discover more
                  </button>
                  <div className="h-8"></div>
                </div>
              </div>
            </div>

            <div className="w-full bg-white dark:bg-gray-900 lg:w-6/12 xl:w-6/12">
              <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                <h4 className="w-full text-3xl font-bold text-gray-900 dark:text-white">
                  👋 Welcome to DevConnect
                </h4>

                <div className="w-full mt-10 space-y-8">
                  <div className="relative">
                    <Link to="/user-register">
                      <button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease dark:bg-blue-500 dark:hover:bg-blue-600">
                        Create an Account
                      </button>
                    </Link>
                    <button className="w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease flex items-center justify-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                      <svg
                        className="w-6 h-6 mr-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Sign up with Google
                    </button>
                    <button className="w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease flex items-center justify-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
                      <svg
                        className="w-6 h-6 mr-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          fill="#181717"
                        />
                      </svg>
                      Sign up with GitHub
                    </button>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      or, if you have an account you can{" "}
                      <Link
                        to="/signin"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// const stepOne = ({ formData, handleChange, nextStep, prevStep }) => (
//   <div className="flex flex-col lg:flex-row ">
//     <div className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
//       <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
//         <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-2xl">
//           <div className="relative w-full mb-2  pt-10 md:pt-12">
//             <img
//               src={SignupImage}
//               alt="Feature illustration"
//               className="w-full h-auto "
//             />
//           </div>
//           <div className="relative">
//             <p className="mb-2 font-medium text-gray-700 dark:text-gray-300 uppercase">
//               Join Us
//             </p>
//             <stepOne />
//             <h2 className="font-bold text-gray-900 dark:text-white xl:text-5xl">
//               Join the DevConnect Community
//             </h2>
//           </div>
//           <p className="text-2xl text-gray-700 dark:text-gray-300">
//             Discover a world of possibilities with DevConnect.
//           </p>
//           <button className="mb-8 inline-block px-5 py-3 mt-3 text-lg font-bold text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ">
//             🚀 Discover more
//           </button>
//           <div className="h-8"></div>
//         </div>
//       </div>
//     </div>

//     <div className="w-full bg-white dark:bg-gray-900 lg:w-6/12 xl:w-6/12">
//       <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
//         <h4 className="w-full text-3xl font-bold text-gray-900 dark:text-white">
//           👋 Welcome to DevConnect
//         </h4>

//         <div className="w-full mt-10 space-y-8">
//           <div className="relative">
//             <Link to="/user-register">
//               <button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease dark:bg-blue-500 dark:hover:bg-blue-600">
//                 Create an Account
//               </button>
//             </Link>
//             <button className="w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease flex items-center justify-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   fill="#34A853"
//                 />
//                 <path
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   fill="#FBBC05"
//                 />
//                 <path
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   fill="#EA4335"
//                 />
//               </svg>
//               Sign up with Google
//             </button>
//             <button className="w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease flex items-center justify-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
//               <svg
//                 className="w-6 h-6 mr-2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
//                   fill="#181717"
//                 />
//               </svg>
//               Sign up with GitHub
//             </button>
//             <p className="text-lg text-gray-500 dark:text-gray-400">
//               or, if you have an account you can{" "}
//               <Link
//                 to="/signin"
//                 className="text-blue-600 dark:text-blue-400 underline"
//               >
//                 sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
