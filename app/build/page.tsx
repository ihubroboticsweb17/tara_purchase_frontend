'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const cards = [
  {
    title: 'Tara Greet',
    description: "Enhance your campus operations with India's most sophisticated AI-powered educational assistant.",
    image: '/images/website_img.png',
    id: 1,
  },
  {
    title: 'Tara Learn',
    description: "Boost institutional learning experiences with intelligent AI-driven support.",
    image: '/images/websitecardimg.png',
    id: 2,
  },
  {
    title: 'Tara Care',
    description: "Deliver compassionate and intelligent robotic support in care environments.",
    image: 'https://assets.rbl.ms/53107004/origin.jpg',
    id: 3,
  },
]

export default function TaraGen1StickyCards() {
  const router = useRouter()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-black text-white  py-14">
      {/* Section Header */}
      <div className="text-center mb-4 ">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 ">Three Specialized Versions</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-poppins">
          Tara Gen 1 comes in three specialized configurations.
        </p>
      </div>

      {/* Sticky Scrolling Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center" style={{ width: '1200px', height: '600px' }}>
          {cards.map((card, index) => {

            // Calculate progress for each card's entrance and stacking
            const input_range = [(index - 1) * (1 / cards.length), index * (1 / cards.length)];
            const card_progress = useTransform(scrollYProgress, input_range, [0, 1]);

            // Animate card coming from the bottom
            const y = useTransform(card_progress, [0, 1], ['100vh', '0vh']);

            // First card is visible by default, others fade in
            const opacity = (index == 0) ? 1 : useTransform(card_progress, [0, 0.2], [0, 1])

            // Calculate scale and y-offset for stacking effect
            // As we scroll further, previous cards scale down and move up slightly
            const scale = useTransform(
              scrollYProgress,
              [index * (1 / cards.length), 1],
              [1, 1 - (cards.length - index) * 0.05]
            )
            const y_stacked = useTransform(
              scrollYProgress,
              [index * (1 / cards.length), 1],
              ['0px', `-${(cards.length - index) * 20}px`]
            )

            return (
              <motion.div
                key={card.id}
                className="absolute bg-black backdrop-blur-sm border border-white/20 rounded-xl shadow-lg "
                style={{
                  width: '1200px',
                  height: '600px',
                  zIndex: index + 1,
                  y: (index == 0) ? y_stacked : y,
                  scale,
                  opacity
                }}
              >
                <div className="flex h-full">
                  {/* Left side - Image */}
                  <div className="w-1/3 h-full">
                    <Image
                      width={400}
                      height={400}
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-l-xl"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div className="w-2/3 p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-4 text-white font-poppins">{card.title}</h3>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed font-poppins">{card.description}</p>
                    <button className="py-3 px-6 rounded-lg bg-white/20 hover:bg-white/30 transition-all duration-300 font-medium border border-white/30 hover:border-white/50 w-fit text-lg"
                    onClick={()=> router.push(`/customize`)}>
                      Customise
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

