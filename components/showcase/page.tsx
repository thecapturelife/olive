import React from "react";
import Image from "next/image";

const photos = Array.from({ length: 20 }, (_, i) => `/gallery/photo${i + 1}.jpg`); // e.g., /gallery/photo1.jpg to photo20.jpg

const Showcase = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Our Event Highlights
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((src, index) => (
          <div
            key={index}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Gallery Photo ${index + 1}`}
              width={500}
              height={300}
              className="object-cover w-full h-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">View</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
