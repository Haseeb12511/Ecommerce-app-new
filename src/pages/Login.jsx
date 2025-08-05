import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      navigate("/"); // Redirect to home page after login
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
        <div className="text-left">
          {/* Logo */}
          <div className="text-xl font-bold text-red-500 mb-6">Logo Here</div>

          {/* Welcome and Sign In */}
          <h2 className="text-gray-600 text-lg">Welcome back !!!</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sign in</h1>

          <form onSubmit={handleLogin} className="space-y-6">
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
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-400 hover:text-gray-900"
                >
                  Forgot Password ?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-red-500 focus:border-red-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="************"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 mt-6 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              SING IN
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

          {/* Sign Up Link */}
          <div className="mt-8 text-center text-sm">
            <span className="text-gray-600">I don't have an account?</span>{" "}
            {/* <a href="#" className="font-medium text-red-500 hover:text-red-600">Sign up</a> */}
            <a
              href="#"
              className="font-medium text-red-500 hover:text-red-600"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const matchedUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (matchedUser) {
//       localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
//       navigate("/"); // Redirect to home page after login
//     } else {
//       alert("Invalid email or password!");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 mb-2">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter email"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-gray-700 mb-2">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
