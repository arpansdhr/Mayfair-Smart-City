"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  children: React.ReactNode;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Horizontal line animation (1.2 seconds)
    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
    }, 1200);

    // Phase 2: Vertical split animation (1 second)
    const timer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 2200);

    // Final: Remove splash screen
    const timer3 = setTimeout(() => {
      setShowSplash(false);
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSplash]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Top Half Panel */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-black"
              initial={{ height: "50%" }}
              animate={
                animationPhase >= 1
                  ? { height: "50%", y: "-100%" }
                  : { height: "50%" }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Bottom Half Panel */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-black"
              initial={{ height: "50%" }}
              animate={
                animationPhase >= 1
                  ? { height: "50%", y: "100%" }
                  : { height: "50%" }
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Horizontal Line Animation (only in phase 0) */}
            {animationPhase === 0 && (
              <motion.div
                className="absolute left-0 bg-white z-50"
                initial={{
                  width: "0%",
                  height: "2px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
                animate={{
                  width: "100%",
                }}
                exit={{ opacity: 0 }} // fade out when unmounts
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div>{children}</motion.div>
    </>
  );
};

export default SplashScreen;
