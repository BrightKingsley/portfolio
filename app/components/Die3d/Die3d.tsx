"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Die() {
  const gltf = useLoader(GLTFLoader, "/3d/die/scene.glb");
  const dieRef = useRef();

  useEffect(() => {
    gltf?.scene.scale.set(0.01, 0.01, 0.01);
    gltf?.scene.position.set(0, 0, 0);
    gltf?.scene.traverse((object: any) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame(() => {
    // @ts-ignore
    dieRef.current.rotation.x = 2;
  });

  return (
    <>
      <primitive object={gltf.scene} ref={dieRef} />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[30, 30, 50]} />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <OrbitControls autoRotate enableZoom={false} />
    </>
  );
}

export default function Die3d() {
  return (
    <Canvas className="">
      <Die />
    </Canvas>
  );
}
