import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

export default function Signin() {
  const { loginWithEmailPassword } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await loginWithEmailPassword(values.email, values.password);
      // If login is successful, you can redirect the user to the dashboard or profile page
      console.log("Login successful!");
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    const loginUrl = `${process.env.REACT_APP_API_URL}auth/google/login`;
    console.log("Redirecting to Google login:", loginUrl);
    window.location.href = loginUrl;
  };

  return (
    <section>
      <section className="w-full px-8 py-16 bg-gray-100 dark:bg-gray-800 xl:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
              <p
                className="font-medium text-blue-500 dark:text-blue-400 uppercase"
                data-primary="blue-500"
              >
                Building Businesses
              </p>
              <h2 className="text-2xl font-extrabold leading-none text-black dark:text-white sm:text-3xl md:text-5xl">
                Changing The Way People Do Business.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 md:pr-16">
                Learn how to engage with your visitors and teach them about your
                mission. We're revolutionizing the way customers and businesses
                interact.
              </p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
              <div
                className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white dark:bg-gray-700 border-b-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-2xl px-7"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <h3 className="mb-6 text-2xl font-medium text-center text-gray-800 dark:text-white">
                  Sign in to your Account
                </h3>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={signinSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setIsSubmitting(true);
                    handleSubmit(values, { setSubmitting });
                  }}
                >
                  <Form>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                      data-rounded="rounded-lg"
                      data-primary="blue-500"
                      placeholder="Email address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                      data-rounded="rounded-lg"
                      data-primary="blue-500"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                    <div className="block">
                      <button
                        type="submit"
                        className="w-full px-3 py-4 font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-400"
                        data-primary="blue-600"
                        data-rounded="rounded-lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          "Sign in"
                        )}
                      </button>
                    </div>
                    <div className="flex justify-center mt-4 space-x-4">
                      <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-12 h-12 text-sm font-medium text-gray-800 bg-white dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <svg
                          className="w-6 h-6"
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
                      </button>
                      <button className="flex items-center justify-center w-12 h-12 text-sm font-medium text-gray-800 bg-white dark:bg-gray-700 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3 .405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            fill="#181717"
                          />
                        </svg>
                      </button>
                    </div>
                  </Form>
                </Formik>

                <p className="w-full mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500 dark:text-blue-400 underline"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
