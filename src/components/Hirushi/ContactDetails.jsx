import React from "react";
import Section from "./Section";
import { Mail, PhoneCall, MapPin } from "lucide-react"; // Icons

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-10 h-10 text-red-500" />,
      title: "Email",
      info: "hello@communeo.lk",
      link: "mailto:hello@communeo.lk",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-red-500" />,
      title: "Phone",
      info: "+1 (555) 000-0000",
      link: "tel:+15550000000",
    },
    {
      icon: <MapPin className="w-10 h-10 text-red-500" />,
      title: "Office",
      info: "Spencer Building, Galle Road, Colombo",
      link: "https://maps.google.com",
    },
  ];

  return (
    <section crosses>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
