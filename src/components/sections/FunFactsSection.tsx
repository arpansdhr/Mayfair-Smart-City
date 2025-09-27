"use client";

import { motion, Variants } from "framer-motion";
import CountUp from "../animations/CountUp";

const FunFactsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    
    { value: 8700, suffix: "+", label: "Property deliver", decimal: 0 },
    { value: 2.3, suffix: "k+", label: "Clients served worldwide", decimal: 1 },
    { value: 26, suffix: "+", label: "Have awards more", decimal: 0 },
    { value: 20, suffix: "+", label: "Projects Completed", decimal: 0 },
    { value: 4.9, suffix: "", label: "Ratings out of 5.0", decimal: 1 },
  ];

  return (
    <section className="relative py-8 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-base md:text-lg font-medium text-gray-700">
            Some more fun facts about company
          </h2>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 text-center border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col items-center justify-center py-8"
            >
              <div className="text-4xl md:text-5xl font-bold text-gray-900">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimal} />
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <hr className="mt-16"/>
      </div>
    </section>
  );
};

export default FunFactsSection;
