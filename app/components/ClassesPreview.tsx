"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const classes = [
  {
    name: "CrossFit",
    description: "High-intensity functional movements",
    icon: "solar:dumbbell-bold",
    duration: "60 min",
    difficulty: "High",
    image: "/photos/10002.jpeg"
  },
  {
    name: "Zumba",
    description: "Dance fitness with Latin music",
    icon: "mdi:dance-pole",
    duration: "45 min",
    difficulty: "Medium",
    image: "/photos/10003.jpeg"
  },
  {
    name: "Yoga",
    description: "Mindfulness and flexibility training",
    icon: "game-icons:yoga",
    duration: "75 min",
    difficulty: "Low",
    image: "/photos/10004.jpeg"
  },
  {
    name: "Cardio",
    description: "Heart-pumping cardiovascular workouts",
    icon: "mingcute:fitness-fill",
    duration: "45 min",
    difficulty: "Medium",
    image: "/photos/10005.jpeg"
  },
  {
    name: "Functional Training",
    description: "Real-world movement patterns",
    icon: "icon-park-outline:fitness",
    duration: "50 min",
    difficulty: "High",
    image: "/photos/10006.jpeg"
  },
  {
    name: "Group Classes",
    description: "Community-driven fitness sessions",
    icon: "mdi:account-group",
    duration: "60 min",
    difficulty: "Medium",
    image: "/photos/10002.jpeg"
  }
];

export default function ClassesPreview() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-aonmh7elg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span data-editor-id="app/components/ClassesPreview.tsx:64:13">FIND YOUR</span> <span data-editor-id="app/components/ClassesPreview.tsx:64:39" className="text-orange-400">PASSION</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            <span data-editor-id="app/components/ClassesPreview.tsx:67:13">Discover diverse fitness programs designed to challenge every fitness level and preference</span>
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Icon icon={classItem.icon} className="text-orange-400 text-2xl" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-orange-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      <span data-editor-id="app/components/ClassesPreview.tsx:92:23">{classItem.difficulty}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <span data-editor-id="app/components/ClassesPreview.tsx:99:21">{classItem.name}</span>
                  </h3>
                  <p className="text-gray-400 mb-4 font-light text-sm">
                    <span data-editor-id="app/components/ClassesPreview.tsx:102:21">{classItem.description}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Icon icon="solar:clock-circle-bold" className="text-orange-400" />
                      <span data-editor-id="app/components/ClassesPreview.tsx:107:23" className="text-sm">{classItem.duration}</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-300 transition-colors duration-200"
                    >
                      <span data-editor-id="app/components/ClassesPreview.tsx:114:23">Book Class</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-orange-400 text-orange-400 px-7 py-3 rounded-full font-semibold text-base hover:bg-orange-400 hover:text-black transition-all duration-200"
          >
            <span data-editor-id="app/components/ClassesPreview.tsx:135:13">View All Classes</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}