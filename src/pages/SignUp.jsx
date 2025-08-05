import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Main SignUp component for the Sign-up page
function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      toast.error("User already exists with this email!");
      return;
    }

    const newUser = {
      // id: Date.now(), // unique id based on timestamp
      id: users.length + 1,
      name,
      email,
      password,
      role: "user",
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    toast.success("Signup successful! Redirecting to home...");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
        <div className="text-left">
          {/* Logo */}
          <div className="text-xl font-bold text-red-500 mb-6">Logo Here</div>

          {/* Welcome and Sign Up */}
          <h2 className="text-gray-600 text-lg">Create your account</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sign up</h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="test@gmail.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="************"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 mt-6 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              SIGN UP
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center text-sm">
            <span className="text-gray-600">Already have an account?</span>{" "}
            {/* <a href="#" className="font-medium text-red-500 hover:text-red-600">Sign in</a> */}
            <a
              href="#"
              className="font-medium text-red-500 hover:text-red-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
