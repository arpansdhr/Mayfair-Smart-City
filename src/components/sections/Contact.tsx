"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../ui/button';
import { User, Mail, Edit } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black text-gray-900 mb-4"
            >
              Any Inquiry
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 text-lg"
            >
              Get in touch
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Main Content */}
        <div className="grid lg:grid-cols-4 gap-16 items-start w-full">
          {/* Left Side - Contact Info */}
          <ScrollReveal direction="left" className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Catch Us Here
              </motion.h3>

              <motion.div variants={itemVariants} className="space-y-6">
                <div>
                  <p className="text-gray-900 font-medium">To apply for a job with Sphere Constuctions, please send a cover letter together with your C.V. to: info@mysite.com</p>
                </div>

                <div>
                  <p className="text-gray-900 font-medium"><strong>Get a quote:</strong> +123-456-7890</p>
                </div>

                <h4 className="text-xl font-bold text-black mb-2">
                  Head Office
                </h4>

                <div>
                  <p className="text-gray-900 font-medium"><strong>Site Address:</strong> <br />
                    Mayfair Smart City, Mouza - Raghabpur, Nepalgaunge Road,</p>
                  <p className="text-gray-600"> Kolkata - 700103 P.S. - Bishnupur, District - 24Pgs (S)</p>
                </div>
                <div>
                  <p className="text-gray-900 font-medium"><strong>Registered Office:</strong> <br />
                    JASMINE TOWER, Unit No. 602, 31 Shakespeare Sarani,</p>
                  <p className="text-gray-600"> Kolkata - 700017</p>
                </div>

                <div>
                  <p className="text-gray-900 font-medium">Monday — Friday,</p>
                  <p className="text-gray-600">9am — 7pm EST</p>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          {/* Right Side - Contact Form */}
          <ScrollReveal direction="right" className="lg:col-span-3 w-full">
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name **"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </motion.div>

                <motion.div variants={itemVariants} className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address **"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </motion.div>
              </div>

              {/* Subject and Budget Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                  >
                    <option value="">Select Subject **</option>
                    <option value="appartment">Appartment</option>
                    <option value="villa">Villa</option>
                    <option value="commercial-building">Commercial Building</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                  >
                    <option value="">$5000 - $10,000</option>
                    <option value="4000-8000">$4,000 - $8,000</option>
                    <option value="3000-6000">$3,000 - $6,000</option>
                    <option value="2000-4000">$2,000 - $4,000</option>
                    <option value="1000-2000">$1,000 - $2,000</option>
                  </select>
                </motion.div>
              </div>

              {/* Message Field */}
              <motion.div variants={itemVariants} className="relative">
                <textarea
                  name="message"
                  placeholder="Message **"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
                <Edit className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-[#B79B6F] text-white font-semibold py-6 px-8 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Get A Free Quote
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;