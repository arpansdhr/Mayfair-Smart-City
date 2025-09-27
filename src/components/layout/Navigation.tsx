"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../../public/Mayfair Smart city.avif";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import WaterDropButton from "../animations/WaterDropButton";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  const navItems: { name: string; href: string }[] = [];

  // Detect scroll direction + background change
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/Show navbar on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Change background when scrolled
      setIsScrolled(currentScrollY > 10);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 transition-all duration-500"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }} // hide/show with slide effect
      transition={{ duration: 0.4 }}
      style={{
        background: isScrolled
          ? "rgba(0, 0, 0, 0.8)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={logo}
          alt="Mayfair Smart City Logo"
          width={140}
          height={60}
          className="h-12 w-auto"
          priority
        />
        <div>
          <span className="block text-white font-bold">MAYFAIR</span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            SMART CITY
          </span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 z-60 text-gray-300 hover:text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-medium text-white">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:text-yellow-400 transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Contact - Desktop Only */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <span className="hidden lg:block text-sm text-gray-300">
          info@mysite.com
        </span>
        <WaterDropButton
          hoverColor="black"
          className="px-4 py-2 md:px-5 md:py-2 font-semibold rounded-md text-sm"
        >
          <a href="#contact">Get In Touch</a>
        </WaterDropButton>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 top-20 bg-black/95 backdrop-blur-md md:hidden p-6 z-50"
          style={{
            height: "calc(100vh - 5rem)",
            overflowY: "auto",
          }}
        >
          <div className="space-y-6 pt-4">
            <div className="pt-4 border-t border-gray-700">
              <span className="block text-sm text-gray-300 mb-4">
                info@mysite.com
              </span>
              <Button className="w-full bg-white text-black hover:bg-gray-200">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
