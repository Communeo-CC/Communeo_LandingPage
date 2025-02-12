import  Button  from "../Kaveesha/Button"
import { motion } from "framer-motion"
import { BarChart, Activity, TrendingUp } from 'lucide-react'

export function AnalyticsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-black">
              Master Your Campaigns with Real-Time Insights
            </h2>
            <p className="mb-8 text-gray-600">
              Effortlessly execute and monitor your marketing campaigns. Gain valuable insights with real-time analytics to optimize performance.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Real-time monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Advanced analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Performance tracking</span>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Start Analyzing
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(327)-3BfPLxZHVAz8D2Eb6LRimVouwJhxhc.png"
                alt="Analytics Dashboard"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
