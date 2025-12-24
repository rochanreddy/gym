"use client";

import React, { useEffect, useMemo, useState } from "react";

type BackgroundCarouselProps = {
  imagePaths?: string[];
  intervalMs?: number;
  fadeMs?: number;
  className?: string;
};

export default function BackgroundCarousel({
  imagePaths,
  intervalMs = 4000,
  fadeMs = 800,
  className,
}: BackgroundCarouselProps) {
  const images = useMemo(
    () =>
      imagePaths && imagePaths.length > 0
        ? imagePaths
        : [
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
          "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80",
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80",
          "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1920&q=80",
          "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1920&q=80",
        ],
    [imagePaths]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className={`absolute inset-0 ${className ?? ""}`} aria-hidden="true">
      {images.map((src, idx) => {
        const isActive = idx === activeIndex;
        return (
          <img
            key={src}
            src={src}
            alt=""
            className={
              `absolute inset-0 w-full h-full object-cover transition-opacity duration-[${fadeMs}ms] ` +
              (isActive ? "opacity-100" : "opacity-0")
            }
          />
        );
      })}
    </div>
  );
}


