"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Wheel() {
  const gltf = useLoader(GLTFLoader, "/assets/wheel/scene.gltf");
  const wheelRef = useRef();

  useEffect(() => {
    gltf?.scene.scale.set(4, 4, 4);
    gltf?.scene.position.set(0, 0, 0);
    gltf?.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const amplitude = 0.2;
    const frequency = 1;
    const rotation = Math.sin(t * frequency) * amplitude;
    wheelRef.current.rotation.y = rotation;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[30, 30, 50]} />
      <OrbitControls
        maxPolarAngle={1.45}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        enableZoom={false}
        zoom0={100}
      />
      <primitive object={gltf.scene} ref={wheelRef} />
    </>
  );
}

export default function Wheel3d() {
  return (
    <Canvas
      style={{
        width: "25rem",
        height: "25rem",
      }}
    >
      <Wheel />
    </Canvas>
  );
}
