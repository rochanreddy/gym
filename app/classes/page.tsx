'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const classCategories = [
  "All",
  "Strength",
  "Flexibility",
  "Dance",
  "HIIT"
];

const allClasses = [
  {
    id: 1,
    name: "CrossFit",
    category: "Strength",
    description: "Build strength, power, and conditioning through varied functional movements",
    schedule: [
      { day: "Monday", time: "6:00 AM - 7:00 AM" },
      { day: "Wednesday", time: "6:00 AM - 7:00 AM" },
      { day: "Friday", time: "6:00 AM - 7:00 AM" }
    ],
    image: "/photos/crossfit.jpeg",
    benefits: ["Builds functional strength", "Improves cardiovascular health", "Burns calories efficiently"]
  },
  {
    id: 2,
    name: "Zumba",
    category: "Dance",
    description: "High-energy dance workout combining Latin rhythms with easy-to-follow moves",
    schedule: [
      { day: "Tuesday", time: "7:00 PM - 7:45 PM" },
      { day: "Thursday", time: "7:00 PM - 7:45 PM" },
      { day: "Saturday", time: "5:00 PM - 5:45 PM" }
    ],
    image: "/photos/zumba.jpeg",
    benefits: ["Fun cardio workout", "Improves coordination", "Stress relief"]
  },
  {
    id: 3,
    name: "Yoga",
    category: "Flexibility",
    description: "Flow-based yoga connecting breath with movement for flexibility and mindfulness",
    schedule: [
      { day: "Monday", time: "8:00 AM - 9:15 AM" },
      { day: "Wednesday", time: "8:00 AM - 9:15 AM" },
      { day: "Sunday", time: "9:00 AM - 10:15 AM" }
    ],
    image: "/photos/yoga.jpeg",
    benefits: ["Increases flexibility", "Reduces stress", "Improves balance"]
  },
  {
    id: 4,
    name: "HIIT",
    category: "HIIT",
    description: "High-intensity interval training for maximum calorie burn and fitness gains",
    schedule: [
      { day: "Tuesday", time: "6:30 AM - 7:15 AM" },
      { day: "Thursday", time: "6:30 AM - 7:15 AM" },
      { day: "Saturday", time: "8:00 AM - 8:45 AM" }
    ],
    image: "/photos/hiit.jpeg",
    benefits: ["Burns fat effectively", "Boosts metabolism", "Time-efficient workout"]
  },
  {
    id: 5,
    name: "Training",
    category: "Strength",
    description: "Real-world movement patterns to improve daily life functionality",
    schedule: [
      { day: "Wednesday", time: "7:30 PM - 8:25 PM" },
      { day: "Saturday", time: "10:00 AM - 10:55 AM" }
    ],
    image: "/photos/functional.jpeg",
    benefits: ["Improves daily movements", "Prevents injuries", "Builds practical strength"]
  }
];

export default function ClassesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedClass, setSelectedClass] = useState<typeof allClasses[0] | null>(null);

  const filteredClasses = selectedCategory === "All" 
    ? allClasses 
    : allClasses.filter(cls => cls.category === selectedCategory);

  return (
    <div data-editor-id="app/classes/page.tsx:112:5" className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-gufa1073m.jpg"
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
            <span data-editor-id="app/classes/page.tsx:130:13">OUR</span> <span data-editor-id="app/classes/page.tsx:130:29" className="text-orange-400">CLASSES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            <span data-editor-id="app/classes/page.tsx:138:13">Discover the perfect workout for your fitness journey with our diverse range of expert-led classes</span>
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {classCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-orange-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span data-editor-id="app/classes/page.tsx:158:17">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredClasses.map((classItem, index) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedClass(classItem)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={classItem.image}
                      alt={classItem.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      <span data-editor-id="app/classes/page.tsx:199:23">{classItem.name}</span>
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">
                      <span data-editor-id="app/classes/page.tsx:202:23">{classItem.description}</span>
                    </p>
                    
                  <div className="mb-4" />

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-orange-400 text-black py-2.5 rounded-full font-medium hover:bg-orange-300 transition-colors duration-200"
                    >
                      <span data-editor-id="app/classes/page.tsx:220:23">View Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Class Detail Modal */}
      <AnimatePresence>
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClass(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedClass(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <Icon icon="solar:close-circle-bold" className="text-2xl" />
                </button>

                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedClass.image}
                    alt={selectedClass.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        <span data-editor-id="app/classes/page.tsx:266:25">{selectedClass.name}</span>
                      </h2>
                      <p className="text-gray-400">
                        <span data-editor-id="app/classes/page.tsx:269:25">{selectedClass.description}</span>
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <span data-editor-id="app/classes/page.tsx:309:23">Key Benefits</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedClass.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon icon="solar:check-circle-bold" className="text-orange-400" />
                          <span className="text-gray-300">
                            <span data-editor-id="app/classes/page.tsx:316:29">{benefit}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      <span data-editor-id="app/classes/page.tsx:326:23">Weekly Schedule</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedClass.schedule.map((session, index) => (
                        <div key={index} className="bg-gray-800/50 p-4 rounded-xl">
                          <div className="text-orange-400 font-medium mb-1">
                            <span data-editor-id="app/classes/page.tsx:332:29">{session.day}</span>
                          </div>
                          <div className="text-gray-300">
                            <span data-editor-id="app/classes/page.tsx:335:29">{session.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-orange-400 text-black py-3 rounded-full font-semibold hover:bg-orange-300 transition-colors duration-200"
                    >
                      <span data-editor-id="app/classes/page.tsx:349:23">Book This Class</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 border-2 border-orange-400 text-orange-400 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-black transition-all duration-200"
                    >
                      <span data-editor-id="app/classes/page.tsx:356:23">Free Trial</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}