"use client";

import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaBuilding, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '../ui/button';
import ScrollReveal from '../animations/ScrollReveal';
import CountUp from '../animations/CountUp';

const About = () => {
  const stats = [
    {
      icon: FaAward,
      number: 15,
      label: "Years Experience",
      color: "text-yellow-500"
    },
    {
      icon: FaUsers,
      number: 1500,
      label: "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: FaBuilding,
      number: 500,
      label: "Properties Sold",
      color: "text-green-500"
    },
    {
      icon: FaStar,
      number: 4.9,
      label: "Client Rating",
      color: "text-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Luminor Real Estate
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in the real estate industry, Luminor has established
                itself as a trusted partner for property buyers, sellers, and investors. Our commitment
                to excellence and personalized service has helped thousands of clients achieve their
                real estate goals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We combine deep market knowledge with cutting-edge technology to provide our clients
                with the best possible experience. From luxury homes to commercial investments,
                we handle every transaction with professionalism and integrity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>

          {/* Image and Stats */}
          <ScrollReveal direction="right" className="relative">
            <div>
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Real Estate Team"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover rounded-t-2xl"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl" />
              {/* Stats Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mt-8 p-4"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                        <CountUp
                          value={stat.number}
                          suffix={stat.label === "Client Rating" ? "" : "+"}
                          className="text-2xl font-bold text-gray-900"
                        />
                      </div>
                      <p className="text-gray-600 text-sm font-medium">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;