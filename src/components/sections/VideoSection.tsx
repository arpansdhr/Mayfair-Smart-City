"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://onepack.casethemes.net/wp-content/uploads/2025/07/bg-s1-h2.webp"
          alt="Modern living room interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Play Button */}
        {!isPlaying && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.button
              onClick={handlePlayClick}
              className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-white rounded-full opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-white rounded-full opacity-20"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              <Play className="w-8 h-8 text-gray-800 ml-1" />
            </motion.button>
          </motion.div>
        )}

        {/* Video Embed */}
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-[90vw] max-w-4xl aspect-video mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              className="w-full h-full"
              src="https://video.wixstatic.com/video/5c5989_0f174a8c0e044f1d90ef351637048fbc/1080p/mp4/file.mp4"
              title="video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}

        {/* Text Content (only show when not playing) */}
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white"
          >
            <p className="text-lg font-medium">Watch</p>
            <p className="text-sm opacity-80 mt-1">Showreel</p>
          </motion.div>
        )}
      </div>

      {/* Decorative Elements */}
      {!isPlaying && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-white rounded-full opacity-40"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </>
      )}
    </section>
  );
};

export default VideoSection;
