import  Button  from "./Button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(325)-7v9EcY5gVB99avOsBNotlmoJQcSeih.png"
          alt="Hot air balloon"
          className="h-full w-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-5xl font-bold text-black md:text-6xl"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl text-lg text-black"
        >
          Unlock the potential of your business with our tailored digital marketing solutions. Together, we can transform your online presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4"
        >
          <Button variant="default" className="bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-black/10">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}