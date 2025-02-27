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
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, User, QrCode, MessageCircle, HomeIcon } from "lucide-react";

function ContactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconPositions = [
    { top: "20%", left: "60%" },  //mail
    { top: "35%", left: "75%" },  //phone
    { top: "45%", left: "60%" },  //mappin
    { top: "80%", left: "80%" },  //instagram
    { top: "33%", left: "45%" },  //linkedin
    { top: "87%", left: "50%" },  //globe
    { top: "15%", left: "85%" },  // user
    { top: "50%", left: "90%" },  //Qrcode
    { top: "68%", left: "60%" },  //message
    { top: "57%", left: "75%" },  //home
  ];

  const icons = [Mail, Phone, MapPin, Instagram, Linkedin, Globe, User, QrCode, MessageCircle, HomeIcon];

  const iconColors = [
    "text-red-600",
    "text-orange-400",
    "text-yellow-600",
    "text-red-700",
    "text-orange-600",
    "text-yellow-500",
    "text-red-600",
    "text-yellow-600",
    "text-red-500",
    "text-orange-600",
  ];

  return (
    <section ref={sectionRef} className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 lg:px-16 text-white relative">
      {/* Left Side: Contact Info */}
      <motion.div
        className="lg:w-1/2 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold text-orange-700">Connect With Us</h1>

        <div className="space-y-6 text-lg">
          <div>
            <h2 className="text-2xl font-semibold">Email</h2>
            <p className="opacity-80">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Phone</h2>
            <p className="opacity-80">+94 779 688 262</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Office</h2>
            <p className="opacity-80">GP Square, Colombo</p>
            <a href="https://maps.app.goo.gl/AzumUDGhbizNyuUf9" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-red-400 transition">
              Get Directions →
            </a>
            <p className="opacity-80 mt-2">Spencer Building, Colombo</p>
            <a href="https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-red-400 transition">
              Get Directions →
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Instagram</h2>
            <a href="https://www.instagram.com/communeo.app?igsh=MWtta3AwYmJyN2hoZA==" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-red-400 transition">
              Instagram Profile
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ top: iconPositions[index].top, left: iconPositions[index].left }}
            variants={iconVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Icon className={`w-20 h-20 ${iconColors[index]}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;

