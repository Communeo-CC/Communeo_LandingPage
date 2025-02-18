'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CombinedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-12 relative">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Flex container for side-by-side layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Contact Form Section - Now on the left */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-2xl mx-auto sm:text-center">
              <div
                className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
                style={{
                  background:
                    "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                }}
              ></div>
            </div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <form className="grid gap-6 bg-gray-800 p-6 border rounded-xl border-orange-700 shadow-lg">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 h-32 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Type your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Video Section - Now on the right */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[40vh] overflow-hidden rounded-xl">
              <img
                src="/vedio.gif"
                alt="Video content"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}