"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const [loaded, setLoaded] = useState(false);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, button, title } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-col items-center justify-center relative text-center text-white transition-all duration-700 ease-in-out flex-shrink-0"
      style={{
        width: '70vmin',
        height: '70vmin',
        transform: current !== index
          ? "scale(0.95) rotateX(6deg)"
          : "scale(1) rotateX(0deg)",
        transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
        opacity: current === index ? 1 : 0.6,
        zIndex: current === index ? 20 : 0,
      }}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
        style={{
          transform:
            current === index
              ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
              : "none",
        }}
      >
        <Image
          src={src}
          alt={title}
          fill
          priority
          className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${loaded ? "opacity-100" : "opacity-0"
            }`}
          onLoadingComplete={() => setLoaded(true)}
        />
        {current === index && (
          <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
        )}
      </div>

      <article
        className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out z-10 ${current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
          {title}
        </h2>
        <div className="flex justify-center">
          <button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            {button}
          </button>
        </div>
      </article>
    </li>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
        }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  return (
    <div className="relative w-[70vmin] h-[70vmin] mx-auto overflow-hidden">
      <div className="[perspective:1200px] [transform-style:preserve-3d]">
        <ul
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * 70}vmin)`,
            width: `${slides.length * 70}vmin`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </ul>
      </div>

      {/* Desktop Buttons (side) */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 sm:hidden md:flex">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>


      {/* Mobile Buttons (below image) */}
      <div className="flex md:hidden justify-center gap-4 mt-4 z-20 relative">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}