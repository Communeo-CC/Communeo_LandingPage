'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function GradualSpacing({
  textLines = ['Contact Us', 'Reach out to us for further clarification, support or feedback'],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="features"
      className="relative z-2 py-10 sm:py-20 lg:py-16 xl:py-20 mt-[calc(40px-1rem)] sm:mt-10 md:mt-40 lg:mt-10 mx-auto mb-[calc(35px+10px)] hidden sm:block"
    >
      <div className="container sm:mt-20 md:mt-40 lg:mt-10 mx-auto">
        <div className="flex flex-col items-start sm:items-center space-y-4">
          <AnimatePresence>
            {/* Title - Solid Orange Color */}
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, x: -18 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              exit="hidden"
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              className="font-bold text-[1.60rem]  
                         sm:text-[1.70rem]  
                         md:text-[3.05rem]  
                         xl:text-[3.0rem]  
                         leading-[2.25rem] sm:leading-[2.75rem] md:leading-[4.0625rem] xl:leading-[4.5rem] 
                         text-left sm:text-center tracking-tighter max-w-full sm:max-w-md lg:max-w-2xl
                         text-orange-800"  // Applying the same solid orange to both words
            >
              {textLines[0]}
            </motion.h1>

            {/* Subtitle - "Reach out to us..." */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.6, // Delay after title animation finishes
              }}
              className="text-[1rem] sm:text-[0.8rem] md:text-[1.4rem] xl:text-[1.3rem] 
                         text-left sm:text-center text-white mt-2 max-w-full sm:max-w-md lg:max-w-2xl"
            >
              {textLines[1]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default GradualSpacing;
