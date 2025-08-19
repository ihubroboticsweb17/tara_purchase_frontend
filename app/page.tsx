"use client";

import { AnimatePresence } from "framer-motion";
import TaraTitle from "@/components/TaraTitle";
import GlassCursor from "@/components/GlassCursor";

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black">

      <AnimatePresence mode="wait">
        <TaraTitle key="tara-title" />
      </AnimatePresence>
    </main>
  );
}
