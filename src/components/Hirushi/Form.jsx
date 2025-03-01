'use client';

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function InfluencerContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [focused, setFocused] = useState(null);
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

  const inputVariants = {
    focused: { scale: 1.02, borderColor: "#f97316", boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" },
    blurred: { scale: 1, borderColor: "#f97316" }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 min-h-screen flex items-center justify-center relative bg-black-600">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-60 right-20 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={formVariants}
          className="relative w-full"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-600 via-red-500 to-orange-600 blur opacity-70 animate-pulse border border-orange-600"></div>
          
          <form className="relative bg-black/80 p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-900">
            {/* Form title */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent mb-2">Connect with Influencers</h2>
              <p className="text-gray-300">Tell us about your campaign goals</p>
            </motion.div>

            {/* Name Input */}
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Brand Name
              </label>
              <motion.input
                type="text"
                className="w-full p-4 rounded-xl bg-black/40 border-2 border-orange-700 py-4 pl-12 pr-4 text-white placeholder-orange-300/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                placeholder="Enter your name"
                variants={inputVariants}
                animate={focused === 'name' ? 'focused' : 'blurred'}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                whileTap={{ scale: 0.995 }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Business Email
              </label>
              <motion.input
                type="email"
                className="w-full p-4 rounded-xl bg-black/40 border-2 border-orange-700 py-4 pl-12 pr-4 text-white placeholder-orange-300/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                placeholder="Enter your email"
                variants={inputVariants}
                animate={focused === 'email' ? 'focused' : 'blurred'}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                whileTap={{ scale: 0.995 }}
              />
            </motion.div>

            {/* Message Input */}
            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <label className="block text-gray-200 text-sm font-medium mb-2">
                Campaign Details
              </label>
              <motion.textarea
                className="w-full p-4 h-40 rounded-xl bg-black/40 border-2 border-orange-700 py-4 pl-12 pr-4 text-white placeholder-orange-300/90 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                placeholder="Type your message"
                variants={inputVariants}
                animate={focused === 'message' ? 'focused' : 'blurred'}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                whileTap={{ scale: 0.995 }}
              ></motion.textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div 
              variants={itemVariants}
              className="text-center"
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 via-red-500 to-orange-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-200"
                whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="h-5 w-5" />
                <span>Submit Campaign Request</span>
              </motion.button>
            </motion.div>

            {/* Privacy note */}
            <motion.p
              variants={itemVariants}
              className="text-center text-xs text-gray-400 mt-6"
            >
              By submitting this form, you agree to our Privacy Policy and Terms of Service.
            </motion.p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}