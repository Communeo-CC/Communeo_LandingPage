import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

function ContactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 lg:px-16 text-white">
      {/* Left Side: Contact Info */}
      <motion.div
        className="lg:w-1/2 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold text-orange-700">Connect With Us</h1>

        <div className="space-y-6 text-lg">
          <div className="flex items-center gap-4">
            <Mail className="text-red-500 w-7 h-7" />
            <div>
              <h2 className="text-2xl font-semibold">Email</h2>
              <p className="opacity-80">contact@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-red-500 w-7 h-7" />
            <div>
              <h2 className="text-2xl font-semibold">Phone</h2>
              <p className="opacity-80">+94 779 688 262</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-red-500 w-7 h-7" />
            <div>
              <h2 className="text-2xl font-semibold">Office</h2>
              <p className="opacity-80">GP Square, Colombo</p>
              <a
                href="https://maps.app.goo.gl/AzumUDGhbizNyuUf9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-red-400 transition"
              >
                Get Directions →
              </a>
              <p className="opacity-80 mt-2">Spencer Building, Colombo</p>
              <a
                href="https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-red-400 transition"
              >
                Get Directions →
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Instagram className="text-red-500 w-7 h-7" />
            <div>
              <h2 className="text-2xl font-semibold">Instagram</h2>
              <a
                href="https://www.instagram.com/communeo.app?igsh=MWtta3AwYmJyN2hoZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-red-400 transition"
              >
                Instagram Profile
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-red-500 w-7 h-7" />
            <div>
              <h2 className="text-2xl font-semibold">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/company/communeo/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-red-400 transition"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Large Image (Centered More) */}
      <motion.div
        className="lg:w-3/5 mt-10 lg:mt-20 mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="Connect1.jpg"
          alt="Contact Us"
          className="w-full h-full rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default ContactSection;
