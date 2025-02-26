'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  BarChart2, 
  Star, 
  Share2, 
  Camera,
  Radio
} from 'lucide-react';

function GradualSpacing({
  textLines = ['Contact Us', 'Reach out to us for further clarification, support or feedback'],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Influencer marketing platform icons with descriptions
  const icons = [
    { Icon: Users, text: "Connect with Influencers" },
    { Icon: BarChart2, text: "Track Performance" },
    { Icon: Star, text: "Boost Engagement" },
    { Icon: Share2, text: "Amplify Reach" },
    { Icon: Camera, text: "Content Creation" },
    { Icon: Radio, text: "Brand Awareness" }
  ];

  return (
    <section
      id="features"
      className="relative z-2 py-10 sm:py-20 lg:py-16 xl:py-20 mt-[calc(40px-1rem)] sm:mt-10 md:mt-40 lg:mt-10 mx-auto mb-[calc(35px+10px)] hidden sm:block"
    >
      <div className="container sm:mt-20 md:mt-40 lg:mt-10 mx-auto">
        <div className="flex flex-col items-start sm:items-center space-y-4">
          <AnimatePresence>
            {/* Single line Contact Us heading */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center w-full"
            >
              <h1 className="text-6xl lg:text-6xl font-bold mb-6 text-white">
                Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Us</span>
              </h1>
            </motion.div>

            {/* Second Line - "Reach out to us..." fades in all at once */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.6,
              }}
              className="text-[1rem] sm:text-[0.8rem] md:text-[1.4rem] xl:text-[1.3rem]
                      text-left sm:text-center text-white mt-2 max-w-full sm:max-w-md lg:max-w-2xl"
            >
              {textLines[1]}
            </motion.p>

            {/* Animated icons section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-10 w-full max-w-4xl mx-auto"
            >
              {icons.map(({ Icon, text }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-3 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-3">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <p className="text-gray-300 text-sm">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default GradualSpacing;