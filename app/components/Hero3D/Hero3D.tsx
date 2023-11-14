"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function hero3D({ model }: { model: "rubik" | "die" | "react" }) {
  const [asset, setAsset] = useState("/3d/rubik/rubiks_cube.glb");

  const gltf = useLoader(GLTFLoader, asset);
  // const gltf = useLoader(
  // 	GLTFLoader,
  // 	"src/assets/3d/macbook/macbook-transformed.glb"
  // );
  const rubikRef: any = useRef();

  useEffect(() => {
    gltf?.scene.scale.set(0.2, 0.2, 0.2);
    gltf?.scene.position.set(0, -1, 0);
    gltf?.scene.traverse((object: any) => {
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
    <div>
      <ambientLight intensity={1} />
      <spotLight intensity={0.8} position={[10, 10, 10]} />
      <OrbitControls autoRotate enableZoom={false} />
      {/* <Stage environment="city" intensity={0.6}> */}
      <primitive object={gltf.scene} ref={rubikRef} />
      {/* </Stage> */}
    </div>
  );
}

export default function Hero3D({
  model,
}: {
  model: "rubik" | "die" | "react";
}) {
  return (
    <Canvas
      style={{
        width: "25rem",
        height: "25rem",
      }}
    >
      {/* <hero3D /> */}
      <Hero3D model={model} />
    </Canvas>
  );
}
