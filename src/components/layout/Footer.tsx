"use client";

import { motion } from 'framer-motion';
import {
  IconPhone,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <img
          src="https://onepack.casethemes.net/wp-content/uploads/2025/07/bg-ft-h2.webp"
          alt="Footer background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="mb-8 text-4xl flex flex-col">
              <span className="block text-white font-bold">MAYFAIR</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                SMART CITY
              </span>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-md">
              Let&apos;s Help You Find The Perfect Property Or Get Top Value For The One You Own.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconPhone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+123 456 789 00</span>
              </div>
              <div className="flex items-center gap-3">
                <IconMail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@mysite.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                Follow Us.
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandFacebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconBrandLinkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Background Image will show here */}
          <div className="lg:block hidden">
            {/* This space is for the background image */}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              {currentYear} © All rights reserved by All Digital Ideas
            </p>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              {['About Us', 'Properties', 'Services', 'Blog'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;