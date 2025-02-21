import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin } from "lucide-react"; // Icons

export default function ContactInfo() {
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

  const contactDetails = [
    {
      icon: <Mail className="w-15 h-15 text-red-500" />,
      title: "Email",
      info: "hello@communeo.lk",
      link: "mailto:hello@communeo.lk",
    },
    {
      icon: <PhoneCall className="w-15 h-15 text-red-500" />,
      title: "Phone",
      info: "+94 779 688 262",
      link: "tel:+94779688262",
    },
    {
      icon: <MapPin className="w-15 h-15 text-red-500" />,
      title: "Office",
      info: "Spencer Building, Galle Road, Colombo",
      link: "https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9",
    },
  ];

  return (
    <section ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <a
                href={item.link}
                className="text-white hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.info}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
