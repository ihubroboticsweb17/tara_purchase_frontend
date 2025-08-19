
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
