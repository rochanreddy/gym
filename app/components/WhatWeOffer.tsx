"use client";

import React from "react";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "State-of-the-Art Equipment",
    description: "At Elite Fitness, we believe in providing the best tools for your fitness journey. Our facility features premium cardio machines, advanced strength training equipment, and cutting-edge functional training gear. Every piece of equipment is regularly maintained and updated to ensure safety and optimal performance for all our members.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    alignLeft: true
  },
  {
    title: "Expert Personal Training",
    description: "Our certified personal trainers are dedicated to helping you achieve your fitness goals. With years of experience and expertise in various training methods, they create personalized workout plans tailored to your needs, whether you're a beginner or an advanced athlete. Get one-on-one guidance, motivation, and support every step of the way.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
    alignLeft: false
  },
  {
    title: "Diverse Group Classes",
    description: "Join our vibrant community through our wide range of group fitness classes. From high-intensity CrossFit sessions to calming yoga flows, energetic Zumba dances to challenging HIIT workouts, we offer classes for every fitness level and interest. Experience the motivation and camaraderie that comes from working out together.",
    image: "https://images.unsplash.com/photo-1587382667677-aa1304be4776?w=800&q=80",
    alignLeft: true
  },
  {
    title: "Modern Facilities & Amenities",
    description: "Enjoy a premium fitness experience with our modern facilities including spacious locker rooms, steam rooms, comfortable lounges, and complimentary parking. Our gym maintains the highest standards of cleanliness and hygiene, ensuring a safe and welcoming environment for all members. Every detail is designed with your comfort in mind.",
    image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
    alignLeft: false
  }
];

export default function WhatWeOffer() {
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
            <span data-editor-id="app/components/WhatWeOffer.tsx:55:13">WHAT OUR</span> <span data-editor-id="app/components/WhatWeOffer.tsx:55:29" className="text-orange-400">GYM OFFERS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            <span data-editor-id="app/components/WhatWeOffer.tsx:58:13">Discover the premium features and facilities that make Elite Fitness your perfect fitness destination</span>
          </p>
        </motion.div>

        {/* Offerings List */}
        <div className="space-y-24">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                offering.alignLeft ? '' : 'lg:grid-flow-dense'
              }`}
            >
              {/* Text Content */}
              <div className={offering.alignLeft ? '' : 'lg:col-start-2'}>
                <motion.h3
                  initial={{ opacity: 0, x: offering.alignLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6"
                >
                  <span data-editor-id="app/components/WhatWeOffer.tsx:84:23">{offering.title}</span>
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: offering.alignLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-gray-300 leading-relaxed font-light"
                >
                  <span data-editor-id="app/components/WhatWeOffer.tsx:93:23">{offering.description}</span>
                </motion.p>
              </div>

              {/* Image */}
              <div className={offering.alignLeft ? '' : 'lg:col-start-1 lg:row-start-1'}>
                <motion.div
                  initial={{ opacity: 0, x: offering.alignLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={offering.image}
                      alt={offering.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

