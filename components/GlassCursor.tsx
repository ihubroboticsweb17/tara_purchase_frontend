"use client";
import { useEffect, useState } from "react";

export default function GlassCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden sm:block"
      style={{
        left: position.x - 10, // half of width
        top: position.y - 10,  // half of height
      }}
    >
      <div
        className="w-[20px] h-[20px] rounded-full backdrop-blur-[6px] bg-white/10 border border-white/20 shadow-md"
      />
    </div>
  );
}
