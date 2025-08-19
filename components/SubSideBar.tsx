
// "use client";

// import React, { useRef, useState } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const categories = [
// " Colors",
// "Protection",
//   "Seat Cover",
//   "Engine Guard",
//   "Exhaust",
//   "Mirrors",
//   "Headlight",
// ];
//   const colorOptions = [
//     { name: 'Steel Blue', value: '#4682b4' },
//     { name: 'Crimson Red', value: '#dc143c' },
//     { name: 'Forest Green', value: '#228b22' },
//     { name: 'Golden Yellow', value: '#ffd700' },
//     { name: 'Deep Purple', value: '#9932cc' },
//     { name: 'Orange Burst', value: '#ff8c00' }
//   ];
// export default function SubSidebar() {
//   const [active, setActive] = useState("Colors");

//   // Refs for each item
//   const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//   // Current index
//   const currentIndex = categories.findIndex((cat) => cat === active);

//   // Handle scroll to item
//   const scrollToItem = (cat: string) => {
//     const el = itemRefs.current[cat];
//     if (el) {
//       el.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

//   const handleUp = () => {
//     const newIndex = (currentIndex - 1 + categories.length) % categories.length;
//     const newActive = categories[newIndex];
//     setActive(newActive);
//     scrollToItem(newActive);
//   };

//   const handleDown = () => {
//     const newIndex = (currentIndex + 1) % categories.length;
//     const newActive = categories[newIndex];
//     setActive(newActive);
//     scrollToItem(newActive);
//   };

//   return (
//     <div className="w-[50px] h-screen bg-zinc-900 text-white flex flex-col justify-between py-6 overflow-hidden">
//       {/* Chevron Up */}
//       <div
//         className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-600 transition"
//         onClick={handleUp}
//       >
//         <ChevronUp size={20} />
//       </div>

//       {/* Scrollable List */}
//       <div className="flex flex-col items-center space-y-48 overflow-y-auto overflow-x-hidden scrollbar-hide py-6">
//         {categories.map((cat) => (
//           <div
//             key={cat}
//             ref={(el) => (itemRefs.current[cat] = el)}
//             className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
//               active === cat ? "text-yellow-400 font-bold" : "text-gray-400"
//             }`}
//             onClick={() => {
//               setActive(cat);
//               scrollToItem(cat);
//             }}
//           >
//             {cat}
//           </div>
//         ))}
//       </div>

//       {/* Chevron Down */}
//       <div
//         className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-800 transition"
//         onClick={handleDown}
//       >
//         <ChevronDown size={20} />
//       </div>
     
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////
// 'use client'
// import React, { useRef, useState } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const subMenus: Record<string, string[]> = {
//   front: ["Colors", "Protection", "Seat Cover"],
//   side: ["Engine Guard", "Exhaust", "Mirrors"],
//   back: ["Headlight", "Luggage", "Covers"]
// };

// export default function SubSidebar({ activeMain }: { activeMain: string }) {
//   const categories = subMenus[activeMain] || [];
//   const [active, setActive] = useState(categories[0] || "");
//   const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

//   const currentIndex = categories.findIndex((cat) => cat === active);

//   const scrollToItem = (cat: string) => {
//     const el = itemRefs.current[cat];
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

//   const handleUp = () => {
//     const newIndex = (currentIndex - 1 + categories.length) % categories.length;
//     const newActive = categories[newIndex];
//     setActive(newActive);
//     scrollToItem(newActive);
//   };

//   const handleDown = () => {
//     const newIndex = (currentIndex + 1) % categories.length;
//     const newActive = categories[newIndex];
//     setActive(newActive);
//     scrollToItem(newActive);
//   };

//   return (
//     <div className="w-[50px] h-screen bg-zinc-900 text-white flex flex-col justify-between py-6 overflow-hidden">
//       <div className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-600" onClick={handleUp}>
//         <ChevronUp size={20} />
//       </div>

//       <div className="flex flex-col items-center space-y-48 overflow-y-auto scrollbar-hide py-6">
//         {categories.map((cat) => (
//           <div
//             key={cat}
//             ref={(el) => (itemRefs.current[cat] = el)}
//             className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
//               active === cat ? "text-yellow-400 font-bold" : "text-gray-400"
//             }`}
//             onClick={() => {
//               setActive(cat);
//               scrollToItem(cat);
//             }}
//           >
//             {cat}
//           </div>
//         ))}
//       </div>

//       <div className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-800" onClick={handleDown}>
//         <ChevronDown size={20} />
//       </div>
//     </div>
//   );
// }
///////////////////////////////
// 'use client'
// import React, { useRef, useState, useEffect } from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const subMenus: Record<string, string[]> = {
//   front: ["Colors", "Protection", "Seat Cover"],
//   side: ["Engine Guard", "Exhaust", "Mirrors"],
//   back: ["Headlight", "Luggage", "Covers"]
// };

// export default function SubSidebar({
//   activeMain,
//   activeSub,
//   setActiveSub
// }: {
//   activeMain: string;
//   activeSub: string;
//   setActiveSub: (sub: string) => void;
// }) {
//   const categories = subMenus[activeMain] || [];
//   const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
//   const currentIndex = categories.findIndex((cat) => cat === activeSub);

//   const scrollToItem = (cat: string) => {
//     const el = itemRefs.current[cat];
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
//   };

//   const handleUp = () => {
//     const newIndex = (currentIndex - 1 + categories.length) % categories.length;
//     setActiveSub(categories[newIndex]);
//     scrollToItem(categories[newIndex]);
//   };

//   const handleDown = () => {
//     const newIndex = (currentIndex + 1) % categories.length;
//     setActiveSub(categories[newIndex]);
//     scrollToItem(categories[newIndex]);
//   };

//   useEffect(() => {
//     if (categories.length > 0 && !categories.includes(activeSub)) {
//       setActiveSub(categories[0]); // reset when main changes
//     }
//   }, [activeMain]);

//   return (
//     <div className="w-[50px] h-screen bg-zinc-900 text-white flex flex-col justify-between py-6 overflow-hidden">
//       <div
//         className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-600"
//         onClick={handleUp}
//       >
//         <ChevronUp size={20} />
//       </div>

//       <div className="flex flex-col items-center space-y-48 overflow-y-auto scrollbar-hide py-6">
//         {categories.map((cat) => (
//           <div
//             key={cat}
//             ref={(el) => (itemRefs.current[cat] = el)}
//             className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
//               activeSub === cat ? "text-yellow-400 font-bold" : "text-gray-400"
//             }`}
//             onClick={() => {
//               setActiveSub(cat);
//               scrollToItem(cat);
//             }}
//           >
//             {cat}
//           </div>
//         ))}
//       </div>

//       <div
//         className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-800"
//         onClick={handleDown}
//       >
//         <ChevronDown size={20} />
//       </div>
//     </div>
//   );
// }
'use client';
import React, { useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const subMenus: Record<string, string[]> = {
  front: ['Colors', 'Protection', 'Seat Cover'],
  side: ['Engine Guard', 'Exhaust', 'Mirrors'],
  back: ['Headlight', 'Luggage', 'Covers'],
};

export default function SubSidebar({
  activeMain,
  activeSub,
  setActiveSub,
}: {
  activeMain: string;
  activeSub: string;
  setActiveSub: (sub: string) => void;
}) {
  const categories = subMenus[activeMain] || [];
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const currentIndex = categories.findIndex((cat) => cat === activeSub);

  const scrollToItem = (cat: string) => {
    const el = itemRefs.current[cat];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleUp = () => {
    const newIndex = (currentIndex - 1 + categories.length) % categories.length;
    setActiveSub(categories[newIndex]);
    scrollToItem(categories[newIndex]);
  };

  const handleDown = () => {
    const newIndex = (currentIndex + 1) % categories.length;
    setActiveSub(categories[newIndex]);
    scrollToItem(categories[newIndex]);
  };

  useEffect(() => {
    if (categories.length > 0 && !categories.includes(activeSub)) {
      setActiveSub(categories[0]); // reset when main changes
    }
  }, [activeMain]);

  return (
    <div className="w-[50px] h-screen bg-zinc-900 text-white flex flex-col justify-between py-6 overflow-hidden">
      <div
        className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-600"
        onClick={handleUp}
      >
        <ChevronUp size={20} />
      </div>

      <div className="flex flex-col items-center space-y-48 overflow-y-auto scrollbar-hide py-6">
        {categories.map((cat) => (
          <div
            key={cat}
            ref={(el) => (itemRefs.current[cat] = el)}
            className={`rotate-90 cursor-pointer transition-all duration-200 whitespace-nowrap ${
              activeSub === cat ? 'text-yellow-400 font-bold' : 'text-gray-400'
            }`}
            onClick={() => {
              setActiveSub(cat);
              scrollToItem(cat);
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <div
        className="text-gray-400 flex justify-center cursor-pointer hover:text-yellow-800"
        onClick={handleDown}
      >
        <ChevronDown size={20} />
      </div>
    </div>
  );
}

