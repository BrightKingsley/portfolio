"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ReactLogo() {
  // const gltf = useLoader(GLTFLoader, "src/assets/3d/react-logo/scene.gltf");
  const gltf = useLoader(GLTFLoader, "/3d/react-logo/scene.gltf");
  const logoRef = useRef();

  useEffect(() => {
    gltf?.scene.scale.set(1, 1, 1);
    gltf?.scene.position.set(0, 0, 0);
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
    // logoRef.current.rotation.x = 2;
    //@ts-ignore
    logoRef.current.rotation.y = -0.5;
    // logoRef.current.rotation.z = 10;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[30, 30, 50]} />
      <pointLight intensity={0.8} position={[10, 10, 10]} />
      <OrbitControls autoRotate enableZoom={false} />
      {/* <Stage environment="city" intensity={0.6}> */}
      <primitive object={gltf.scene} ref={logoRef} />
      {/* </Stage> */}
    </>
  );
}

export default function iPad3d() {
  return (
    <Canvas
      style={{
        width: "25rem",
        height: "25rem",
      }}
    >
      <ReactLogo />
    </Canvas>
  );
}
