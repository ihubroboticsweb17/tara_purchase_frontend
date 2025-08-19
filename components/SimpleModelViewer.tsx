"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stage,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  return <primitive object={gltf.scene} position={[0, 0, 0]} />;
};

export default function SimpleModelViewer({ url }) {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <color attach="background" args={["#ffffff"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Stage environment="city" intensity={1} contactShadow={false}>
        <Suspense fallback={null}>
          <Model url={url} />
        </Suspense>
      </Stage>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
}
