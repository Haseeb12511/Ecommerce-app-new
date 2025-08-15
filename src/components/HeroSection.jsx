// src/components/HeroSection.jsx
// import React from "react";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-gradient-to-r from-indigo-50 via-white to-pink-50 overflow-hidden">
//       <div className="container mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center">
//         {/* Left Content */}
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             Discover Your Next <span className="text-pink-500">Favorite</span>{" "}
//             Style
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Shop the latest trends and exclusive collections. Make every moment
//             stylish with our premium products.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
//               Shop Now
//             </button>
//             <button className="border border-gray-300 hover:border-pink-400 text-gray-700 px-6 py-3 rounded-full font-semibold transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative">
//           <div className="absolute rounded-3xl"></div>
//           <img
//             src="https://images.unsplash.com/photo-1594488518065-832318c2405b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGUlMjBjb21tZXJjZSUyMGhlcm98ZW58MHx8MHx8fDA%3D"
//             alt="Fashion"
//             className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
////////////////////////////////////////////////////////////////////////////////

// src/components/HeroSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-500 via-gray-700 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Discover Your Next <span className="text-pink-400">Favorite</span>{" "}
            Style
          </h1>
          <p className="text-gray-300 text-lg">
            Shop the latest trends and exclusive collections. Make every moment
            stylish with our premium products.
          </p>
          <div className="flex gap-4">
            <Link
              to={"/products"}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Shop Now
            </Link>
            <button className="border border-gray-600 hover:border-pink-400 text-gray-200 px-6 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute rounded-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1594488518065-832318c2405b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGUlMjBjb21tZXJjZSUyMGhlcm98ZW58MHx8MHx8fDA%3D"
            alt="Fashion"
            className="rounded-3xl shadow-xl object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
