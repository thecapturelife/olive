"use client";

import React from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-12">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-12">
          {/* Phone Numbers */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Phone Numbers</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <MessageCircle className="text-green-400" /> +91 9756165743
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-400" /> +91 9495646549
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-green-400" /> +91 9947586826
              </li>
            </ul>
          </div>

          {/* Location Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <p className="flex items-start gap-3 text-lg">
              <MapPin className="text-green-400 mt-1" />
              Olive Events, Karthikapuram,
              <br />
              Kannur District, Kerala 670571, India
            </p>

            <div className="mt-6 rounded overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.319444801452!2d75.4795719!3d12.2293205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4452a96f01aa5%3A0x1d81e3aa0d439a4b!2sKarthikapuram%2C%20Kerala%20670571!5e0!3m2!1sen!2sin!4v1722083000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Send Message Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-900 rounded border border-gray-700 text-white placeholder-gray-400 col-span-1"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-900 rounded border border-gray-700 text-white placeholder-gray-400 col-span-1"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 bg-gray-900 rounded border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
              required
            />
            <textarea
              rows={6}
              placeholder="Your Message"
              className="p-3 bg-gray-900 rounded border border-gray-700 text-white placeholder-gray-400 md:col-span-2"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded md:col-span-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
