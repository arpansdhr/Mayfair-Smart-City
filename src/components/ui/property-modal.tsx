"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaHeart, FaShare } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/src/lib/hooks';
import { setSelectedProperty } from '@/src/lib/features/properties/propertiesSlice';
import { setPropertyModalOpen } from '@/src/lib/features/ui/uiSlice';

const PropertyModal = () => {
  const dispatch = useAppDispatch();
  const { selectedProperty } = useAppSelector((state) => state.properties);
  const { propertyModalOpen } = useAppSelector((state) => state.ui);

  const closeModal = () => {
    dispatch(setSelectedProperty(null));
    dispatch(setPropertyModalOpen(false));
  };

  if (!selectedProperty) return null;

  return (
    <AnimatePresence>
      {propertyModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid md:grid-cols-2 h-full">
              {/* Image Section */}
              <motion.div className="relative h-full w-full">
                <Image
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-900 hover:bg-blue-800">
                    {selectedProperty.type}
                  </Badge>
                  {selectedProperty.featured && (
                    <Badge className="bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                      Featured
                    </Badge>
                  )}
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="p-6 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center text-gray-500 mb-4">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{selectedProperty.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-900">
                      {selectedProperty.price}
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <FaBed className="mx-auto mb-2 text-blue-900" />
                    <div className="font-semibold">{selectedProperty.beds}</div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <FaBath className="mx-auto mb-2 text-blue-900" />
                    <div className="font-semibold">{selectedProperty.baths}</div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <FaRuler className="mx-auto mb-2 text-blue-900" />
                    <div className="font-semibold">{selectedProperty.sqft}</div>
                    <div className="text-sm text-gray-500">Sq Ft</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProperty.description || "Beautiful property with modern amenities and stunning views."}
                  </p>
                </div>

                {/* Amenities */}
                {selectedProperty.amenities && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProperty.amenities.map((amenity: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <Button className="flex-1 bg-blue-900 hover:bg-blue-800">
                    Schedule Tour
                  </Button>
                  <Button variant="outline" size="icon">
                    <FaHeart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <FaShare className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PropertyModal;