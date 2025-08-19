import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TaraTitle() {
    const router = useRouter();

  return (
    <motion.div
      key="title"
      className="flex flex-col items-center justify-center w-full h-full bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1 }}
    >
    <p className="text-md text-white font-bold">Welcome To</p>

      <h1 className="text-[10vw] text-white font-bold">TARA</h1>
      <button
        className="mt-4 text-white border px-6 py-4 rounded"
        onClick={() => router.push("/gen1")}
      >
        Explore Gen 1 →
      </button>
    </motion.div>
  );
}
