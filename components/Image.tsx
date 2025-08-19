// 'use client'
// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Image() {
//   return (
 
//       //  <motion.img
//       //   src="/images/transparen2t.png"
//       //   alt="TARA Gen 1"
//       //   className="absolute bottom-10 w-[80vw] max-w-[1000px] z-10"
//       //   initial={{ opacity: 0, y: 100 }}
//       //   animate={{ opacity: 1, y: 0 }}
//       //    transition={{ duration: 1, delay: 0.4 }}
//       //        />
// //               <motion.img
// //   src="/images/transparen2t.png"
// //   alt="TARA Gen 1"
// //   className="absolute bottom-10 w-[80vw] max-w-[1000px] z-10 cursor-pointer"
// //   initial={{ opacity: 0, y: 100 }}
// //   animate={{ opacity: 1, y: 0 }}
// //   transition={{ duration: 1, delay: 0.4 }}
// //   drag
// //   dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
// //   dragElastic={0.2}
// //   whileTap={{ scale: 0.95 }}
// // />
//       <motion.img
//           src="/images/transparen2t.png"
//           alt="TARA Gen 1"
//           className="absolute bottom-10 w-[80vw] max-w-[1000px] z-10 cursor-pointer"
//           style={{
//             transformStyle: "preserve-3d",
//             perspective: 800, // Controls depth perception
//           }}
//           animate={{
//             rotateX: rotation.x,
//             rotateY: rotation.y,
//           }}
//           drag
//           dragElastic={0.1}
//           onDrag={(event, info) => {
//             setRotation({
//               x: rotation.x + info.delta.y * 0.5, // Up/down drag tilts forward/back
//               y: rotation.y - info.delta.x * 0.5, // Left/right drag rotates left/right
//             });
//           }}
//           whileTap={{ scale: 0.95 }}
//         /> 
//   );
// }
'use client'

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


function Model() {
  const { scene } = useGLTF("/model/img.glb"); // ✅ loads from public/models/
  return <primitive object={scene} 
   scale={2}          // control size
      position={[0, 1, 0]} // move it down
      />;
  
}

export default function CarViewer() {
  return (
    <div className="w-full h-[800px] bg-black-100 rounded-lg shadow-lg">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
}
