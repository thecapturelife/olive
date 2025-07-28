"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fullscreen Background Image */}
      <Image
        src="/gallery/about.jpg"
        alt="About Olive Events"
        fill
        className="object-cover brightness-70"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:px-10 backdrop-blur-sm min-h-screen bg-black/40">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold mb-10"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-green-300">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-white/90">
            At <span className="font-semibold text-green-200">Olive Events</span>, we believe every celebration is a canvas of emotion.
            Our passionate team brings life to weddings, birthdays, and corporate events by blending creativity with flawless execution.
          </p>
          <p className="text-lg leading-relaxed mb-10 text-white/90">
            Based in Karthikapuram, we turn your vision into memorable reality with attention to every detail, every smile, and every moment.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-green-200 mb-3">Our Mission</h3>
              <p className="text-white/80 leading-relaxed">
                To deliver high-quality, worry-free event management services that transform your dreams into vibrant, unforgettable celebrations.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-2xl font-bold text-green-200 mb-3">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                To be Kerala’s most beloved event planner — where magic, elegance, and joy come together in every celebration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
