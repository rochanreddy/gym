'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                {/* Animated Logo/Icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="mb-6"
                >
                    <div className="w-20 h-20 mx-auto relative">
                        <div className="absolute inset-0 border-4 border-orange-400/30 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 rounded-full animate-spin"></div>
                    </div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-2">Elite Fitness</h2>
                    <p className="text-gray-400 text-sm">Loading...</p>
                </motion.div>

                {/* Animated Dots */}
                <div className="flex items-center justify-center space-x-2 mt-4">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className="w-2 h-2 bg-orange-400 rounded-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
