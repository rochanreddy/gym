'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div data-editor-id="app/contact/page.tsx:28:5" className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2gdv8vlsh8.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            <span data-editor-id="app/contact/page.tsx:46:13">GET IN</span> <span data-editor-id="app/contact/page.tsx:46:31" className="text-orange-400">TOUCH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            <span data-editor-id="app/contact/page.tsx:54:13">Ready to transform your fitness journey? Reach out to us and let&apos;s get started!</span>
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                <span data-editor-id="app/contact/page.tsx:71:17">Visit Our Studio</span>
              </h2>

              {/* Location */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400/10 p-3 rounded-full">
                    <Icon icon="solar:map-point-bold" className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      <span data-editor-id="app/contact/page.tsx:82:23">Our Location</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      <span data-editor-id="app/contact/page.tsx:85:23">X ROADS, Miyapur HDFC Junction,<br />
                        Bollaram Road, near D Mart,<br />
                        JP Nagar, Miyapur, Hyderabad, Telangana 500049</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Phone */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon icon="solar:phone-bold" className="text-orange-400 text-lg" />
                    <h3 className="text-base font-semibold text-white">
                      <span data-editor-id="app/contact/page.tsx:99:23">Call Us</span>
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    <span data-editor-id="app/contact/page.tsx:102:21">+91 9876543210</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    <span data-editor-id="app/contact/page.tsx:105:21">Mon-Sun: 6AM - 10PM</span>
                  </p>
                </div>

                {/* Email */}
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon icon="solar:letter-bold" className="text-orange-400 text-lg" />
                    <h3 className="text-base font-semibold text-white">
                      <span data-editor-id="app/contact/page.tsx:114:23">Email Us</span>
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    <span data-editor-id="app/contact/page.tsx:117:21">info@elitefitness.com</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    <span data-editor-id="app/contact/page.tsx:120:21">We reply within 24 hours</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-3">
                  <span data-editor-id="app/contact/page.tsx:127:19">Follow Us</span>
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: "Instagram", icon: "mdi:instagram", href: "https://instagram.com/elitefitness.parvathapur" },
                    { name: "Facebook", icon: "mdi:facebook", href: "#" },
                    { name: "WhatsApp", icon: "mdi:whatsapp", href: "#" },
                    { name: "YouTube", icon: "mdi:youtube", href: "#" }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800/50 p-3 rounded-full text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-200"
                    >
                      <Icon icon={social.icon} className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                <span data-editor-id="app/contact/page.tsx:154:17">Send us a Message</span>
              </h2>

              <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <span data-editor-id="app/contact/page.tsx:162:23">Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <span data-editor-id="app/contact/page.tsx:175:23">Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      <span data-editor-id="app/contact/page.tsx:191:23">Phone</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      <span data-editor-id="app/contact/page.tsx:203:23">Subject *</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="classes">Classes Information</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="support">General Support</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <span data-editor-id="app/contact/page.tsx:234:21">Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors resize-none"
                    placeholder="Tell us about your fitness goals or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-400 text-black py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-colors duration-200"
                >
                  <span data-editor-id="app/contact/page.tsx:253:19">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              <span data-editor-id="app/contact/page.tsx:271:15">Find Us on the Map</span>
            </h2>
            <p className="text-gray-300">
              <span data-editor-id="app/contact/page.tsx:274:15">Located in Miyapur, Hyderabad near D Mart</span>
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Icon icon="solar:map-point-bold" className="text-orange-400 text-5xl" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              <span data-editor-id="app/contact/page.tsx:290:15">Interactive Map Coming Soon</span>
            </h3>
            <p className="text-gray-400 mb-6">
              <span data-editor-id="app/contact/page.tsx:293:15">For now, you can find us at X ROADS, Miyapur HDFC Junction, Bollaram Road, near D Mart, JP Nagar, Miyapur</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-400 text-black px-6 py-3 rounded-full font-medium hover:bg-orange-300 transition-colors duration-200"
            >
              <span data-editor-id="app/contact/page.tsx:300:15">Get Directions</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}