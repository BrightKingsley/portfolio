"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Macbook(props) {
  const { nodes, materials } = useGLTF(
    "src/assets/3d/macbook/macbook-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 0.1, -1.012]}
        rotation={[-1.925, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials["Material.008"]}
        position={[0, 0.1, -1.012]}
        rotation={[-1.925, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/macbook-transformed.glb");
