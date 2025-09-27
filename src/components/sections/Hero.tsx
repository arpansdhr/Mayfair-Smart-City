"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Home, Bed, Car, Play, ArrowDown, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import WaterDropButton from '../animations/WaterDropButton';
import CountUp from '../animations/CountUp';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: 2005, suffix: "", label: "Year Established", icon: <Calendar className="w-4 h-4" /> },
    { value: 3665, suffix: " sft", label: "Property Size", icon: <Home className="w-4 h-4" /> },
    { value: 8, suffix: "+", label: "Beds", icon: <Bed className="w-4 h-4" /> },
    { value: 2, suffix: "+", label: "Car Basement", icon: <Car className="w-4 h-4" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Enhanced Background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="https://static.wixstatic.com/media/5c5989_7b66a8590b4c47d3b92a77619f81550b~mv2.png/v1/fill/w_1271,h_430,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5c5989_7b66a8590b4c47d3b92a77619f81550b~mv2.png"
          alt="Mayfair Smart City"
          fill
          className="max-md:object-cover"
          priority
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20" />
      </motion.div>

      {/* Floating Elements */}
      {dimensions.width > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                scale: 0,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main Hero Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center flex-grow text-center text-white px-4 pt-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="uppercase tracking-widest text-xs md:text-sm font-medium">
              Leaders in Quality Construction
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-8 max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Experience luxury living with modern infrastructure and smart technology 
            in the heart of the city&apos;s most prestigious location.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mb-12">
          <WaterDropButton 
            hoverColor="white" 
            className="px-6 py-3 rounded-full font-semibold text-base shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 border border-white/20"
          >
            {/* <Play className="w-4 h-4" /> */}
            <span>Schedule A Visit</span>
          </WaterDropButton>
          <WaterDropButton 
            hoverColor="black" 
            className="px-6 py-3 rounded-full font-semibold text-base shadow-xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-400/30 flex items-center space-x-2"
          >
            {/* <Phone className="w-4 h-4" /> */}
            <span>Call Us Now</span>
          </WaterDropButton>
        </motion.div>
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs uppercase tracking-wider text-gray-300">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5 text-white/70" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Stats Section */}
      <motion.div 
        className="relative z-20 px-4 sm:px-6 pb-8"
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="group relative bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ y: 50, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
                whileHover={{ 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.98)"
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-0.5">
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-end mb-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value with CountUp */}
                  <div className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>
                  
                  {/* Label */}
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;