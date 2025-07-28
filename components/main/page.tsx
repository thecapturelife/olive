// "use client";

// import React from "react";
// import Image from "next/image";

// const Main = () => {
//   return (
//     <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
//       {/* Background Image */}
//       <Image
//         src="/gallery/banner copy.jpg"
//         alt="Main section"
//         fill
//         className="object-cover brightness-50"
//         priority
//       />

//       {/* Overlay Content */}
//       <div className="z-10 p-6 max-w-2xl">
//         <h2 className="text-3xl sm:text-5xl font-bold mb-4">
//           “Great events create great memories.”
//         </h2>
//         <p className="text-lg sm:text-xl">
//           From concept to celebration, we turn your dreams into unforgettable experiences.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Main;




"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Cinematic Zoom In & Out Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/gallery/banner copy.jpg"
          alt="Main section"
          fill
          className="object-cover brightness-50"
          priority
        />
      </motion.div>

      {/* Text Overlay with Fade + Slide */}
      <motion.div
        className="z-10 p-6 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">
          “Great events create great memories.”
        </h2>
        <p className="text-lg sm:text-xl">
          From concept to celebration, we turn your dreams into unforgettable experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Main;
