import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

// Reusable Hover Image Component
interface HoverImageRevealProps {
    baseImage: string;
    hoverImage: string;
    alt?: string;
    className?: string;
    animationType?: "stripes" | "circle" | "shutters" | "curtain" | "puzzle" | "grid";
    direction?: "horizontal" | "vertical" | "diagonal" | "center";
    duration?: number;
}

// Reusable Hover Image Component with multiple animation types
const HoverImageReveal = ({
    baseImage,
    hoverImage,
    alt = "Image",
    className = "",
    animationType = "stripes",
    direction = "horizontal",
    duration = 0.8
}: HoverImageRevealProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Animation configurations
    const getAnimationConfig = () => {
        switch (animationType) {
            case "stripes":
                return {
                    count: 8,
                    getClipPath: (index: number, isHovered: boolean) => {
                        const percentage = 100 - index * (100 / 8);
                        if (direction === "vertical") {
                            return isHovered
                                ? `polygon(0% ${percentage}%, 100% ${percentage}%, 100% 100%, 0% 100%)`
                                : `polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)`;
                        }
                        return isHovered
                            ? `polygon(${percentage}% 0, 0% 0, 0% 100%, ${percentage}% 100%)`
                            : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
                    }
                };

            case "circle":
                return {
                    count: 1,
                    getClipPath: (index: number, isHovered: boolean) => {
                        return isHovered
                            ? "circle(75% at 50% 50%)"
                            : "circle(0% at 50% 50%)";
                    }
                };

            case "shutters":
                return {
                    count: 5,
                    getClipPath: (index: number, isHovered: boolean) => {
                        const percentage = 100 - index * (100 / 5);
                        return isHovered
                            ? `polygon(0% 0%, ${percentage}% 0%, ${percentage}% 100%, 0% 100%)`
                            : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                    }
                };

            case "curtain":
                return {
                    count: 2,
                    getClipPath: (index: number, isHovered: boolean) => {
                        if (index === 0) {
                            return isHovered
                                ? "polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)"
                                : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                        } else {
                            return isHovered
                                ? "polygon(100% 0%, 50% 0%, 50% 100%, 100% 100%)"
                                : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
                        }
                    }
                };

            case "puzzle":
                return {
                    count: 4,
                    getClipPath: (index: number, isHovered: boolean) => {
                        const positions = [
                            "polygon(0% 0%, 50% 0%, 50% 50%, 0% 50%)", // top-left
                            "polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)", // top-right
                            "polygon(0% 50%, 50% 50%, 50% 100%, 0% 100%)", // bottom-left
                            "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" // bottom-right
                        ];
                        return isHovered ? positions[index] : "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
                    }
                };

            case "grid":
                const gridSize = 5; // 5x5 grid
                const cellWidth = 100 / gridSize;
                const cellHeight = 100 / gridSize;
                return {
                    count: gridSize * gridSize,
                    getClipPath: (index: number, isHovered: boolean) => {
                        const row = Math.floor(index / gridSize);
                        const col = index % gridSize;
                        const x1 = col * cellWidth;
                        const y1 = row * cellHeight;
                        const x2 = x1 + cellWidth;
                        const y2 = y1 + cellHeight;

                        const initialPath = `polygon(${x1}% ${y1}%, ${x2}% ${y1}%, ${x2}% ${y2}%, ${x1}% ${y2}%)`;
                        const hoveredPath = isHovered ? initialPath : `polygon(${x1}% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y1}%, ${x1}% ${y1}%)`;
                        return hoveredPath;
                    },
                };

            default:
                return {
                    count: 8,
                    getClipPath: (index: number, isHovered: boolean) => {
                        const percentage = 100 - index * (100 / 8);
                        return isHovered
                            ? `polygon(${percentage}% 0, 0% 0, 0% 100%, ${percentage}% 100%)`
                            : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
                    }
                };
        }
    };

    const { count, getClipPath } = getAnimationConfig();

    return (
        <div
            className={`relative group overflow-hidden rounded-2xl ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Base Image */}
            <div className="w-full h-full">
                <Image
                    src={baseImage}
                    alt={alt}
                    fill
                    className="object-cover rounded-2xl"
                />
            </div>

            {/* Hover Image */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: count }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                            clipPath: getClipPath(i, isHovered),
                        }}
                        transition={{
                            duration,
                            ease: "easeOut",
                            delay: i * 0.1,
                        }}
                    >
                        <Image
                            src={hoverImage}
                            alt={`${alt} hover`}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Hover Indicator */}
            <motion.div
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: isHovered ? 0 : 1,
                    scale: isHovered ? 0.8 : 1
                }}
                transition={{ duration: 0.3 }}
            >
                <p className="text-sm font-medium text-gray-800 flex items-center">
                    <span className="mr-2">Hover to explore</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        →
                    </motion.span>
                </p>
            </motion.div>
        </div>
    );
};

export default HoverImageReveal;