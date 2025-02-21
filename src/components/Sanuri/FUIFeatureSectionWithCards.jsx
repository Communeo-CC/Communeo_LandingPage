import React from "react";
import Icon1 from "../../assets/icons/Icon1.png"; // Replace with actual paths for each PNG
import Icon2 from "../../assets/icons/Icon2.png";
import Icon3 from "../../assets/icons/Icon3.png";
import Icon4 from "../../assets/icons/Icon4.png";
import Icon5 from "../../assets/icons/Icon5.png";
import Icon6 from "../../assets/icons/Icon6.png";

export default function FUIFeatureSectionWithCards() {
  const features = [
    {
      icon: (
        <img
          src={Icon1}
          alt="Influencer Icon"
          className="w-9 h-9"
        />
      ),
      title: "Influencer and Content Creator Marketplace",
      desc: "A platform where influencers and creators can connect with brands, making it easy for businesses to find creators by niche, audience, and engagement.",
    },
    {
      icon: (
        <img
          src={Icon2}
          alt="AI-Powered Influencer Matching"
          className="w-9 h-9"
        />
      ),
      title: "AI-Powered Influencer Matching",
      desc: "AI tools recommend influencers based on campaign goals and audience fit, saving time and improving campaign effectiveness.",
    },
    {
      icon: (
        <img
          src={Icon3}
          alt="Real-Time Campaign Analytics"
          className="w-9 h-9"
        />
      ),
      title: "Real-Time Campaign Analytics",
      desc: "Live tracking of campaign metrics like views and engagement, helping brands optimize campaigns in real-time for better results.",
    },
    {
      icon: (
        <img
          src={Icon4}
          alt="Ranking and Review System"
          className="w-9 h-9"
        />
      ),
      title: "Ranking and Review System",
      desc: "Influencers and creators are ranked by performance and reviews, helping businesses identify top collaborators for better decision-making.",
    },
    {
      icon: (
        <img
          src={Icon5}
          alt="In-Built Communication Tools"
          className="w-9 h-9"
        />
      ),
      title: "In-Built Communication Tools",
      desc: "Chat and negotiation tools streamline communication, making collaboration faster and more transparent.",
    },
    {
      icon: (
        <img
          src={Icon6}
          alt="Learning Resourcers and Webinars"
          className="w-9 h-9"
        />
      ),
      title: "Learning Resources and Webinars",
      desc: "Tutorials and webinars on influencer marketing and content creation, helping both brands and creators improve their campaigns. ",
    },
  ];

  return (
      <section className="mt-[-40px] py-0 pb-20 relative">

      <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
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
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl"
              >
                <div className="text-purple-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">{item.icon}</div>
                <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500 pb-2.5">{item.desc}</p>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

      