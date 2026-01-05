"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Counter from "@/app/components/Counter";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "IT Professional",
    rating: 5,
    text: "Elite Fitness has completely transformed my lifestyle. The trainers are incredibly supportive and the community is amazing. Lost 15kg in just 6 months!",
    program: "CrossFit & Nutrition"
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    rating: 5,
    text: "Best investment I've made for my health. The facilities are top-notch and the personalized approach helped me achieve my fitness goals faster than expected.",
    program: "Personal Training"
  },
  {
    name: "Anitha Reddy",
    role: "Homemaker",
    rating: 5,
    text: "The Zumba classes are so much fun! I never thought exercise could be this enjoyable. The studio has become my second home and the community my second family.",
    program: "Zumba & Group Classes"
  },
  {
    name: "Vikram Singh",
    role: "Software Engineer",
    rating: 5,
    text: "Professional trainers, clean facilities, and flexible timings. Perfect for someone with a busy schedule. The results speak for themselves!",
    program: "Functional Training"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2jwl8c1xsk.jpg"
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
            <span data-editor-id="app/components/TestimonialsSection.tsx:56:13">SUCCESS</span> <span data-editor-id="app/components/TestimonialsSection.tsx:56:32" className="text-orange-400">STORIES</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            <span data-editor-id="app/components/TestimonialsSection.tsx:59:13">Real transformations from our amazing community members</span>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-orange-400/30 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" className="text-orange-400 text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                  <span data-editor-id="app/components/TestimonialsSection.tsx:81:19">&quot;{testimonial.text}&quot;</span>
                </blockquote>

                {/* Member Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-gray-800 border-2 border-orange-400/30 flex items-center justify-center">
                    <Icon icon="solar:user-bold" className="text-gray-400 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">
                      <span data-editor-id="app/components/TestimonialsSection.tsx:94:23">{testimonial.name}</span>
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <span data-editor-id="app/components/TestimonialsSection.tsx:97:23">{testimonial.role}</span>
                    </p>
                    <p className="text-orange-400 text-xs font-medium">
                      <span data-editor-id="app/components/TestimonialsSection.tsx:100:23">{testimonial.program}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: 500, suffix: "+", label: "Happy Members" },
            { value: 50, suffix: "+", label: "Expert Trainers" },
            { value: 98, suffix: "%", label: "Success Rate" },
            { value: 2, suffix: "+", label: "Years of Excellence" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-orange-400 mb-1"
              >
                <Counter target={stat.value} suffix={stat.suffix} start={1} className="inline-block" ariaLabel={`${stat.value}${stat.suffix} ${stat.label}`} />
              </motion.div>
              <p className="text-gray-300 font-light text-sm">
                <span data-editor-id="app/components/TestimonialsSection.tsx:131:17">{stat.label}</span>
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}