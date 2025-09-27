"use client";

import { motion } from 'framer-motion';
import { FaHome, FaHandshake, FaChartLine, FaKey, FaCalculator, FaMapMarkedAlt, FaIndustry, FaLeaf, FaUsers } from 'react-icons/fa';
import { Card, CardContent } from '../ui/card';

const Services = () => {

  const services = [
    {
      icon: FaIndustry,
      title: "Smart Infrastructure & Sustainable Utilities",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      icon: FaLeaf,
      title: "Green & Wellness-focused Amenities",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      icon: FaUsers,
      title: "Vibrant Community & Leisure Spaces",
      description:
        "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    },
    {
      icon: FaHome,
      title: "Buy a Home",
      description: "Find your perfect home with our extensive property database and expert guidance through the buying process."
    },
    {
      icon: FaHandshake,
      title: "Sell Your Property",
      description: "Get the best value for your property with our proven marketing strategies and negotiation expertise."
    },
    {
      icon: FaChartLine,
      title: "Investment Advisory",
      description: "Make smart real estate investments with our market analysis and investment opportunity identification."
    },
    {
      icon: FaKey,
      title: "Property Management",
      description: "Comprehensive property management services to maximize your rental income and maintain your investment."
    },
    {
      icon: FaCalculator,
      title: "Financial Planning",
      description: "Expert mortgage advice and financial planning to help you make informed property decisions."
    },
    {
      icon: FaMapMarkedAlt,
      title: "Market Analysis",
      description: "In-depth market research and analysis to help you understand local property trends and values."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet all your property needs,
            from buying and selling to investment and management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-900 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-8 h-8 text-blue-900 group-hover:text-white transition-colors duration-300" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-200">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}          
        </motion.div>
      </div>
    </section>
  );
};

export default Services;