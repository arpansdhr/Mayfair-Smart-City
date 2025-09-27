"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Play } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import CountUp from "../animations/CountUp";

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Alonso D. Dowson",
      title: "House Owner",
      rating: 5,
      text: "Working with Mayfair Smart City feels like a partnership; as we continued to use their tool and found more use cases, our feature requests quickly found.",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 2,
      name: "Marcus R. Johnson",
      title: "Property Developer",
      rating: 5,
      text: "Quality design and unbeatable next-gen design team. The attention to detail and innovative solutions exceeded our expectations completely.",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 3,
      name: "Nelson M. Torres",
      title: "Real Estate Investor",
      rating: 5,
      text: "Better quality design, communication all & we love the final result. The team delivered exactly what we envisioned and more.",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      id: 4,
      name: "Aron R. Mitchell",
      title: "Homeowner",
      rating: 5,
      text: "Exceptional service and outstanding results. The team's professionalism and expertise made our project a complete success.",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  const propertyImages = [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const qualityStats = [
    { name: "Alonso D.", feedback: "Quality design" },
    { name: "Miranda", feedback: "One of the best development" },
    { name: "Nelson M.", feedback: "Unbelievable & next-gen design team" },
    { name: "Alvon B.", feedback: "Better quality design, communication ui & ux" },
  ];

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % propertyImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [propertyImages.length]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-4 tracking-wide uppercase">
              User Reviews
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Happy Users Journey &<br />
              Feedbacks Here.
            </h2>
          </div>
        </ScrollReveal>

        {/* Main Content Grid - Updated Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - User Info & Rating */}
          <div className="col-span-12 lg:col-span-3">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                {/* User Avatars */}
                <div className="flex -space-x-3">
                  {reviews.slice(0, 4).map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-3 border-white shadow-lg object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Rating */}
                <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                  <div className="text-3xl font-bold text-gray-900">4.9 / 5.0</div>
                  <p className="text-sm text-gray-500">
                    From building urban condos to peaceful...
                  </p>
                </motion.div>

                {/* Property Image with Animation */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={propertyImages[currentImage]}
                        alt="Property showcase"
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300" />
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Column - Main Review Card */}
          <div className="col-span-12 lg:col-span-5">
            <ScrollReveal direction="up">
              <div className="space-y-6">
                {/* Property Image with Video Overlay */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Modern house exterior"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{reviews[currentReview].name}</h3>
                    <p className="text-sm opacity-80">{reviews[currentReview].name}</p>
                  </div>

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  >
                    <Play className="w-5 h-5 text-black ml-1" />
                  </motion.div>
                </div>

                {/* Review Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black text-white p-8 rounded-2xl relative"
                  >
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg mb-6 leading-relaxed">
                      &quot;{reviews[currentReview].text}&quot;
                    </p>

                    {/* Author with Avatar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={reviews[currentReview].avatar}
                          alt={reviews[currentReview].name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover border border-gray-700"
                        />
                        <div>
                          <span className="font-semibold text-lg block">
                            {reviews[currentReview].name}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {reviews[currentReview].title}
                          </span>
                        </div>
                      </div>
                      <div className="text-6xl text-gray-600 opacity-30">&ldquo;</div>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Stats & Modern Architecture */}
          <div className="col-span-12 lg:col-span-4">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                {/* Quality Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-amber-100 p-6 rounded-2xl"
                >
                  <div className="space-y-4">
                    {qualityStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-medium">{stat.name}</span>
                        <span className="text-xs bg-white px-3 py-1 rounded-full text-gray-800 font-medium">
                          {stat.feedback}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Modern Architecture Image */}
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern curved architecture"
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Scrolling Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                    <motion.div
                      animate={{ x: [300, -300] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="text-white text-2xl font-bold whitespace-nowrap py-4"
                    >
                      <span className="mr-12">real estate solutionsQuality</span>
                      <span className="mr-12">real estate solutionsQuality</span>
                      <span className="mr-12">real estate solutionsQuality</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Large Percentage Display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center bg-white p-6 rounded-2xl"
                >
                  <div className="text-6xl md:text-7xl font-bold text-gray-300 leading-none mb-2">
                    <CountUp value={98.8} suffix="%" decimals={1} />
                  </div>
                  <p className="text-sm text-gray-500">Quality real estate solutions</p>
                </motion.div>


              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Scrolling Text Animation */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap text-6xl md:text-10xl font-bold text-gray-200 opacity-30"
          >
            <span className="mr-20">SolutionsOnePack Property</span>
            <span className="mr-20">SolutionsOnePack Property</span>
            <span className="mr-20">SolutionsOnePack Property</span>
            <span className="mr-20">SolutionsOnePack Property</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;