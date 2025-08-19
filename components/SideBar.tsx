// 'use client'
// import { useState } from 'react'
// import SubSidebar from './SubSideBar'

// const categories = [
//   'LUGGAGE', 'WHEELS', 'CONVENIENCE', 'STYLE',
//   'COVERS', 'PERFORMANCE', 'MAINTENANCE',
//   'FEATURES', 'DURABILITY', 'ACCESSORIES' // Added more to show scroll
// ]

// export default function SideBar() {
//   const [active, setActive] = useState('STYLE')

//   return (
//     <div className="w-[60px] h-screen bg-black text-white flex flex-col py-14 overflow-y-auto overflow-x-hidden scrollbar-hide ">
//       <div className="flex flex-col items-center space-y-48">
//         {categories.map((cat) => (
//           <div
//             key={cat}
//             className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
//               active === cat ? 'text-yellow-400 font-bold' : 'text-gray-400'
//             }`}
//             onClick={() => setActive(cat)}
//           >
//             {cat}
//           </div>
//         ))}
//       </div>
//       {active  && <SubSidebar/>}
//     </div>
//   )
// }
// 
'use client'
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const views = [
  { name: 'Front', value: 'front' },
  { name: 'Side', value: 'side' },
  { name: 'Back', value: 'back' }
];

export default function SideBar({setConfigOpen, activeMain, setActiveMain }: { 
  activeMain: string, 
  setActiveMain: (val: string) => void 
}) {
  return (
    <div className="w-[60px] h-screen bg-black text-white flex flex-col py-14 overflow-y-auto overflow-x-hidden scrollbar-hide">
      <div className="flex flex-col items-center space-y-48">
        {views.map((cat) => (
          <div
            key={cat.value}
            className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
              activeMain === cat.value ? 'text-yellow-400 font-bold' : 'text-gray-400'
            }`}
            onClick={() => setActiveMain(cat.value)}
          >
            {cat.name}
          </div>
        ))}
      </div>
       {/* <motion.button
                  onClick={() => setConfigOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-semibold text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Customize
                </motion.button> */}
    </div>
  );
}
