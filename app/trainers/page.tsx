'use client';

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const trainers = [
    {
        id: 1,
        name: "Rohit Sharma",
        role: "Head Trainer & CrossFit Specialist",
        image: "https://i.pravatar.cc/400?img=12",
        specialties: ["CrossFit", "Strength Training", "Athletic Performance"],
        experience: "8+ years",
        certifications: ["CrossFit Level 2", "NSCA-CPT", "Sports Nutrition"],
        bio: "Rohit brings over 8 years of experience in functional fitness and athletic training. His passion for helping clients achieve their peak performance has transformed hundreds of lives.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    },
    {
        id: 2,
        name: "Priya Nair",
        role: "Zumba & Dance Fitness Instructor",
        image: "https://i.pravatar.cc/400?img=5",
        specialties: ["Zumba", "Dance Fitness", "Cardio Training"],
        experience: "6+ years",
        certifications: ["Zumba Instructor", "Group Fitness Certified", "Dance Choreography"],
        bio: "Priya's energetic classes make fitness fun! With her background in dance and fitness, she creates engaging workouts that keep you moving and motivated.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    },
    {
        id: 3,
        name: "Anjali Gupta",
        role: "Yoga & Mindfulness Coach",
        image: "https://i.pravatar.cc/400?img=9",
        specialties: ["Vinyasa Yoga", "Meditation", "Flexibility Training"],
        experience: "10+ years",
        certifications: ["RYT-500", "Meditation Teacher", "Ayurveda Wellness"],
        bio: "Anjali's holistic approach to wellness combines traditional yoga practices with modern fitness principles, helping clients find balance in body and mind.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    },
    {
        id: 4,
        name: "Vikram Singh",
        role: "HIIT & Functional Training Expert",
        image: "https://i.pravatar.cc/400?img=15",
        specialties: ["HIIT", "Functional Training", "Weight Loss"],
        experience: "7+ years",
        certifications: ["NASM-CPT", "TRX Certified", "Nutrition Coach"],
        bio: "Vikram specializes in high-intensity training programs designed to maximize results. His scientific approach to fitness ensures safe and effective workouts.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    },
    {
        id: 5,
        name: "Deepak Kumar",
        role: "Kickboxing & Combat Fitness",
        image: "https://i.pravatar.cc/400?img=33",
        specialties: ["Kickboxing", "Combat Training", "Cardio Conditioning"],
        experience: "9+ years",
        certifications: ["Kickboxing Instructor", "Self-Defense Trainer", "ACE Certified"],
        bio: "With a background in martial arts, Deepak brings authentic combat training to fitness. His classes build strength, confidence, and cardiovascular endurance.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    },
    {
        id: 6,
        name: "Arjun Reddy",
        role: "Personal Training & Rehabilitation",
        image: "https://i.pravatar.cc/400?img=68",
        specialties: ["Personal Training", "Injury Rehabilitation", "Strength Building"],
        experience: "5+ years",
        certifications: ["ACSM-CPT", "Corrective Exercise Specialist", "Sports Therapy"],
        bio: "Arjun focuses on personalized training programs and rehabilitation. His expertise helps clients recover from injuries and build lasting strength.",
        social: {
            instagram: "#",
            facebook: "#"
        }
    }
];

export default function TrainersPage() {
    return (
        <div data-editor-id="app/trainers/page.tsx:11:5" className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2i7znic5wl.jpg"
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
                        <span data-editor-id="app/trainers/page.tsx:28:13">MEET OUR</span> <span data-editor-id="app/trainers/page.tsx:28:33" className="text-orange-400">TRAINERS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        <span data-editor-id="app/trainers/page.tsx:36:13">Expert trainers dedicated to helping you achieve your fitness goals</span>
                    </motion.p>
                </div>
            </section>

            {/* Trainers Grid */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={trainer.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                    {/* Social Links */}
                                    <div className="absolute bottom-4 right-4 flex space-x-3">
                                        <motion.a
                                            href={trainer.social.instagram}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-orange-400/20 backdrop-blur-sm p-2 rounded-full text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-200"
                                        >
                                            <Icon icon="mdi:instagram" className="text-xl" />
                                        </motion.a>
                                        <motion.a
                                            href={trainer.social.facebook}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-orange-400/20 backdrop-blur-sm p-2 rounded-full text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-200"
                                        >
                                            <Icon icon="mdi:facebook" className="text-xl" />
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        <span data-editor-id="app/trainers/page.tsx:94:21">{trainer.name}</span>
                                    </h3>
                                    <p className="text-orange-400 text-sm font-medium mb-4">
                                        <span data-editor-id="app/trainers/page.tsx:97:21">{trainer.role}</span>
                                    </p>

                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                        <span data-editor-id="app/trainers/page.tsx:101:21">{trainer.bio}</span>
                                    </p>

                                    {/* Experience */}
                                    <div className="flex items-center space-x-2 mb-3">
                                        <Icon icon="solar:medal-star-bold" className="text-orange-400" />
                                        <span className="text-gray-300 text-sm">
                                            <span data-editor-id="app/trainers/page.tsx:108:23">{trainer.experience} Experience</span>
                                        </span>
                                    </div>

                                    {/* Specialties */}
                                    <div className="mb-4">
                                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Specialties</p>
                                        <div className="flex flex-wrap gap-2">
                                            {trainer.specialties.map((specialty, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-orange-400/10 text-orange-400 px-3 py-1 rounded-full text-xs"
                                                >
                                                    <span data-editor-id="app/trainers/page.tsx:121:27">{specialty}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Certifications */}
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Certifications</p>
                                        <div className="space-y-1">
                                            {trainer.certifications.map((cert, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <Icon icon="solar:check-circle-bold" className="text-orange-400 text-sm" />
                                                    <span className="text-gray-300 text-xs">
                                                        <span data-editor-id="app/trainers/page.tsx:136:29">{cert}</span>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            <span data-editor-id="app/trainers/page.tsx:159:15">Ready to Start Your Fitness Journey?</span>
                        </h2>
                        <p className="text-gray-300 mb-8">
                            <span data-editor-id="app/trainers/page.tsx:162:15">Book a session with one of our expert trainers today</span>
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-400 text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-colors duration-200"
                        >
                            <span data-editor-id="app/trainers/page.tsx:169:15">Book a Free Consultation</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
