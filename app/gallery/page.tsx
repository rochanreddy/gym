'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const categories = ["All", "Gym Floor", "Equipment", "Classes", "Facilities", "Events"];

const galleryImages = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        category: "Gym Floor",
        title: "Main Gym Area",
        description: "State-of-the-art equipment and spacious workout area"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
        category: "Equipment",
        title: "Cardio Zone",
        description: "Premium treadmills and cardio machines"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
        category: "Equipment",
        title: "Weight Training Area",
        description: "Complete range of free weights and machines"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80",
        category: "Gym Floor",
        title: "Training Floor",
        description: "Spacious area for functional training"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80",
        category: "Facilities",
        title: "Modern Facilities",
        description: "Clean and well-maintained gym environment"
    },
    {
        id: 6,
        src: "/photos/1.jpeg",
        category: "Classes",
        title: "CrossFit Class",
        description: "High-intensity group training sessions"
    },
    {
        id: 7,
        src: "/photos/2.jpeg",
        category: "Classes",
        title: "Zumba Session",
        description: "Fun and energetic dance fitness classes"
    },
    {
        id: 8,
        src: "/photos/3.jpeg",
        category: "Classes",
        title: "Yoga Studio",
        description: "Peaceful space for yoga and meditation"
    },
    {
        id: 9,
        src: "/photos/4.jpeg",
        category: "Classes",
        title: "Kickboxing",
        description: "Combat fitness training area"
    },
    {
        id: 10,
        src: "/photos/5.jpeg",
        category: "Equipment",
        title: "Functional Training",
        description: "Specialized equipment for functional workouts"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        category: "Facilities",
        title: "Locker Rooms",
        description: "Clean and spacious changing facilities"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        category: "Events",
        title: "Community Events",
        description: "Regular fitness challenges and events"
    }
];

export default function GalleryPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-2jwl8c1xsk.jpg"
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
                        <span>OUR</span> <span className="text-orange-400">GALLERY</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        <span>Explore our world-class facilities and vibrant fitness community</span>
                    </motion.p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                                        ? 'bg-orange-400 text-black'
                                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <span>{category}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group cursor-pointer"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-square">
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 className="text-white font-semibold text-lg mb-1">
                                                    {image.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm">
                                                    {image.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-orange-400/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Icon icon="solar:eye-bold" className="text-orange-400 text-xl" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-orange-400 transition-colors"
                            >
                                <Icon icon="solar:close-circle-bold" className="text-4xl" />
                            </button>

                            {/* Image */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[80vh] object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold text-white mb-2">
                                    {selectedImage.title}
                                </h2>
                                <p className="text-gray-300 mb-2">
                                    {selectedImage.description}
                                </p>
                                <span className="inline-block bg-orange-400/20 text-orange-400 px-4 py-1 rounded-full text-sm">
                                    {selectedImage.category}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            <span>Experience Elite Fitness Yourself</span>
                        </h2>
                        <p className="text-gray-300 mb-8">
                            <span>Visit us for a free tour and see our facilities in person</span>
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-400 text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-colors duration-200"
                        >
                            <span>Schedule a Tour</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
