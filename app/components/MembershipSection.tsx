"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const membershipPlans = [
  {
    name: "Basic",
    originalPrice: 1200,
    price: 899,
    duration: "month",
    popular: true,
    badge: "OPENING OFFER",
    features: [
      "Access to gym equipment",
      "Basic cardio machines",
      "Locker facility",
      "Free parking",
      "Basic fitness consultation"
    ]
  },
  {
    name: "Premium",
    originalPrice: 2000,
    price: 1499,
    duration: "month",
    popular: false,
    badge: "MOST POPULAR",
    features: [
      "All Basic features",
      "Group classes included",
      "Personal trainer session (2/month)",
      "Nutrition consultation",
      "Steam room access",
      "Priority booking"
    ]
  },
  {
    name: "Elite",
    originalPrice: 3500,
    price: 2499,
    duration: "month",
    popular: false,
    badge: "PREMIUM",
    features: [
      "All Premium features",
      "Unlimited personal training",
      "Custom diet plans",
      "Physiotherapy sessions",
      "VIP locker room",
      "Supplement guidance",
      "24/7 gym access"
    ]
  }
];

export default function MembershipSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-qmcbj7960.jpg"
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
            <span data-editor-id="app/components/MembershipSection.tsx:61:13">CHOOSE YOUR</span> <span data-editor-id="app/components/MembershipSection.tsx:61:43" className="text-orange-400">JOURNEY</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-light">
            <span data-editor-id="app/components/MembershipSection.tsx:64:13">Flexible membership options designed to fit your fitness goals and lifestyle</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${
                plan.popular
                  ? 'scale-105 lg:scale-110 z-10'
                  : ''
              }`}
            >
              <div className={`h-full bg-gray-900/70 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular
                  ? 'border-orange-400 shadow-2xl shadow-orange-400/20'
                  : 'border-gray-800/50 hover:border-orange-400/30'
              }`}>
                {/* Badge */}
                {(plan.popular || plan.badge) && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide ${
                      plan.popular
                        ? 'bg-orange-400 text-black'
                        : 'bg-gray-800 text-orange-400 border border-orange-400/30'
                    }`}>
                      <span data-editor-id="app/components/MembershipSection.tsx:93:23">{plan.badge}</span>
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <span data-editor-id="app/components/MembershipSection.tsx:100:21">{plan.name}</span>
                  </h3>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-center space-x-2">
                    {plan.originalPrice > plan.price && (
                      <span className="text-gray-500 line-through text-lg">
                        <span data-editor-id="app/components/MembershipSection.tsx:107:25">₹{plan.originalPrice}</span>
                      </span>
                    )}
                    <span className="text-3xl font-bold text-orange-400">
                      <span data-editor-id="app/components/MembershipSection.tsx:111:23">₹{plan.price}</span>
                    </span>
                  </div>
                  <p className="text-gray-400 mt-1">
                    <span data-editor-id="app/components/MembershipSection.tsx:114:21">per {plan.duration}</span>
                  </p>
                  
                  {plan.popular && (
                    <p className="text-green-400 text-sm font-medium mt-2">
                      <span data-editor-id="app/components/MembershipSection.tsx:118:23">Save ₹{plan.originalPrice - plan.price}/month</span>
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <Icon icon="solar:check-circle-bold" className="text-orange-400 text-lg flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        <span data-editor-id="app/components/MembershipSection.tsx:134:25">{feature}</span>
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://wa.me/919000019524"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer inline-block text-center ${
                    plan.popular
                      ? 'bg-orange-400 text-black hover:bg-orange-300'
                      : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
                  }`}
                >
                  <span data-editor-id="app/components/MembershipSection.tsx:149:19">
                    {plan.popular ? 'Start Now - Special Offer' : 'Choose Plan'}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">
            <span data-editor-id="app/components/MembershipSection.tsx:165:13">* Opening offer valid for first 100 members only. Terms and conditions apply.</span>
          </p>
          <div className="flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Icon icon="solar:shield-check-bold" className="text-orange-400" />
              <span data-editor-id="app/components/MembershipSection.tsx:170:15" className="text-sm">No Joining Fee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="solar:calendar-bold" className="text-orange-400" />
              <span data-editor-id="app/components/MembershipSection.tsx:174:15" className="text-sm">Flexible Cancellation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="solar:money-bag-bold" className="text-orange-400" />
              <span data-editor-id="app/components/MembershipSection.tsx:178:15" className="text-sm">Money Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}