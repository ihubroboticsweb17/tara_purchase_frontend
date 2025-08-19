"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Tharaimage() {
  const controls = useAnimation();
  const [rotation, setRotation] = useState(0);

  const handleClick = async () => {
    const newRotation = rotation + 90;
    setRotation(newRotation);
    await controls.start({ rotate: newRotation, transition: { duration: 0.5 } });
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-transparent overflow-hidden">
      <motion.div
        drag
        dragConstraints={{ top: -300, left: -300, right: 300, bottom: 300 }}
        animate={controls}
        onClick={handleClick}
        className="cursor-pointer"
      >
        <Image
          src="/images/website_img.png"
          alt="Classic"
          width={900}
          height={600}
          className="object-contain w-auto h-auto max-w-full max-h-full"
          priority
        />
      </motion.div>
    </div>
  );
}

