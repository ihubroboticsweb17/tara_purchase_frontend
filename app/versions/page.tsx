"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "TARA GREET",
    description:
      "Enhance your campus operations with India’s most sophisticated AI-powered educational assistant.",
    image: "/images/website_img.png",
    glow: "glow-border-1",
  },
  {
    title: "TARA LEARN",
    description:
      "Boost institutional learning experiences with intelligent AI-driven support.",
    image: "/images/websitecardimg.png",
    glow: "glow-border-2",
  },
  {
    title: "TARA CARE",
    description:
      "Deliver compassionate and intelligent robotic support in care environments.",
    image: "https://assets.rbl.ms/53107004/origin.jpg",
    glow: "glow-border-3",
  },
];

export default function TaraCardRow() {
  const router = useRouter();

  return (
    <div className="relative bg-black px-4 py-16 text-white min-h-screen flex flex-col items-center">
      {/* 🔙 Back button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => router.back()}
          className="text-white text-2xl hover:text-gray-300 transition-all duration-200"
          aria-label="Go Back"
        >
          <ArrowLeft />
        </button>
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-poppins mb-2">
          Three Specialized Versions
        </h2>
        <p className="text-gray-400 text-lg font-poppins max-w-2xl mx-auto">
          Tara Gen 1 is available in three powerful configurations, each
          engineered for distinct environments.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative card-with-glow ${card.glow} bg-white/5 border border-white/20 rounded-[24px] overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-8`}
          >
            {/* Image */}
            <div className="relative w-full h-96">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Text */}
            <div className="absolute bottom-16 left-0 px-6 text-white w-full">
              <h3 className="text-xl font-semibold font-poppins">
                {card.title}
              </h3>
              <p className="text-sm text-gray-300 font-poppins mt-1">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="absolute bottom-4 w-full flex justify-center">
              <button
                onClick={() => router.push("/customize")}
                className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-sm hover:bg-gray-100 transition-all duration-300"
              >
                Customize
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}





// "use client"
// import { ArrowLeft } from "lucide-react"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import { motion } from "framer-motion"

// const cards = [
//   {
//     title: "TARA GREET",
//     description:
//       "Enhance your campus operations with India’s most sophisticated AI-powered educational assistant.",
//     image: "/images/website_img.png",
//     glow: "glow-border-1",
//   },
//   {
//     title: "TARA LEARN",
//     description:
//       "Boost institutional learning experiences with intelligent AI-driven support.",
//     image: "/images/websitecardimg.png",
//     glow: "glow-border-2",
//   },
//   {
//     title: "TARA CARE",
//     description:
//       "Deliver compassionate and intelligent robotic support in care environments.",
//     image: "https://assets.rbl.ms/53107004/origin.jpg",
//     glow: "glow-border-3",
//   },
// ];


// const cardVariants = {
//   initial: (index: number) => ({
//     x: index === 0 ? "100%" : index === 2 ? "-100%" : "0%", // All cards start at center position
//     y: 0,
//     scale: 1,
//     opacity: index === 1 ? 1 : 0, // Only middle card visible initially
//     zIndex: index === 1 ? 3 : index === 0 ? 2 : 1, // Middle card on top
//     rotateY: index === 0 ? -2 : index === 2 ? 2 : 0, // Slight rotation for depth
//   }),
//   animate: (index: number) => ({
//     x: "0%", // All cards move to their natural grid positions
//     y: 0,
//     scale: 1,
//     opacity: 1,
//     zIndex: 1,
//     rotateY: 0,
//     transition: {
//       duration: 1.2,
//       delay: index === 1 ? 0.5 : index === 0 ? 0.8 : 1.1, // Middle card waits, then left, then right
//       ease: [0.25, 0.46, 0.45, 0.94],
//       opacity: {
//         duration: 0.6,
//         delay: index === 1 ? 0.5 : index === 0 ? 0.8 : 1.1,
//       },
//     },
//   }),
// }

// const containerVariants = {
//   initial: {},
//   animate: {
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.8,
//     },
//   },
// }

// export default function TaraCardRow() {
//   const router = useRouter()

//   return (
//     <div className="relative bg-black px-4 py-16 text-white min-h-screen flex flex-col items-center">
//       {/* 🔙 Back button */}
//       <div className="absolute top-6 left-6">
//         <button
//           onClick={() => router.back()}
//           className="text-white text-2xl hover:text-gray-300 transition-all duration-200"
//           aria-label="Go Back"
//         >
//           <ArrowLeft />
//         </button>
//       </div>

//       {/* Title Section */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <h2 className="text-4xl font-bold font-poppins mb-2">Three Specialized Versions</h2>
//         <p className="text-gray-400 text-lg font-poppins max-w-2xl mx-auto">
//           Tara Gen 1 is available in three powerful configurations, each engineered for distinct environments.
//         </p>
//       </motion.div>

//       {/* Cards Container */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full mt-8"
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//       >
//         {cards.map((card, index) => (
//         <motion.div
//   key={index}
//   custom={index}
//   variants={cardVariants}
//   className={`relative card-with-glow ${card.glow} bg-white/5 border border-white/20 rounded-[24px] overflow-hidden shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-8`}
//   style={{
//     transformOrigin: "center center",
//   }}
// >
//             {/* Image */}
//             <div className="relative w-full h-96">
//               <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//             </div>

//             {/* Text */}
//             <div className="absolute bottom-16 left-0 px-6 text-white w-full">
//               <h3 className="text-xl font-semibold font-poppins">{card.title}</h3>
//               <p className="text-sm text-gray-300 font-poppins mt-1">{card.description}</p>
//             </div>

//             {/* Button */}
//             <div className="absolute bottom-4 w-full flex justify-center">
//               <button
//                 onClick={() => router.push("/customize")}
//                 className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold shadow-sm hover:bg-gray-100 transition-all duration-300"
//               >
//                 Customize
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }
