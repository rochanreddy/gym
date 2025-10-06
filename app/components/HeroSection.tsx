"use client";

import React from "react";
import { motion } from "framer-motion";
import BackgroundCarousel from "@/app/components/BackgroundCarousel";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Carousel with Overlays */}
      <BackgroundCarousel />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Opening Offer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-orange-400/10 border border-orange-400/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm"
        >
          <Icon icon="solar:fire-bold" className="text-orange-400 text-sm" />
          <span data-editor-id="app/components/HeroSection.tsx:25:11" className="text-orange-400 font-medium text-xs">
            <span data-editor-id="app/components/HeroSection.tsx:26:13">LIMITED TIME OFFER - ₹899/MONTH</span>
          </span>
        </motion.div>

        {/* Main Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight"
        >
          <span data-editor-id="app/components/HeroSection.tsx:35:11">TRANSFORM</span><br />
          <span data-editor-id="app/components/HeroSection.tsx:36:11">YOUR</span> <span data-editor-id="app/components/HeroSection.tsx:36:34" className="text-orange-400">LIMITS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
        >
          <span data-editor-id="app/components/HeroSection.tsx:45:11">Premium fitness studio in Parvathapur, Medipally. Experience world-class equipment, expert trainers, and a community that pushes you beyond your limits.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-400 text-black px-7 py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-all duration-200 shadow-lg hover:shadow-orange-400/25 w-full sm:w-auto"
          >
            <span data-editor-id="app/components/HeroSection.tsx:59:13">Join Now - ₹899/month</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-black transition-all duration-200 backdrop-blur-sm w-full sm:w-auto"
          >
            <span data-editor-id="app/components/HeroSection.tsx:67:13">View Classes</span>
          </motion.button>
        </motion.div>

        
      </div>
    </div>
  );
}