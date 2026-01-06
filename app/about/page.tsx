'use client';

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const values = [
  {
    icon: "solar:shield-check-bold",
    title: "Safe Training",
    description: "Your safety is our priority. We ensure proper form, technique, and equipment maintenance for injury-free workouts."
  },
  {
    icon: "solar:user-bold",
    title: "Expert Guidance",
    description: "Our certified trainers provide personalized attention and professional guidance tailored to your fitness level."
  },
  {
    icon: "solar:graph-up-bold",
    title: "Real Results",
    description: "We focus on measurable progress and sustainable results that transform your body and lifestyle."
  },
  {
    icon: "solar:heart-bold",
    title: "Supportive Community",
    description: "Join a welcoming community that motivates and supports you throughout your fitness journey."
  }
];

const features = [
  {
    icon: "solar:dumbbell-bold",
    title: "State-of-the-Art Equipment",
    description: "Premium fitness equipment from leading brands, regularly maintained and updated for optimal performance."
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Diverse Group Classes",
    description: "From high-intensity CrossFit to calming Yoga, we offer classes for every fitness preference and level."
  },
  {
    icon: "solar:medal-star-bold",
    title: "Certified Trainers",
    description: "Our team consists of experienced, certified professionals dedicated to helping you achieve your goals."
  },
  {
    icon: "solar:calendar-bold",
    title: "Flexible Schedules",
    description: "Convenient class timings and 24/7 access options to fit your busy lifestyle."
  }
];

export default function AboutPage() {
  return (
    <div data-editor-id="app/about/page.tsx:11:5" className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-qmcbj7960.jpg"
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
            <span data-editor-id="app/about/page.tsx:130:13">ABOUT</span> <span data-editor-id="app/about/page.tsx:130:29" className="text-orange-400">US</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            <span data-editor-id="app/about/page.tsx:138:13">Discover what makes Elite Fitness your perfect fitness destination</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
              <span data-editor-id="app/about/page.tsx:148:13">Welcome to Elite Fitness, where fitness meets passion!</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span data-editor-id="app/about/page.tsx:151:13">We focus on safe training, proper guidance, and real results. Whether you are a beginner or an athlete, our trainers support you at every step of your fitness journey.</span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span data-editor-id="app/about/page.tsx:154:13">Join us and experience the power of discipline, consistency, and transformation.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              <span data-editor-id="app/about/page.tsx:165:13">OUR</span> <span data-editor-id="app/about/page.tsx:165:29" className="text-orange-400">VALUES</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              <span data-editor-id="app/about/page.tsx:168:13">The principles that guide everything we do</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 text-center"
              >
                <div className="bg-orange-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={value.icon} className="text-orange-400 text-2xl" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  <span data-editor-id="app/about/page.tsx:180:19">{value.title}</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  <span data-editor-id="app/about/page.tsx:183:19">{value.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              <span data-editor-id="app/about/page.tsx:197:13">WHY CHOOSE</span> <span data-editor-id="app/about/page.tsx:197:35" className="text-orange-400">ELITE FITNESS</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              <span data-editor-id="app/about/page.tsx:200:13">What sets us apart from the rest</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-400/10 p-3 rounded-xl flex-shrink-0">
                    <Icon icon={feature.icon} className="text-orange-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      <span data-editor-id="app/about/page.tsx:216:21">{feature.title}</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <span data-editor-id="app/about/page.tsx:219:21">{feature.description}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 md:p-12">
              <Icon icon="solar:target-bold" className="text-orange-400 text-5xl mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                <span data-editor-id="app/about/page.tsx:237:15">Our Mission</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <span data-editor-id="app/about/page.tsx:240:15">To empower individuals of all fitness levels to achieve their health and wellness goals through expert guidance, state-of-the-art facilities, and a supportive community environment.</span>
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                <span data-editor-id="app/about/page.tsx:243:15">We believe that fitness is not just about physical transformation, but about building confidence, discipline, and a healthier lifestyle that extends beyond the gym walls.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              <span data-editor-id="app/about/page.tsx:255:15">Ready to Start Your Fitness Journey?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              <span data-editor-id="app/about/page.tsx:258:15">Join Elite Fitness today and become part of a community that's committed to your success</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://wa.me/919000019524"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-400 text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-colors duration-200 w-full sm:w-auto text-center"
              >
                <span data-editor-id="app/about/page.tsx:264:17">Join Now</span>
              </motion.a>
              <motion.a
                href="/membership"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-black transition-all duration-200 w-full sm:w-auto text-center"
              >
                <span data-editor-id="app/about/page.tsx:271:17">View Membership Plans</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

