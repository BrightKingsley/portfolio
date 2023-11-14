"use client";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function WobbleSphere({ scale = 2.5 }) {
  return (
    <Canvas
      className="!z-10 canvas"
      style={{
        zIndex: 1,
      }}
    >
      <OrbitControls
        enableZoom={false}
        // maxPolarAngle={1.45}
        // minAzimuthAngle={-Math.PI / 4}
        // maxAzimuthAngle={Math.PI / 4}
      />
      <ambientLight intensity={0.79} />
      {/* <directionalLight position={[1, 1, 1]} /> */}
      <Sphere args={[1, 100, 200]} scale={scale}>
        <MeshDistortMaterial
          // color="#B855AE"
          color="#c084fc"
          attach="material"
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
}
