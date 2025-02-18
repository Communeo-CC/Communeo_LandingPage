import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Locations() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const locations = [
    {
      title: "GP Square",
      description: "GP Square, Colombo",
      image: "/GP Square.jpg",
      link: "https://maps.app.goo.gl/AzumUDGhbizNyuUf9",
    },
    {
      title: "Spencer Building",
      description: "Spencer Building, Colombo",
      image: "/Spencer.jpg",
      link: "https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9",
    },
  ];

  return (
    <section ref={sectionRef} className="py-40 text-center">
      <motion.h3
        className="text-lg font-large text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Visit Us
      </motion.h3>

      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Locations
      </motion.h2>

      <motion.p
        className="text-white mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Don't hesitate to drop by and visit our team at the following locations
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            {/* Image */}
            <img
              src={location.image}
              alt={location.title}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-bold text-white">{location.title}</h3>
              <p className="text-orange-500 text-lg font-bold">{location.description}</p>
              <a
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-red-500 px-4 py-2 rounded-full mt-4 transition hover:bg-orange-400"
              >
                Get Directions →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
