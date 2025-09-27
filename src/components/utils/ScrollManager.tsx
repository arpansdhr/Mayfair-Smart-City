"use client";

import { useEffect } from 'react';

const ScrollManager = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const html = document.documentElement;

    const handleScroll = () => {
      // Add scrolling class when user starts scrolling
      html.classList.add('scrolling');
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Remove scrolling class after user stops scrolling
      scrollTimeout = setTimeout(() => {
        html.classList.remove('scrolling');
      }, 1000); // 1 second after scrolling stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
};

export default ScrollManager;