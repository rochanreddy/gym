'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const timeSlots = [
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM"
];

const schedule = {
    "Monday": [
        { time: "6:00 AM", class: "CrossFit Foundation", trainer: "Rohit Sharma", duration: "60 min", intensity: "High" },
        { time: "8:00 AM", class: "Vinyasa Yoga", trainer: "Anjali Gupta", duration: "75 min", intensity: "Low" },
        { time: "6:00 PM", class: "HIIT Circuit", trainer: "Vikram Singh", duration: "45 min", intensity: "High" },
        { time: "7:00 PM", class: "Cardio Kickboxing", trainer: "Deepak Kumar", duration: "50 min", intensity: "High" }
    ],
    "Tuesday": [
        { time: "6:30 AM", class: "HIIT Circuit", trainer: "Vikram Singh", duration: "45 min", intensity: "High" },
        { time: "9:00 AM", class: "Functional Training", trainer: "Arjun Reddy", duration: "55 min", intensity: "Medium" },
        { time: "7:00 PM", class: "Zumba Fitness", trainer: "Priya Nair", duration: "45 min", intensity: "Medium" }
    ],
    "Wednesday": [
        { time: "6:00 AM", class: "CrossFit Foundation", trainer: "Rohit Sharma", duration: "60 min", intensity: "High" },
        { time: "8:00 AM", class: "Vinyasa Yoga", trainer: "Anjali Gupta", duration: "75 min", intensity: "Low" },
        { time: "7:30 PM", class: "Functional Training", trainer: "Arjun Reddy", duration: "55 min", intensity: "Medium" }
    ],
    "Thursday": [
        { time: "6:30 AM", class: "HIIT Circuit", trainer: "Vikram Singh", duration: "45 min", intensity: "High" },
        { time: "10:00 AM", class: "Cardio Kickboxing", trainer: "Deepak Kumar", duration: "50 min", intensity: "High" },
        { time: "7:00 PM", class: "Zumba Fitness", trainer: "Priya Nair", duration: "45 min", intensity: "Medium" }
    ],
    "Friday": [
        { time: "6:00 AM", class: "CrossFit Foundation", trainer: "Rohit Sharma", duration: "60 min", intensity: "High" },
        { time: "9:00 AM", class: "Vinyasa Yoga", trainer: "Anjali Gupta", duration: "75 min", intensity: "Low" },
        { time: "7:00 PM", class: "Cardio Kickboxing", trainer: "Deepak Kumar", duration: "50 min", intensity: "High" }
    ],
    "Saturday": [
        { time: "8:00 AM", class: "HIIT Circuit", trainer: "Vikram Singh", duration: "45 min", intensity: "High" },
        { time: "10:00 AM", class: "Functional Training", trainer: "Arjun Reddy", duration: "55 min", intensity: "Medium" },
        { time: "5:00 PM", class: "Zumba Fitness", trainer: "Priya Nair", duration: "45 min", intensity: "Medium" }
    ],
    "Sunday": [
        { time: "9:00 AM", class: "Vinyasa Yoga", trainer: "Anjali Gupta", duration: "75 min", intensity: "Low" },
        { time: "10:00 AM", class: "CrossFit Foundation", trainer: "Rohit Sharma", duration: "60 min", intensity: "High" }
    ]
};

const getIntensityColor = (intensity: string) => {
    switch (intensity) {
        case "Low": return "bg-green-400/10 text-green-400 border-green-400/30";
        case "Medium": return "bg-orange-400/10 text-orange-400 border-orange-400/30";
        case "High": return "bg-red-400/10 text-red-400 border-red-400/30";
        default: return "bg-gray-400/10 text-gray-400 border-gray-400/30";
    }
};

export default function TimetablePage() {
    const [selectedDay, setSelectedDay] = useState<string>("Monday");

    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-aonmh7elg.jpg"
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
                        <span>CLASS</span> <span className="text-orange-400">TIMETABLE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        <span>Plan your week with our comprehensive class schedule</span>
                    </motion.p>
                </div>
            </section>

            {/* Day Selector - Mobile */}
            <section className="py-8 bg-gray-900/50 lg:hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                    >
                        {weekDays.map((day) => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                </div>
            </section>

            {/* Timetable Section */}
            <section className="py-16 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Desktop View - Full Week Grid */}
                    <div className="hidden lg:block overflow-x-auto">
                        <div className="min-w-full">
                            {/* Header Row */}
                            <div className="grid grid-cols-8 gap-4 mb-4">
                                <div className="bg-gray-900 rounded-xl p-4 font-semibold text-white text-center">
                                    Time
                                </div>
                                {weekDays.map((day) => (
                                    <div key={day} className="bg-gray-900 rounded-xl p-4 font-semibold text-white text-center">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Time Slots */}
                            {timeSlots.map((time, timeIndex) => (
                                <motion.div
                                    key={time}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: timeIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-8 gap-4 mb-4"
                                >
                                    <div className="bg-gray-900/50 rounded-xl p-4 flex items-center justify-center text-gray-300 font-medium">
                                        {time}
                                    </div>
                                    {weekDays.map((day) => {
                                        const classItem = schedule[day as keyof typeof schedule]?.find(
                                            (c) => c.time === time
                                        );
                                        return (
                                            <div key={`${day}-${time}`} className="min-h-[100px]">
                                                {classItem ? (
                                                    <motion.div
                                                        whileHover={{ scale: 1.02 }}
                                                        className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-xl p-4 h-full hover:border-orange-400/50 transition-all duration-300 cursor-pointer"
                                                    >
                                                        <h4 className="text-white font-semibold text-sm mb-1">
                                                            {classItem.class}
                                                        </h4>
                                                        <p className="text-gray-400 text-xs mb-2">
                                                            {classItem.trainer}
                                                        </p>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-gray-500 text-xs">
                                                                {classItem.duration}
                                                            </span>
                                                            <span className={`px-2 py-0.5 rounded-full text-xs border ${getIntensityColor(classItem.intensity)}`}>
                                                                {classItem.intensity}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <div className="bg-gray-900/30 rounded-xl h-full"></div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View - Single Day */}
                    <div className="lg:hidden">
                        <div className="space-y-4">
                            {schedule[selectedDay as keyof typeof schedule]?.map((classItem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">
                                                {classItem.class}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {classItem.trainer}
                                            </p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getIntensityColor(classItem.intensity)}`}>
                                            {classItem.intensity}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-6 text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Icon icon="solar:clock-circle-bold" className="text-orange-400" />
                                            <span className="text-gray-300">{classItem.time}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Icon icon="solar:timer-bold" className="text-orange-400" />
                                            <span className="text-gray-300">{classItem.duration}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Legend Section */}
            <section className="py-8 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full text-xs border bg-green-400/10 text-green-400 border-green-400/30">
                                Low
                            </span>
                            <span className="text-gray-400 text-sm">Beginner Friendly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full text-xs border bg-orange-400/10 text-orange-400 border-orange-400/30">
                                Medium
                            </span>
                            <span className="text-gray-400 text-sm">Moderate Intensity</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 rounded-full text-xs border bg-red-400/10 text-red-400 border-red-400/30">
                                High
                            </span>
                            <span className="text-gray-400 text-sm">Advanced Level</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-black">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-white mb-4">
                            <span>Ready to Join a Class?</span>
                        </h2>
                        <p className="text-gray-300 mb-8">
                            <span>Book your spot now and start your fitness journey with Elite Fitness</span>
                        </p>
                        <div className="flex items-center justify-center">
                            <motion.a
                                href="https://wa.me/919000019524"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-400 text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-orange-300 transition-colors duration-200 w-full sm:w-auto text-center"
                            >
                                <span>Book a Class</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
