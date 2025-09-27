"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconDownload, IconCalendar } from "@tabler/icons-react";
import { cn } from '@/lib/utils';
import WaterDropButton from '../animations/WaterDropButton';

const FloorPlanningSection = () => {
  const [activeFloorPlan, setActiveFloorPlan] = useState('Appartment');

  const floorPlanOptions = [
    'Appartment',
    'Simplex',
    'Duplex',
    'Double Height',
    'Studio',
    'Penthouse'
  ];

  const floorPlanDetails = {
    'Appartment': {
      description: 'The home office is a zone for focus and productivity—a personal workspace equipped with a desk, chair, and often shelves or tech essentials. It\'s where ideas form, goals are pursued, and quiet concentration thrives.',
      features: [
        { label: 'Apartments', value: '4' },
        { label: 'Address', value: 'I/A, Booston Tower, NYC' },
        { label: 'Architecture', value: 'Ronald Dowson' },
        { label: 'Available', value: 'Kitchen, Balcony, Dining, Bedroom, Storage' },
        { label: 'Size', value: '2200 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    'Simplex': {
      description: 'A spacious single-level layout perfect for modern living with open concept design and efficient use of space.',
      features: [
        { label: 'Apartments', value: '3' },
        { label: 'Address', value: 'II/B, Skyline Plaza, NYC' },
        { label: 'Architecture', value: 'Sarah Johnson' },
        { label: 'Available', value: 'Kitchen, Living Room, Bedroom, Bathroom' },
        { label: 'Size', value: '1800 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    'Duplex': {
      description: 'Two-level living space with separate areas for entertainment and private quarters, offering privacy and spaciousness.',
      features: [
        { label: 'Apartments', value: '2' },
        { label: 'Address', value: 'III/C, Horizon Towers, NYC' },
        { label: 'Architecture', value: 'Michael Chen' },
        { label: 'Available', value: 'Kitchen, Living Room, 2 Bedrooms, 2 Bathrooms' },
        { label: 'Size', value: '2400 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    'Double Height': {
      description: 'Dramatic ceiling heights creating a grand, airy atmosphere with abundant natural light and spacious feel.',
      features: [
        { label: 'Apartments', value: '1' },
        { label: 'Address', value: 'IV/D, Summit Residence, NYC' },
        { label: 'Architecture', value: 'Emily Rodriguez' },
        { label: 'Available', value: 'Open Kitchen, Great Room, Mezzanine' },
        { label: 'Size', value: '2000 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    'Studio': {
      description: 'Compact and efficient open-plan living ideal for singles or couples, maximizing functionality in minimal space.',
      features: [
        { label: 'Apartments', value: '6' },
        { label: 'Address', value: 'V/E, Urban Lofts, NYC' },
        { label: 'Architecture', value: 'David Kim' },
        { label: 'Available', value: 'Combined Living/Sleeping, Kitchenette, Bathroom' },
        { label: 'Size', value: '600 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    'Penthouse': {
      description: 'Luxurious top-floor residence with premium finishes, panoramic views, and exclusive amenities.',
      features: [
        { label: 'Apartments', value: '1' },
        { label: 'Address', value: 'Penthouse, Skyline Tower, NYC' },
        { label: 'Architecture', value: 'James Wilson' },
        { label: 'Available', value: 'Gourmet Kitchen, Terrace, Home Office, Spa Bathroom' },
        { label: 'Size', value: '3500 Sqf.' }
      ],
      image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  };

  const currentDetails = floorPlanDetails[activeFloorPlan as keyof typeof floorPlanDetails];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm uppercase tracking-wider text-gray-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Floor planning
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet With Our Happy<br />
            <span className="text-blue-900">Avengers.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Floor Plan Options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {floorPlanOptions.map((option) => (
              <motion.div
                key={option}
                className={cn(
                  "p-4 cursor-pointer transition-all duration-300 border-l-4",
                  activeFloorPlan === option
                    ? "border-blue-900 bg-blue-50"
                    : "border-transparent hover:bg-gray-100"
                )}
                onClick={() => setActiveFloorPlan(option)}
                whileHover={{ x: 5 }}
              >
                <span className={cn(
                  "font-medium",
                  activeFloorPlan === option ? "text-blue-900" : "text-gray-700"
                )}>
                  {option} {activeFloorPlan !== option && "→"}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Column - Floor Plan Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <motion.img
                key={activeFloorPlan}
                src={currentDetails.image}
                alt={`${activeFloorPlan} floor plan`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Floor Plan Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeFloorPlan}</h3>
              <p className="text-gray-600 leading-relaxed">
                {currentDetails.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {currentDetails.features.map((feature, index) => (
                <div key={index} className="flex justify-between border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{feature.label}:</span>
                  <span className="text-gray-900 font-semibold">{feature.value}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4 w-full">
              {/* <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-md font-medium hover:bg-blue-800 transition-colors">
                <IconCalendar className="w-5 h-5" />
                Book A Visit
              </button> */}
              <WaterDropButton hoverColor="white" className="px-2 py-2 rounded-md font-semibold w-1/2">
                Book A Visit
              </WaterDropButton>
              <WaterDropButton hoverColor="black" className="px-2 py-2 rounded-md font-semibold w-1/2 shadow">
                Download Floor Plan
              </WaterDropButton>
              {/* <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition-colors">
                <IconDownload className="w-5 h-5" />
               
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanningSection;