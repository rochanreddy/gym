"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

const footerLinks = {
  "Quick Links": [
    { name: "Classes", href: "/classes" },
    { name: "Timetable", href: "/timetable" },
    { name: "Trainers", href: "/trainers" },
    { name: "Membership", href: "/membership" },
  ],
  "Programs": [
    { name: "CrossFit", href: "/classes#crossfit" },
    { name: "Zumba", href: "/classes#zumba" },
    { name: "Yoga", href: "/classes#yoga" },
    { name: "Personal Training", href: "/classes#personal" },
  ],
  "Support": [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "mdi:instagram", href: "https://instagram.com/elitefitness.parvathapur" },
  { name: "Facebook", icon: "mdi:facebook", href: "#" },
  { name: "WhatsApp", icon: "mdi:whatsapp", href: "#" },
  { name: "YouTube", icon: "mdi:youtube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2i7znic5wl.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Icon icon="mdi:gym" className="text-orange-400 text-2xl" />
              <span data-editor-id="app/components/Footer.tsx:51:15" className="text-white font-bold text-lg">Elite Fitness</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              <span data-editor-id="app/components/Footer.tsx:55:15">Transform your fitness journey at Miyapur&apos;s premier gym. Expert trainers, modern equipment, and a supportive community await you.</span>
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon icon="solar:map-point-bold" className="text-orange-400" />
                <span data-editor-id="app/components/Footer.tsx:61:17" className="text-sm">X ROADS, Miyapur HDFC Junction, Bollaram Road, near D Mart, JP Nagar, Miyapur, Hyderabad, Telangana 500049</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon icon="solar:phone-bold" className="text-orange-400" />
                <span data-editor-id="app/components/Footer.tsx:65:17" className="text-sm">+91 9000019524</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Icon icon="solar:letter-bold" className="text-orange-400" />
                <span data-editor-id="app/components/Footer.tsx:69:17" className="text-sm">info@elitefitness.com</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-base mb-6">
                <span data-editor-id="app/components/Footer.tsx:83:17">{title}</span>
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      <span data-editor-id="app/components/Footer.tsx:92:23">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              <span data-editor-id="app/components/Footer.tsx:110:15">© 2024 Elite Fitness. All rights reserved.</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="text-xl" />
                </motion.a>
              ))}
            </div>

            {/* Terms & Privacy */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <span data-editor-id="app/components/Footer.tsx:131:17">Privacy Policy</span>
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <span data-editor-id="app/components/Footer.tsx:134:17">Terms of Service</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}