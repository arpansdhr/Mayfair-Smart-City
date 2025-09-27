"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const LocationMapSection = () => {
  const locations = [
    { name: "Parking Area", distance: "1.2 km", top: "25%", left: "40%" },
    { name: "5 star hotel", distance: "1.3 km", top: "35%", left: "60%" },
    { name: "Green Park", distance: "1 km", top: "50%", left: "30%" },
    { name: "Hospital and Pharmacy", distance: "1.5 km", top: "65%", left: "45%" },
    { name: "Mayfair Smart City", distance: "", top: "50%", left: "50%", isMain: true },
    { name: "Restaurant", distance: ".5 km", top: "40%", left: "25%" },
    { name: "Shopping Mall", distance: "1 km", top: "70%", left: "65%" }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Location overview
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Strategic Location<br />
            <span className="text-blue-900">Connectivity</span>
          </motion.h2>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Map Background */}
          <Image
            src="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-gps.webp"
            alt="Location map"
            width={1200}
            height={800}
            className="object-cover p-4"
            priority
          />

          {/* Location Markers */}
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${location.isMain
                  ? "bg-[#b79b6f] text-white px-4 py-2 rounded-full shadow-lg z-20"
                  : "bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md z-10"
                }`}
              style={{
                top: location.top,
                left: location.left
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <span className={`font-medium text-sm ${location.isMain ? 'font-bold' : ''}`}>
                  {location.name}
                </span>
                {location.distance && (
                  <span className="text-xs opacity-80">({location.distance})</span>
                )}
              </div>

              {/* Marker Pointer */}
              {!location.isMain && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4">
                  <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  <div className="w-0 h-4 border-l border-dashed border-gray-400 mx-auto"></div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Connection Lines (Optional) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {locations.map((location, index) => {
              if (location.isMain) return null;
              const mainProperty = locations.find(loc => loc.isMain);
              if (!mainProperty) return null;

              return (
                <line
                  key={index}
                  x1={`${parseFloat(mainProperty.left)}%`}
                  y1={`${parseFloat(mainProperty.top)}%`}
                  x2={`${parseFloat(location.left)}%`}
                  y2={`${parseFloat(location.top)}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
              );
            })}
          </svg>

        </motion.div>

        {/* Location List (Mobile View) */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {locations.filter(loc => !loc.isMain).map((location, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">{location.name}</h4>
              <p className="text-sm text-gray-600">{location.distance}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMapSection;