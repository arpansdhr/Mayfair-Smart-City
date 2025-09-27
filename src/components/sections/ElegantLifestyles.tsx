"use client";

import { motion } from "framer-motion";
import { FaHome, FaMobile, FaWifi, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import HoverImageReveal from "../animations/HoverImageReveal";

const ElegantLifestyles = () => {
  const features = [
    {
      icon: FaHome,
      title: "Smart Climate Control",
      description: "Intelligent temperature management for optimal comfort",
    },
    {
      icon: FaMobile,
      title: "Mobile Integration",
      description: "Control your home from anywhere with our mobile app",
    },
    {
      icon: FaWifi,
      title: "Connected Living",
      description: "Seamless connectivity across all home devices",
    },
    {
      icon: FaLightbulb,
      title: "Smart Lighting",
      description: "Automated lighting that adapts to your lifestyle",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
              Why choose our property?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Elegant Lifestyles Blending Ease With Classic Living,
              <span className="text-blue-900"> Seamlessly.</span>
            </h2>

            {/* Left Image - Staircase with decor */}
            <div className="relative mb-8">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern staircase with elegant decor"
                width={500}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
                style={{ objectFit: "cover" }}
              />

              {/* Intelligent Living Solutions Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <FaHome className="w-4 h-4 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Intelligent Living Solutions
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transform your everyday living with an integrated home
                  automation system that puts everything control right in your
                  hands.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Main living room image with beautiful hover animation */}
            <div className="mb-8">
              <HoverImageReveal
                baseImage="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                hoverImage="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elegant living room"
                className="h-[500px]"
                // overlayColor="from-blue-600/20 to-transparent"
                animationType="grid"
                direction="vertical"
                duration={0.7}
                // stripCount={6}
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow group hover:bg-blue-50"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantLifestyles;
