import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";
function UserRegister() {
  const { signup } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  //const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signup(firstName, lastName, email, password, passwordConfirmation);
    } catch (error) {
      //setError(error.message);
    }
  };
  return (
    // <section class="py-4 px-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg dark:text-white">
    //   <h2 class="text-xl font-bold mb-4">Get started with DevConnect</h2>
    //   <p class="text-base mb-6">
    //     Join our community of developers and get access to exclusive content,
    //     events and job opportunities.
    //   </p>
    //   <form>
    //     <div class="grid gap-4 mb-4 md:grid-cols-2">
    //       <div>
    //         <label
    //           for="first_name"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           First name
    //         </label>
    //         <input
    //           type="text"
    //           id="first_name"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="John"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="last_name"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           Last name
    //         </label>
    //         <input
    //           type="text"
    //           id="last_name"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="Doe"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="company"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           Company
    //         </label>
    //         <input
    //           type="text"
    //           id="company"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="Flowbite"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="phone"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           Phone number
    //         </label>
    //         <input
    //           type="tel"
    //           id="phone"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="123-45-678"
    //           pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="website"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           Website URL
    //         </label>
    //         <input
    //           type="url"
    //           id="website"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder="flowbite.com"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           for="visitors"
    //           class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //         >
    //           Unique visitors (per month)
    //         </label>
    //         <input
    //           type="number"
    //           id="visitors"
    //           class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //           placeholder=""
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div class="mb-6">
    //       <label
    //         for="email"
    //         class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //       >
    //         Email address
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="john.doe@company.com"
    //         required
    //       />
    //     </div>
    //     <div class="mb-6">
    //       <label
    //         for="password"
    //         class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //       >
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="•••••••••"
    //         required
    //       />
    //     </div>
    //     <div class="mb-6">
    //       <label
    //         for="confirm_password"
    //         class="block mb-1 text-base font-medium text-gray-900 dark:text-white"
    //       >
    //         Confirm password
    //       </label>
    //       <input
    //         type="password"
    //         id="confirm_password"
    //         class="bg-gray-50 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //         placeholder="•••••••••"
    //         required
    //       />
    //     </div>
    //     <div class="flex items-start mb-6">
    //       <div class="flex items-center h-5">
    //         <input
    //           id="remember"
    //           type="checkbox"
    //           value=""
    //           class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
    //           required
    //         />
    //       </div>
    //       <label
    //         for="remember"
    //         class="ms-2 text-base font-medium text-gray-900 dark:text-gray-300"
    //       >
    //         I agree with the{" "}
    //         <Link class="text-blue-600 hover:underline dark:text-blue-500">
    //           terms and conditions
    //         </Link>
    //         .
    //       </label>
    //     </div>
    //     <button
    //       type="submit"
    //       class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </section>

    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className=" relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover dark:brightness-50"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <Link to="/" className="flex ms-2 md:me-24">
              <img src={logo} className="h-12" alt=" Logo" />
              {/* <span className="p-1 font-black self-center text-xl  whitespace-nowrap dark:text-white">
                  <span className="text-blue-800 dark:text-blue-400">Dev</span>
                  <span className="text-blue-500 dark:text-blue-300">
                    Connect.
                  </span>
                </span> */}
            </Link>

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              Welcome to DevConnect 🌐
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-300">
              Join a community of developers, designers, and entrepreneurs who
              are passionate about building the next generation of web
              applications. Share your projects, get feedback, and learn from
              others.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  value={passwordConfirmation}
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {/* <div className="col-span-6 sm:col-span-3">
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  for="small_size"
                >
                  Small file input
                </label>
                <input
                  class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="small_size"
                  type="file"
                />
              </div> */}

              {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm dark:bg-gray-700"
                  />

                  <span className="text-sm text-gray-700 dark:text-white">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div> */}

              {/* <div className="col-span-6">
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  By creating an account, you agree to our
                  <Link className="text-gray-700 underline dark:text-white">
                    {" "}
                    terms and conditions{" "}
                  </Link>
                  and
                  <Link className="text-gray-700 underline dark:text-white">
                    privacy policy
                  </Link>
                  .
                </p>
              </div> */}

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:bg-blue-500 dark:hover:bg-blue-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onClick={handleSubmit}
                >
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
                  Already have an account?
                  <Link
                    to="/signin"
                    className="text-gray-700 underline dark:text-white"
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default UserRegister;
