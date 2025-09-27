"use client";

import { useState } from 'react';
import { IconArrowNarrowRight, IconCheck } from "@tabler/icons-react";
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import Carousel from '../ui/carousel';

const HomeComfortSection = () => {
  const [selectedView, setSelectedView] = useState('Other Facilities');
  
  const viewOptions = [
    { 
      name: 'Interior View', 
      active: false,
      slides: [
        {
          title: "Modern Living Space",
          button: "Explore Interior",
          src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Elegant Kitchen Design", 
          button: "View Kitchen",
          src: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Luxury Bedroom Suite",
          button: "See Bedroom", 
          src: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    { 
      name: 'Exterior View', 
      active: false,
      slides: [
        {
          title: "Beautiful Front Exterior",
          button: "View Front",
          src: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Backyard Oasis", 
          button: "See Backyard",
          src: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Garden Area",
          button: "Explore Garden", 
          src: "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    { 
      name: 'Other Facilities', 
      active: true,
      slides: [
        {
          title: "Swimming Pool",
          button: "View Pool",
          src: "https://images.pexels.com/photos/261045/pexels-photo-261045.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Fitness Center", 
          button: "See Gym",
          src: "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          title: "Community Lounge",
          button: "Explore Lounge", 
          src: "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    }
  ];

  // Get current slides based on selected view
  const currentView = viewOptions.find(option => option.name === selectedView);
  const currentSlides = currentView?.slides || [];

  const handleViewChange = (viewName: string) => {
    setSelectedView(viewName);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p 
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Property overview
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Home—A Space Designed<br />
            For <span className="text-blue-900">Comfort</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Navigation Options with Checkboxes */}
            <div className="space-y-4 mb-8">
              {viewOptions.map((option) => (
                <motion.div
                  key={option.name}
                  className={cn(
                    "flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 border",
                    selectedView === option.name 
                      ? "border-blue-900 bg-blue-50" 
                      : "border-gray-200 hover:border-gray-300"
                  )}
                  onClick={() => handleViewChange(option.name)}
                  whileHover={{ x: 5 }}
                >
                  {/* Custom Checkbox */}
                  <div className={cn(
                    "w-5 h-5 rounded border flex items-center justify-center mr-4 flex-shrink-0",
                    selectedView === option.name 
                      ? "bg-blue-900 border-blue-900" 
                      : "border-gray-300"
                  )}>
                    {selectedView === option.name && (
                      <IconCheck className="w-4 h-4 text-white" />
                    )}
                  </div>
                  
                  <span className={cn(
                    "font-medium flex-grow",
                    selectedView === option.name ? "text-blue-900" : "text-gray-700"
                  )}>
                    {option.name}
                  </span>
                  
                  <IconArrowNarrowRight className={cn(
                    "w-5 h-5 transition-transform duration-200 flex-shrink-0",
                    selectedView === option.name ? "text-blue-900" : "text-gray-400"
                  )} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Carousel slides={currentSlides} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeComfortSection;