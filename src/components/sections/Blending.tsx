"use client";

import { motion } from "framer-motion";

const Blending = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Top Pills Section (Animated) */}
      <div className="w-full overflow-hidden mb-10">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap space-x-12"
        >
          {/* Original Pills */}
          {[
            "Quality Living",
            "Next-Gen Living",
            "Cutting-Edge Technology",
            "Security System",
          ].map((item, i) => (
            <div
              key={i}
              className="px-10 py-5 rounded-full bg-white shadow-md text-2xl font-medium text-black border"
            >
              {item}
            </div>
          ))}

          {/* Duplicate Pills for seamless loop */}
          {[
            "Quality Living",
            "Next-Gen Living",
            "Cutting-Edge Technology",
            "Security System",
          ].map((item, i) => (
            <div
              key={`dup-${i}`}
              className="px-10 py-5 rounded-full bg-white shadow-md text-2xl font-medium text-black border"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <h1 className="sm:text-4xl md:text-[8rem] font-bold text-black leading-none">
          Blending
        </h1>
        <p className="text-gray-500 mt-4 text-lg">Room overview with dope look</p>
      </div>
    </div>
  );
};

export default Blending;
