"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Rubik() {
  const gltf = useLoader(GLTFLoader, "/3d/rubik/rubiks_cube.glb");
  // const gltf = useLoader(
  // 	GLTFLoader,
  // 	"src/assets/3d/macbook/macbook-transformed.glb"
  // );
  const rubikRef = useRef();

  useEffect(() => {
    gltf?.scene.scale.set(0.2, 0.2, 0.2);
    gltf?.scene.position.set(0, -1, 0);
    gltf?.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  useFrame(() => {
    rubikRef.current.rotation.y = 2;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <spotLight intensity={0.8} position={[10, 10, 10]} />
      <OrbitControls autoRotate enableZoom={false} />
      {/* <Stage environment="city" intensity={0.6}> */}
      <primitive object={gltf.scene} ref={rubikRef} />
      {/* </Stage> */}
    </>
  );
}

export default function rubik3d() {
  return (
    <Canvas
      style={{
        width: "25rem",
        height: "25rem",
      }}
    >
      <Rubik />
    </Canvas>
  );
}
