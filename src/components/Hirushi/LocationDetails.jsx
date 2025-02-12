import React from "react";

export default function Locations() {
  const locations = [
    {
      title: "GP Square",
      description: "GP Square, Colombo",
      image: "/GP Square.jpg", // Replace with actual image path
      link: "https://maps.app.goo.gl/AzumUDGhbizNyuUf9",
    },
    {
      title: "Spencer Building",
      description: "Spencer Building, Colombo",
      image: "/Spencer.jpg", // Replace with actual image path
      link: "https://maps.app.goo.gl/3dg91KdCtsvZM9Sh9",
    },
  ];

  return (
    <section className="py-40 text-center">
      <h3 className="text-lg font-large text-white">Visit Us</h3>
      <h2 className="text-3xl font-bold text-orange-600 mb-2">Locations</h2>
      <p className="text-white mb-10">
        Don't hesitate to drop by and visit our team at the following locations
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {locations.map((location, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
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
          </div>
        ))}
      </div>
    </section>
  );
}
