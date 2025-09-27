"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  decimals?: number; // ✅ add decimals prop
}

const CountUp = ({
  value,
  duration = 2,
  suffix = "",
  className = "",
  decimals = 0, // ✅ default no decimals
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
  }, [springValue, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {Number(0).toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
