// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold text-green-700">
//           Olive Events
//         </Link>

//         <div className="hidden md:flex gap-8 text-gray-800 font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/gallery">Gallery</Link>
//           <Link href="/contact">Contact</Link>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-800 focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {isOpen && (
//   <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 text-gray-800 font-medium">
//     <Link
//       href="/"
//       onClick={() => setIsOpen(false)}
//       className="block px-4 py-2 rounded hover:bg-gray-100"
//     >
//       Home
//     </Link>
//     <Link
//       href="/about"
//       onClick={() => setIsOpen(false)}
//       className="block px-4 py-2 rounded hover:bg-gray-100"
//     >
//       About
//     </Link>
//     <Link
//       href="/gallery"
//       onClick={() => setIsOpen(false)}
//       className="block px-4 py-2 rounded hover:bg-gray-100"
//     >
//       Gallery
//     </Link>
//     <Link
//       href="/contact"
//       onClick={() => setIsOpen(false)}
//       className="block px-4 py-2 rounded hover:bg-gray-100"
//     >
//       Contact
//     </Link>
//   </div>
// )}

//     </nav>
//   );
// };

// export default Navbar;




  "use client";

  import React, { useState } from "react";
  import Image from "next/image";
import Link from "next/link";

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/gallery/LOGO.jpg" // Replace with your actual logo file name
              alt="Olive Events Logo"
              width={50}
              height={60}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-green-700">Olive Events</span>
          </Link>

          <div className="hidden md:flex gap-8 text-gray-800 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 text-gray-800 font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/showcase"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    );
  };

  export default Navbar;
