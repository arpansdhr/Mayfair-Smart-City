"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Home, Bath, Palette } from "lucide-react";

const BlendingSectionImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isInView = useInView(containerRef, {
    margin: "-10% 0px -10% 0px",
    amount: 0.3,
  });

  // Interior design images array with property details
  const images = [
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Dining Room",
      description:
        "The dining room is where meals become moments—crafted for connection, sharing, and memorable conversations.",
      details: [
        { icon: Home, value: "250 Mtr.", label: "Area" },
        { icon: Bath, value: "Bath", label: "Bathroom" },
        { icon: Palette, value: "Brown", label: "Theme" },
      ],
    },
    {
      url: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Living Space",
      description:
        "Elegant comfort meets modern design in spaces built for relaxation and entertainment with sophisticated styling.",
      details: [
        { icon: Home, value: "320 Mtr.", label: "Area" },
        { icon: Bath, value: "2 Bath", label: "Bathroom" },
        { icon: Palette, value: "Beige", label: "Theme" },
      ],
    },
    {
      url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Kitchen",
      description:
        "The heart of the home where culinary creativity meets sophisticated functionality and modern convenience.",
      details: [
        { icon: Home, value: "180 Mtr.", label: "Area" },
        { icon: Bath, value: "Bath", label: "Bathroom" },
        { icon: Palette, value: "White", label: "Theme" },
      ],
    },
    {
      url: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Bedroom",
      description:
        "Personal sanctuaries designed for rest, reflection, and peaceful moments with luxurious comfort and style.",
      details: [
        { icon: Home, value: "200 Mtr.", label: "Area" },
        { icon: Bath, value: "En-suite", label: "Bathroom" },
        { icon: Palette, value: "Neutral", label: "Theme" },
      ],
    },
    {
      url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Bathroom",
      description:
        "Spa-like retreats that transform daily routines into luxurious experiences with premium fixtures and finishes.",
      details: [
        { icon: Home, value: "45 Mtr.", label: "Area" },
        { icon: Bath, value: "Luxury", label: "Bathroom" },
        { icon: Palette, value: "Marble", label: "Theme" },
      ],
    },
  ];

  // Handle scroll locking with smooth transition
  useEffect(() => {
    if (isInView && !isLocked && !isTransitioning) {
      setIsLocked(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.scrollBehavior = "smooth";
    }

    return () => {
      if (!isInView && isLocked) {
        document.body.style.overflow = "auto";
        document.documentElement.style.scrollBehavior = "smooth";
      }
    };
  }, [isInView, isLocked, isTransitioning]);

  // Smooth scroll continuation after completing all images (DOWN)
  const handleSmoothContinueDown = () => {
    setIsTransitioning(true);
    setIsLocked(false);

    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.overflow = "auto";

    setTimeout(() => {
      const nextSection = containerRef.current?.nextElementSibling as HTMLElement;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
      }

      setTimeout(() => setIsTransitioning(false), 800);
    }, 100);
  };

  // Smooth scroll continuation when going back up (UP)
  const handleSmoothContinueUp = () => {
    setIsTransitioning(true);
    setIsLocked(false);

    document.body.style.overflow = "auto";
    document.documentElement.style.scrollBehavior = "smooth";

    setTimeout(() => {
      const prevSection = containerRef.current?.previousElementSibling as HTMLElement;
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
      }

      setTimeout(() => setIsTransitioning(false), 1000);
    }, 150);
  };

  // Handle wheel events
  useEffect(() => {
    if (!isLocked || isTransitioning) return;

    let scrollTimeout: NodeJS.Timeout;
    let accumulatedDelta = 0;
    const SCROLL_THRESHOLD = 80;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      accumulatedDelta += e.deltaY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 150);

      if (Math.abs(accumulatedDelta) > SCROLL_THRESHOLD) {
        if (accumulatedDelta > 0 && currentImageIndex < images.length - 1) {
          setCurrentImageIndex((prev) => Math.min(prev + 1, images.length - 1));
          accumulatedDelta = 0;
        } else if (accumulatedDelta < 0 && currentImageIndex > 0) {
          setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
          accumulatedDelta = 0;
        } else if (currentImageIndex === images.length - 1 && accumulatedDelta > SCROLL_THRESHOLD) {
          handleSmoothContinueDown();
          accumulatedDelta = 0;
        } else if (currentImageIndex === 0 && accumulatedDelta < -SCROLL_THRESHOLD) {
          handleSmoothContinueUp();
          accumulatedDelta = 0;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked, currentImageIndex, images.length, isTransitioning]);

  // Handle touch events
  useEffect(() => {
    if (!isLocked || isTransitioning) return;

    let startY = 0;
    let currentY = 0;
    let startTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      currentY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const deltaY = startY - currentY;
      const deltaTime = Date.now() - startTime;
      const TOUCH_THRESHOLD = 50;
      const velocity = Math.abs(deltaY) / deltaTime;

      if (Math.abs(deltaY) > TOUCH_THRESHOLD || velocity > 0.5) {
        if (deltaY > 0 && currentImageIndex < images.length - 1) {
          setCurrentImageIndex((prev) => Math.min(prev + 1, images.length - 1));
        } else if (deltaY < 0 && currentImageIndex > 0) {
          setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
        } else if (currentImageIndex === images.length - 1 && deltaY > TOUCH_THRESHOLD) {
          handleSmoothContinueDown();
        } else if (currentImageIndex === 0 && deltaY < -TOUCH_THRESHOLD) {
          handleSmoothContinueUp();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isLocked, currentImageIndex, images.length, isTransitioning]);

  const currentImage = images[currentImageIndex];

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row h-full w-full">
        {/* --- Left Content Panel --- */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-between p-6 md:p-16 order-2 md:order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentImageIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto text-center md:text-left md:mx-0"
            >
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentImage.title}
              </motion.h2>

              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {currentImage.description}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentImage.details.map((detail, index) => {
                  const IconComponent = detail.icon;
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4 text-gray-700" />
                      <span className="text-gray-900 font-medium text-sm">
                        {detail.value}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {detail.label}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex space-x-2 mb-4 justify-center md:justify-start">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <p className="text-xs text-gray-500 tracking-wide text-center md:text-left">
              {isLocked && !isTransitioning
                ? "Scroll to explore spaces"
                : "Continue scrolling"}
            </p>
          </motion.div>
        </div>

        {/* --- Right Image Panel --- */}
        <div className="w-full md:w-1/2 relative overflow-hidden h-1/2 md:h-full order-1 md:order-2 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
                rotateX: { duration: 1.0 },
              }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${currentImage.url})` }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Counter */}
          <motion.div
            className="absolute top-4 md:top-8 right-4 md:right-8 text-white/90 text-sm font-light bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="text-lg font-bold">
              {String(currentImageIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2">/</span>
            <span>{String(images.length).padStart(2, "0")}</span>
          </motion.div>

          {/* Hints */}
          {currentImageIndex === 0 && (
            <motion.div
              className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-white/70 text-sm bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl mb-1 text-center"
              >
                ↕
              </motion.div>
              <p className="text-center whitespace-nowrap">
                <span className="block md:hidden">Swipe to blend</span>
                <span className="hidden md:block">Scroll to blend</span>
              </p>
            </motion.div>
          )}

          {currentImageIndex === images.length - 1 && (
            <motion.div
              className="absolute bottom-4 md:bottom-8 right-4 md:right-8 text-white/70 text-sm bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl mb-1 text-center"
              >
                ↓
              </motion.div>
              <p className="text-center whitespace-nowrap">
                <span className="block md:hidden">Swipe to continue</span>
                <span className="hidden md:block">Scroll to continue</span>
              </p>
            </motion.div>
          )}

          {currentImageIndex === 0 && (
            <motion.div
              className="absolute top-4 md:top-8 left-4 md:left-8 text-white/70 text-sm bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xl mb-1 text-center"
              >
                ↑
              </motion.div>
              <p className="text-center whitespace-nowrap">
                <span className="block md:hidden">Swipe up to go back</span>
                <span className="hidden md:block">Scroll up to go back</span>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlendingSectionImages;
