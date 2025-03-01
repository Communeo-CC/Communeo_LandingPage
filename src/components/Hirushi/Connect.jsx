// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

// function ContactSection() {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setInView(entry.isIntersecting);
//       },
//       { threshold: 0.5 } // Triggers when 50% of the section is visible
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 lg:px-16 text-white">
//       {/* Left Side: Contact Info */}
//       <motion.div
//         className="lg:w-1/2 space-y-10"
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h1 className="text-5xl font-bold text-orange-700">Connect With Us</h1>

//         <div className="space-y-6 text-lg">
//           <div className="flex items-center gap-4">
//             <Mail className="text-red-500 w-7 h-7" />
//             <div>
//               <h2 className="text-2xl font-semibold">Email</h2>
//               <p className="opacity-80">contact@example.com</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Phone className="text-red-500 w-7 h-7" />
//             <div>
//               <h2 className="text-2xl font-semibold">Phone</h2>
//               <p className="opacity-80">+94 779 688 262</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <MapPin className="text-red-500 w-7 h-7" />
//             <div>
//               <h2 className="text-2xl font-semibold">Office</h2>
//               <p className="opacity-80">GP Square, Colombo</p>
//               <a
//                 href="https://maps.app.goo.gl/AzumUDGhbizNyuUf9"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-orange-500 hover:text-red-400 transition"
//               >
//                 Get Directions →
//               </a>
//               <p className="opacity-80 mt-2">Spencer Building, Colombo</p>
//               <a
//                 href="https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-orange-500 hover:text-red-400 transition"
//               >
//                 Get Directions →
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Instagram className="text-red-500 w-7 h-7" />
//             <div>
//               <h2 className="text-2xl font-semibold">Instagram</h2>
//               <a
//                 href="https://www.instagram.com/communeo.app?igsh=MWtta3AwYmJyN2hoZA=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-orange-500 hover:text-red-400 transition"
//               >
//                 Instagram Profile
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Linkedin className="text-red-500 w-7 h-7" />
//             <div>
//               <h2 className="text-2xl font-semibold">LinkedIn</h2>
//               <a
//                 href="https://www.linkedin.com/company/communeo/posts/?feedView=all"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-orange-500 hover:text-red-400 transition"
//               >
//                 LinkedIn Profile
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Right Side: Large Image (Centered More) */}
//       <motion.div
//         className="lg:w-3/5 mt-10 lg:mt-20 mx-auto"
//         initial={{ opacity: 0, x: 50 }}
//         animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
//         transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
//       >
//         <img
//           src="Connect1.jpg"
//           alt="Contact Us"
//           className="w-full h-full rounded-lg shadow-lg"
//         />
//       </motion.div>
//     </section>
//   );
// }

// export default ContactSection;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Clock, Share2, TrendingUp, Users, BarChart2 } from "lucide-react";

function ContactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Contact card data
  const contactCards = [
    { 
      icon: Mail, 
      title: "Email Us", 
      description: "Get in touch via email", 
      value: "contact@example.com",
      link: "mailto:contact@example.com",
      color: "from-red-600 to-red-700"
    },
    { 
      icon: Phone, 
      title: "Call Us", 
      description: "Speak directly with our team", 
      value: "+94 779 688 262",
      link: "tel:+94779688262",
      color: "from-orange-500 to-orange-600"
    },
    { 
      icon: Instagram, 
      title: "Follow Us", 
      description: "Connect on social media", 
      value: "@communeo.app",
      link: "https://www.instagram.com/communeo.app?igsh=MWtta3AwYmJyN2hoZA==",
      color: "from-orange-600 to-pink-500"
    },
    { 
      icon: Clock, 
      title: "Hours", 
      description: "We're available", 
      value: "Mon-Fri: 9AM - 6PM",
      link: null,
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  // Office locations
  const offices = [
    {
      name: "GP Square Office",
      address: "GP Square, Colombo, Sri Lanka",
      mapLink: "https://maps.app.goo.gl/AzumUDGhbizNyuUf9"
    },
    {
      name: "Spencer Building",
      address: "Spencer Building, Colombo, Sri Lanka",
      mapLink: "https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9"
    }
  ];

  // Service highlights
  const services = [
    { icon: Users, title: "Influencer Matching", color: "text-red-500" },
    { icon: Share2, title: "Content Amplification", color: "text-orange-500" },
    { icon: TrendingUp, title: "Growth Analytics", color: "text-yellow-500" },
    { icon: BarChart2, title: "Performance Tracking", color: "text-red-500" }
  ];

  return (
    <section ref={sectionRef} className="px-4 sm:px-8 py-16 text-white bg-black-600">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-3xl font-bold mb-4">
            <span className="text-white">Connect With </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Us
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We're here to help elevate your brand with our innovative influencer marketing solutions.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-black-600 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color}/10`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="ml-3 font-semibold text-lg">{card.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-3">{card.description}</p>
                {card.link ? (
                  <a 
                    href={card.link} 
                    target={card.link.startsWith('https') ? "_blank" : undefined}
                    rel={card.link.startsWith('https') ? "noopener noreferrer" : undefined}
                    className="text-white font-medium hover:underline"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-white font-medium">{card.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Columns: Office Locations & Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Office Locations */}
          <motion.div
            className="bg-black-600 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">Our Offices</h2>
            </div>
            
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="pb-6 border-b border-gray-800 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-lg mb-2">{office.name}</h3>
                  <p className="text-gray-300 mb-3">{office.address}</p>
                  <a 
                    href={office.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-orange-500 hover:text-orange-400 transition"
                  >
                    <span>Get Directions</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="bg-black-600 p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-gray-800 mr-4">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {index === 0 && "Connect brands with perfect content creators for authentic partnerships."}
                      {index === 1 && "Maximize content reach across social platforms for higher engagement."}
                      {index === 2 && "Track audience growth metrics to optimize your social presence."}
                      {index === 3 && "Monitor and analyze campaign ROI with detailed reporting."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}

export default ContactSection;

