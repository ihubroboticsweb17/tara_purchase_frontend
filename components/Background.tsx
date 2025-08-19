// components/Background.tsx
"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useState, useRef } from "react";
import * as THREE from "three";

const Model = ({ url }) => {
  const modelRef = useRef();
  const gltf = useLoader(GLTFLoader, url);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  const model = gltf.scene.clone(); // Clone the model
  model.scale.set(4, 4, 4);
  model.position.set(-2, -1, 0);

  return <primitive ref={modelRef} object={model} />;
};

export default function BackgroundModel({ url, position = "left" }) {
  const [error, setError] = useState(null);

  return (
    <div
      className={`fixed ${position}-20 top-8 h-1/2 w-1/2 z-0 pointer-events-none`}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [4, 0, 8], fov: 50 }}
        gl={{
          preserveDrawingBuffer: true,
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        onError={(e) => setError(e.message)}
      >
        <color attach="background" args={["transparent"]} />
        <fog attach="fog" args={["#17171b", 8, 15]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Environment preset="studio" intensity={1} />
      </Canvas>
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white p-2">
          Error: {error}
        </div>
      )}
    </div>
  );
}
