import React from 'react'
import { FeatureCard } from "./FeatureCard"

// ... rest of the component code

export function FeaturesSection() {
  const features = [
    {
      title: "Enhance Your Reach with Growth Tools",
      description: "Utilize our growth tools to boost your rankings and showcase your portfolio.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(328)-0MxISPWGMeWoJAXcoIeYeT9gZlx89C.png",
    },
    {
      title: "Tailored Solutions for Every Content Creator",
      description: "Our features are designed to meet the unique needs of influencers and marketers.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(326)-dSMrt1MEMJT2sigcYsSzq3hb0K0c2d.png",
    },
    {
      title: "Join Us and Transform Your Strategy",
      description: "Experience the difference with our innovative tools and support.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(327)-3BfPLxZHVAz8D2Eb6LRimVouwJhxhc.png",
    },
  ]

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-black">
          Unlock Your Potential with Our Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
