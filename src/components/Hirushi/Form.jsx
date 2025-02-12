import React from "react";

export default function ContactForm() {
  return (
    <section className="mt-[-30px] py-15 pb-40 relative">
      <div className="max-w-screen-md mx-auto px-4 text-gray-400 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>

        <div className="relative mt-0">
          <form className="grid gap-6 bg-transparent p-6 border rounded-xl dark:border-gray-700">
            {/* Name Input */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                className="w-full p-3 h-32 rounded-lg bg-gray-900 border border-gray-700 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Type your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 rounded-lg transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
