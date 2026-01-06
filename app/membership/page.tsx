'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const membershipPlans = [
  {
    id: "monthly",
    name: "Monthly",
    originalPrice: 2500,
    price: 2500,
    duration: "1 month",
    discount: 0,
    popular: false,
    features: [
      "Access to gym equipment",
      "Basic cardio machines",
      "Locker facility",
      "Free parking",
      "Basic fitness consultation"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly",
    originalPrice: 7500,
    price: 6000, // 7500 - 20%
    duration: "3 months",
    discount: 20,
    popular: false,
    features: [
      "All Monthly benefits",
      "Access to selected group classes",
      "Extended fitness consultation",
      "Priority support at front desk"
    ]
  },
  {
    id: "sixmonths",
    name: "6 Months",
    originalPrice: 15000,
    price: 10500, // 15000 - 30%
    duration: "6 months",
    discount: 30,
    popular: false,
    features: [
      "All Quarterly benefits",
      "Unlimited group classes",
      "2 personal trainer sessions/month",
      "Basic nutrition consultation",
      "Steam room access"
    ]
  },
  {
    id: "annual",
    name: "Annual",
    originalPrice: 30000,
    price: 15000, // 30000 - 50%
    duration: "12 months",
    discount: 50,
    popular: false,
    features: [
      "All 6 Months benefits",
      "Unlimited personal training",
      "Custom diet plans",
      "Weekly body composition analysis",
      "VIP locker room access",
      "Supplement guidance"
    ]
  }
];

const faqs = [
  {
    question: "What's included in the membership?",
    answer: "All memberships include full access to gym equipment, cardio machines, locker facilities, and basic fitness consultation. Group classes and additional services may vary by plan."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, all memberships can be frozen for up to 2 months per year for medical reasons or extended travel. A doctor's certificate may be required for medical freezes."
  },
  {
    question: "Is there a joining fee?",
    answer: "No joining fee! All memberships include free registration and setup."
  },
  {
    question: "Can I upgrade or extend my plan?",
    answer: "Absolutely! You can upgrade your membership at any time. The remaining balance will be adjusted accordingly."
  },
  {
    question: "What are your operating hours?",
    answer: "We're open Monday-Sunday from 6:00 AM to 10:00 PM."
  },
  {
    question: "Do you offer trial passes?",
    answer: "Yes! We offer a 3-day trial pass for ₹299, which can be adjusted against your membership fee if you join within 7 days."
  }
];

export default function MembershipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div data-editor-id="app/membership/page.tsx:114:5" className="min-h-screen bg-black">
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
            <span data-editor-id="app/membership/page.tsx:132:13">MEMBERSHIP</span> <span data-editor-id="app/membership/page.tsx:132:35" className="text-orange-400">PLANS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            <span data-editor-id="app/membership/page.tsx:140:13">Choose the perfect membership duration that fits your fitness goals</span>
          </motion.p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="h-full bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:transform hover:scale-105 hover:border-orange-400/50 transition-all duration-300">
                  {/* Badge */}
                  {plan.discount > 0 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-gray-800 text-orange-400 border border-orange-400/30">
                        <span data-editor-id="app/membership/page.tsx:200:25">{plan.discount}% OFF</span>
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      <span data-editor-id="app/membership/page.tsx:209:23">{plan.name}</span>
                    </h3>

                    {/* Pricing */}
                    <div className="flex flex-col items-center justify-center space-y-2 mb-4">
                      {plan.discount > 0 && (
                        <span className="text-gray-500 line-through text-lg">
                          <span data-editor-id="app/membership/page.tsx:219:27">
                            ₹{plan.originalPrice.toLocaleString()}
                          </span>
                        </span>
                      )}
                      <span className="text-3xl font-bold text-orange-400">
                        <span data-editor-id="app/membership/page.tsx:223:25">
                          ₹{plan.price.toLocaleString()}
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-400 mb-6">
                      <span data-editor-id="app/membership/page.tsx:226:23">per {plan.duration}</span>
                    </p>

                    {plan.discount > 0 && (
                      <p className="text-green-400 text-sm font-medium mb-6">
                        <span data-editor-id="app/membership/page.tsx:231:25">
                          Save ₹{(plan.originalPrice - plan.price).toLocaleString()} ({plan.discount}%)
                        </span>
                      </p>
                    )}

                    {/* CTA Button */}
                    <motion.a
                      href="https://wa.me/919000019524"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 rounded-full font-semibold text-base transition-all duration-200 cursor-pointer inline-block text-center border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black"
                    >
                      <span data-editor-id="app/membership/page.tsx:281:21">Choose Plan</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span data-editor-id="app/membership/page.tsx:302:15">Why Choose Elite Fitness?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "solar:shield-check-bold",
                title: "No Hidden Fees",
                description: "Transparent pricing with no surprise charges"
              },
              {
                icon: "solar:star-bold",
                title: "Expert Trainers",
                description: "Certified professionals to guide you"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 text-center hover:border-orange-400/30 transition-all duration-300"
              >
                <div className="bg-orange-400/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon icon={benefit.icon} className="text-orange-400 text-xl" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  <span data-editor-id="app/membership/page.tsx:340:19">{benefit.title}</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  <span data-editor-id="app/membership/page.tsx:343:19">{benefit.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span data-editor-id="app/membership/page.tsx:361:15">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
                >
                  <span className="text-white font-medium">
                    <span data-editor-id="app/membership/page.tsx:381:21">{faq.question}</span>
                  </span>
                  <Icon
                    icon="solar:alt-arrow-down-linear"
                    className={`text-orange-400 text-xl transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      <span data-editor-id="app/membership/page.tsx:397:23">{faq.answer}</span>
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
