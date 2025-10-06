'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const membershipPlans = [
  {
    id: 'basic',
    name: "Basic",
    originalPrice: 1200,
    price: 899,
    duration: "month",
    popular: true,
    badge: "OPENING OFFER",
    shortDescription: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym equipment",
      "Basic cardio machines",
      "Locker facility",
      "Free parking",
      "Basic fitness consultation",
      "Access during peak hours",
      "Mobile app access"
    ],
    notIncluded: [
      "Group classes",
      "Personal training",
      "Nutrition consultation",
      "Steam room access"
    ]
  },
  {
    id: 'premium',
    name: "Premium",
    originalPrice: 2000,
    price: 1499,
    duration: "month",
    popular: false,
    badge: "MOST POPULAR",
    shortDescription: "Complete fitness experience with classes and guidance",
    features: [
      "All Basic features included",
      "Unlimited group classes",
      "2 personal trainer sessions/month",
      "Basic nutrition consultation",
      "Steam room access",
      "Priority booking",
      "Guest passes (2/month)",
      "Fitness assessment",
      "Workout plan creation"
    ],
    notIncluded: [
      "Unlimited personal training",
      "Custom diet plans",
      "24/7 access"
    ]
  },
  {
    id: 'elite',
    name: "Elite",
    originalPrice: 3500,
    price: 2499,
    duration: "month",
    popular: false,
    badge: "PREMIUM",
    shortDescription: "Ultimate fitness experience with unlimited access and premium services",
    features: [
      "All Premium features included",
      "Unlimited personal training",
      "Custom diet plans",
      "Weekly body composition analysis",
      "Physiotherapy sessions (2/month)",
      "VIP locker room access",
      "Supplement guidance",
      "24/7 gym access",
      "Priority equipment reservation",
      "Guest passes (5/month)",
      "Monthly progress review"
    ],
    notIncluded: []
  }
];

const faqs = [
  {
    question: "What's included in the opening offer?",
    answer: "Our opening offer of ₹899/month includes full access to gym equipment, cardio machines, locker facilities, and basic fitness consultation. This special price is valid for the first 100 members only."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, all memberships can be frozen for up to 2 months per year for medical reasons or extended travel. A doctor's certificate may be required for medical freezes."
  },
  {
    question: "Is there a joining fee?",
    answer: "No joining fee during our opening offer period! This saves you an additional ₹2000 that would normally be charged."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can upgrade your membership at any time. Downgrades are processed at the end of your current billing cycle."
  },
  {
    question: "What are your operating hours?",
    answer: "We're open Monday-Sunday from 6:00 AM to 10:00 PM. Elite members get 24/7 access with keycard entry."
  },
  {
    question: "Do you offer trial passes?",
    answer: "Yes! We offer a 3-day trial pass for ₹299, which can be adjusted against your membership fee if you join within 7 days."
  }
];

export default function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getBillingPrice = (price: number) => {
    switch (billingCycle) {
      case 'quarterly':
        return Math.floor(price * 3 * 0.95); // 5% discount
      case 'yearly':
        return Math.floor(price * 12 * 0.85); // 15% discount
      default:
        return price;
    }
  };

  const getBillingLabel = () => {
    switch (billingCycle) {
      case 'quarterly':
        return '3 months (5% off)';
      case 'yearly':
        return '12 months (15% off)';
      default:
        return 'monthly';
    }
  };

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
            <span data-editor-id="app/membership/page.tsx:140:13">Choose the perfect membership plan that fits your fitness goals and lifestyle</span>
          </motion.p>
        </div>
      </section>

      {/* Billing Cycle Selector */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-800 p-1 rounded-full">
              {(['monthly', 'quarterly', 'yearly'] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
                    billingCycle === cycle
                      ? 'bg-orange-400 text-black'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span data-editor-id="app/membership/page.tsx:159:19">
                    {cycle === 'quarterly' ? '3 Months' : cycle === 'yearly' ? '12 Months' : 'Monthly'}
                    {cycle !== 'monthly' && <span data-editor-id="app/membership/page.tsx:162:37" className="text-green-400 ml-1 text-xs">
                      {cycle === 'quarterly' ? '5% OFF' : '15% OFF'}
                    </span>}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
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
                        <span data-editor-id="app/membership/page.tsx:200:25">{plan.badge}</span>
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      <span data-editor-id="app/membership/page.tsx:209:23">{plan.name}</span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      <span data-editor-id="app/membership/page.tsx:212:23">{plan.shortDescription}</span>
                    </p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {plan.originalPrice > plan.price && billingCycle === 'monthly' && (
                        <span className="text-gray-500 line-through text-lg">
                          <span data-editor-id="app/membership/page.tsx:219:27">₹{plan.originalPrice}</span>
                        </span>
                      )}
                      <span className="text-3xl font-bold text-orange-400">
                        <span data-editor-id="app/membership/page.tsx:223:25">₹{getBillingPrice(plan.price).toLocaleString()}</span>
                      </span>
                    </div>
                    <p className="text-gray-400">
                      <span data-editor-id="app/membership/page.tsx:226:23">per {getBillingLabel()}</span>
                    </p>
                    
                    {plan.popular && billingCycle === 'monthly' && (
                      <p className="text-green-400 text-sm font-medium mt-2">
                        <span data-editor-id="app/membership/page.tsx:231:25">Save ₹{plan.originalPrice - plan.price}/month</span>
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.03) }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <Icon icon="solar:check-circle-bold" className="text-orange-400 text-lg flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">
                          <span data-editor-id="app/membership/page.tsx:247:27">{feature}</span>
                        </span>
                      </motion.div>
                    ))}
                    
                    {plan.notIncluded.length > 0 && (
                      <div className="pt-4 border-t border-gray-800/50">
                        <p className="text-gray-500 text-xs mb-3 uppercase tracking-wide">
                          <span data-editor-id="app/membership/page.tsx:255:27">Not included</span>
                        </p>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3 mb-2"
                          >
                            <Icon icon="solar:close-circle-bold" className="text-gray-600 text-lg flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm line-through">
                              <span data-editor-id="app/membership/page.tsx:264:31">{feature}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      console.log('Selected plan:', plan.id);
                    }}
                    className={`w-full py-3 rounded-full font-semibold text-base transition-all duration-200 ${
                      plan.popular
                        ? 'bg-orange-400 text-black hover:bg-orange-300'
                        : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black'
                    }`}
                  >
                    <span data-editor-id="app/membership/page.tsx:281:21">
                      {plan.popular ? 'Get Started - Special Offer' : 'Choose This Plan'}
                    </span>
                  </motion.button>
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
              <span data-editor-id="app/membership/page.tsx:302:15">Why Choose Growth Fitness?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "solar:shield-check-bold",
                title: "No Hidden Fees",
                description: "Transparent pricing with no surprise charges"
              },
              {
                icon: "solar:calendar-bold", 
                title: "Flexible Cancellation",
                description: "Cancel anytime with 30 days notice"
              },
              {
                icon: "solar:heart-bold",
                title: "Health Guarantee",
                description: "30-day money back guarantee"
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
                    className={`text-orange-400 text-xl transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
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