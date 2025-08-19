"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function TaraGen1() {
  const router = useRouter();
  const containerRef = useRef(null);

  // Track mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Transform values for the text animation
  const translateX = useTransform(x, (value) => value * 0.01);
  const translateY = useTransform(y, (value) => value * 0.01);
  const shadowX = useTransform(x, (value) => value * 0.05);
  const shadowY = useTransform(y, (value) => value * 0.05);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const bounds = (containerRef.current as any).getBoundingClientRect();
      const relX = e.clientX - bounds.left;
      const relY = e.clientY - bounds.top;

      mouseX.set(relX - bounds.width / 2);
      mouseY.set(relY - bounds.height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      key="gen1"
      ref={containerRef}
      className="min-h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Fluid animated text */}
      <motion.h1
        className="text-[10vw] font-bold mb-80 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent pointer-events-none relative z-0"
        style={{
          x: translateX,
          y: translateY,
          textShadow: useTransform(
            [shadowX, shadowY],
            ([sX, sY]) => `${sX}px ${sY}px 15px rgba(255,255,255,0.1)`
          ),
        }}
      >
        TARA <span className="font-saira font-bold">GEN 1</span>
      </motion.h1>

      {/* Wallpaper image */}
      <motion.img
        src="/images/transparen2t.png"
        alt="TARA Gen 1"
        className="absolute bottom-10 w-[60vw] max-w-[1000px] z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      {/* Info box */}
      <motion.div
        className="absolute right-20 bottom-20 max-w-sm text-right text-white space-y-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="text-sm text-gray-400 leading-relaxed">
          Tara Gen 1 is iHub Robotics' flagship AI-powered robotic system,
          designed to redefine automation across industries.
        </p>
        <motion.button
          className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/versions")}
        >
          → Build Your TARA
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
