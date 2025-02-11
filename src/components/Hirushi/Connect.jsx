import React from "react";

function ContactSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 py-12 lg:px-16 text-white">
      {/* Left Side: Contact Details */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold text-orange-500 mb-6">Connect with us</h1>

        <div className="space-y-5 text-lg">
          <div>
            <h2 className="text-2xl font-semibold">Email</h2>
            <p className="opacity-80">contact@example.com</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Phone</h2>
            <p className="opacity-80">+1 (123) 456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Office</h2>
            <p className="opacity-80">123 Main Street, City, Country</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Instagram</h2>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition"
            >
              @yourInstagramHandle
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition"
            >
              Your LinkedIn Profile
            </a>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 lg:pl-20">
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
