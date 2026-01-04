'use client';

import React from "react";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhatWeOffer from "@/app/components/WhatWeOffer";
import MembershipSection from "@/app/components/MembershipSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div data-editor-id="app/page.tsx:11:5" className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <MembershipSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}