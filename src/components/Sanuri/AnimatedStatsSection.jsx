import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, BarChart } from 'lucide-react';

const AnimatedStatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-12 w-12 text-orange-400" />,
      number: "100K+",
      label: "Active Users",
      delay: 0.2
    },
    {
      icon: <Globe className="h-12 w-12 text-red-400" />,
      number: "150+",
      label: "Countries Served",
      delay: 0.4
    },
    {
      icon: <BarChart className="h-12 w-12 text-yellow-400" />,
      number: "10M+",
      label: "Posts Analyzed",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-black-600">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.delay }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-black-800 to-black-900 rounded-2xl p-8 border border-orange-900 shadow-xl hover:shadow-orange-800 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  className="mb-6 mx-auto w-fit p-4 bg-gradient-to-br from-orange-950 to-red-950 rounded-xl"
                >
                  {stat.icon}
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.4 }}
                  className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text"
                >
                  {stat.number}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.6 }}
                  className="text-gray-400 text-lg"
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;