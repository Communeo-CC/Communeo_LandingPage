'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

function GradualSpacing({
  textLines = ['Unleash The Power Of Effective', 'Marketing With Communeo'],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="features"
      className="relative z-2 py-10 sm:py-20 lg:py-16 xl:py-20 mt-[calc(40px-1rem)] sm:mt-10 md:mt-40 lg:mt-10 mx-auto mb-[calc(35px+10px)] hidden sm:block" // Add 10px margin to bottom
    >

      <div className="container sm:mt-20 md:mt-40 lg:mt-10 mx-auto">
        <div className="flex flex-col items-start sm:items-center space-y-4">

          <AnimatePresence>
            {textLines.map((line, lineIndex) => (
              <div
                className="flex space-x-1 w-full sm:w-auto"
                key={lineIndex}
              >
                {line.split('').map((char, i) => (
                  <motion.p
                    ref={ref}
                    key={`${lineIndex}-${i}`}
                    initial={{ opacity: 0, x: -18 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    exit="hidden"
                    transition={{
                      duration: 0.2,
                      delay: lineIndex * 2.5 + i * 0.1, // Delay for the second line
                    }}
                    className="font-semibold text-[1.60rem]  // Mobile
                               sm:text-[1.70rem]  // Small screens (sm)
                               md:text-[3.05rem]  // Medium screens (md)
                               xl:text-[3.0rem]  // Large screens (xl)
                               leading-[2.25rem] sm:leading-[2.75rem] md:leading-[4.0625rem] xl:leading-[4.5rem] 
                               text-left sm:text-center tracking-tighter max-w-full sm:max-w-md lg:max-w-2xl"
                  >
                    {char === ' ' ? <span>&nbsp;</span> : char}
                  </motion.p>
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default GradualSpacing;
