import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"

export function FeatureCard({ title, description, image, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full overflow-hidden">
        <CardHeader>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardTitle className="mt-4 text-black">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}