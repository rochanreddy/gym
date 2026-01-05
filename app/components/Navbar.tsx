"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Timetable", href: "/timetable" },
  { name: "Trainers", href: "/trainers" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50'
        : 'bg-transparent'
        }`}
    >
      <div data-editor-id="app/components/Navbar.tsx:35:7" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-editor-id="app/components/Navbar.tsx:36:9" className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <span data-editor-id="app/components/Navbar.tsx:40:13" className="text-white font-semibold text-xl">
              <span data-editor-id="app/components/Navbar.tsx:41:15">Elite Fitness</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div data-editor-id="app/components/Navbar.tsx:45:11" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm font-medium relative group"
              >
                <span data-editor-id="app/components/Navbar.tsx:53:17">{item.name}</span>
                <span data-editor-id="app/components/Navbar.tsx:54:17" className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div data-editor-id="app/components/Navbar.tsx:59:11" className="hidden md:flex items-center">
            <motion.a
              href="https://wa.me/919000019524"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 text-black px-5 py-2 rounded-full font-medium hover:bg-orange-300 transition-colors duration-200 text-sm cursor-pointer inline-block"
            >
              <span data-editor-id="app/components/Navbar.tsx:66:15">Join Now</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon icon="material-symbols:menu" className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800/50"
          >
            <div data-editor-id="app/components/Navbar.tsx:87:13" className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 py-2 text-base"
                >
                  <span data-editor-id="app/components/Navbar.tsx:96:19">{item.name}</span>
                </Link>
              ))}
              <motion.a
                href="https://wa.me/919000019524"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-400 text-black px-6 py-3 rounded-full font-medium hover:bg-orange-300 transition-colors duration-200 mt-4 cursor-pointer inline-block text-center"
              >
                <span data-editor-id="app/components/Navbar.tsx:105:17">Join Now</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}