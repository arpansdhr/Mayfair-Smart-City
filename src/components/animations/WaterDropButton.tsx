"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { motion, useAnimate, stagger, useReducedMotion } from "framer-motion";

// Helper to generate deterministic random values based on a seed
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

type WaterDropProps = {
  color: string;
  index: number;
  totalDrops: number;
};

const WaterDrop = ({ color, index, totalDrops }: WaterDropProps) => {
  // Use index-based deterministic positioning
  const position = seededRandom(index * 0.618); // Golden ratio for better distribution
  const size = seededRandom(index * 0.382); // Another constant for variety
  
  const top = `${position * 100}%`;
  const left = `${seededRandom(index * 0.786) * 100}%`;
  const width = `${20 + size * 30}px`; // 20-50px range
  const height = `${20 + seededRandom(index * 0.923) * 30}px`; // 20-50px range

  return (
    <motion.div
      className="water-drop absolute rounded-full opacity-40"
      style={{
        backgroundColor: color,
        top,
        left,
        width,
        height,
      }}
      initial={{ scale: 0, opacity: 0 }}
    />
  );
};

type WaterDropButtonProps = {
  children: ReactNode;
  hoverColor?: "black" | "white";
  className?: string;
};

const WaterDropButton = ({
  children,
  hoverColor = "white",
  className = "",
}: WaterDropButtonProps) => {
  const [scope, animate] = useAnimate();
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  // Wait for component to mount to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const drops = Array.from({ length: 25 });

  // Colors
  const dropColor = hoverColor === "black" ? "#000000" : "#ffffff";
  const textHoverColor = hoverColor === "black" ? "#ffffff" : "#000000";
  const defaultBg = hoverColor === "black" ? "bg-white" : "bg-black";
  const defaultText = hoverColor === "black" ? "#000000" : "#ffffff";
  const borderColor = hoverColor === "black" ? "border-white" : "border-black";

  const onHover = () => {
    if (shouldReduceMotion || !isMounted) return;

    animate(
      ".water-drop",
      { scale: 1.2, opacity: 1 },
      {
        duration: 0.45,
        delay: stagger(0.015),
        ease: "easeOut",
      }
    );

    animate(".overlay", { opacity: 1 }, { duration: 0.3, delay: 0.2 });
    animate(".text", { color: textHoverColor }, { duration: 0.3 });
  };

  const onLeave = () => {
    if (shouldReduceMotion || !isMounted) return;

    animate(".overlay", { opacity: 0 }, { duration: 0.2 });

    animate(
      ".water-drop",
      { scale: 0, opacity: 0 },
      {
        duration: 0.25,
        delay: stagger(0.01, { from: "last" }),
        ease: "easeIn",
      }
    );

    animate(".text", { color: defaultText }, { duration: 0.25 });
  };

  // Don't render water drops during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div
        className={`relative flex items-center justify-center cursor-pointer overflow-hidden border ${defaultBg} ${borderColor} ${className}`}
      >
        <span className="text relative z-30 font-semibold" style={{ color: defaultText }}>
          {children}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      ref={scope}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative flex items-center justify-center cursor-pointer overflow-hidden border ${defaultBg} ${borderColor} ${className}`}
    >
      {/* Text */}
      <motion.span
        className="text relative z-30 font-semibold"
        initial={{ color: defaultText }}
      >
        {children}
      </motion.span>

      {/* Overlay */}
      <motion.div
        className="overlay absolute inset-0 z-20"
        style={{ backgroundColor: dropColor }}
        initial={{ opacity: 0 }}
      />

      {/* Water drops - only rendered on client */}
      <div className="absolute inset-0 z-10">
        {drops.map((_, i) => (
          <WaterDrop key={i} color={dropColor} index={i} totalDrops={drops.length} />
        ))}
      </div>
    </motion.div>
  );
};

export default WaterDropButton;