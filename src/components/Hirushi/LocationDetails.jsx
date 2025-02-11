import React from "react";

export default function Locations() {
  const locations = [
    {
      title: "GP Square",
      description: "GP Square, Colombo",
      image: "/C:/Users/USER/Documents/IIT/2nd Year/SDGP/LandingPage Images/GP Square.jpg", // Replace with actual image path
      link: "https://maps.google.com",
    },
    {
      title: "Spencer Building",
      description: "Spencer Building, Colombo",
      image: "/path-to-spencer-building.jpg", // Replace with actual image path
      link: "https://maps.google.com",
    },
  ];

  return (
    <>
      {/* Section Separator */}
      {/* <div className="w-full h-2 bg-gray-300 my-12"></div> */}

      <section className="py-16 text-center">
        <h3 className="text-lg font-Large text-white">Visit Us</h3>
        <h2 className="text-3xl font-bold text-orange-600 mb-2">Locations</h2>
        <p className="text-white mb-10">
          Don't hesitate to drop by and visit our team at the following locations.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {locations.map((location, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={location.image}
                alt={location.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-black">{location.title}</h3>
                <p className="text-gray-600">{location.description}</p>
                <a
                  href={location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-medium mt-3 inline-flex items-center hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
