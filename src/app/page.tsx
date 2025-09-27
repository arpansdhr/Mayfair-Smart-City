"use client";

import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import Contact from "../components/sections/Contact";
import HomeComfortSection from "../components/sections/HomeComfortSection";
import Hero from "../components/sections/Hero";
import ElegantLifestyles from "../components/sections/ElegantLifestyles";
import Testimonials from "../components/sections/Testimonials";
import PropertyModal from "../components/ui/property-modal";
import FloorPlanningSection from "../components/sections/FloorPlanningSection";
import LocationMapSection from "../components/sections/LocationMapSection";
import NewsInsights from "../components/sections/NewsInsights";
import VideoSection from "../components/sections/VideoSection";
import FunFactsSection from "../components/sections/FunFactsSection";
import Blending from "../components/sections/Blending";
import BlendingSectionImages from "../components/sections/BlendingSectionImages";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ElegantLifestyles />
      <Blending />
      <BlendingSectionImages />
      <HomeComfortSection />
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>
      <FloorPlanningSection />
      <VideoSection />
      <LocationMapSection />
      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
      <FunFactsSection />
      <Testimonials />
      <NewsInsights />
      <Footer />
      <PropertyModal />
    </main>
  );
}
