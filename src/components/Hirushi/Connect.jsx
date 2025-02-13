import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

function ContactSection() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 lg:px-16 text-white">
      {/* Left Side: Contact Details */}
      <div className="lg:w-1/2 space-y-10">
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
      </div>

      {/* Right Side: Large Image */}
      <div className="lg:w-1/2 mt-5 lg:mt-20">
        <img
          src="Coonect.jpg"
          alt="Contact Us"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default ContactSection;
