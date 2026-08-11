"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function City(props) {
  const { nodes, materials } = useGLTF("/models/city-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    if (!modelRef.current) return;

    modelRef.current.position.y =
      -1.9 + Math.sin(state.clock.elapsedTime) * 0.2;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetRotationY = 4.01426 + mouseX * 0.4;
    const targetRotationX = 0.174533 - mouseY * 0.2;

    // Smoothly rotate toward mouse
    modelRef.current.rotation.y +=
      (targetRotationY - modelRef.current.rotation.y) * 0.05;

    modelRef.current.rotation.x +=
      (targetRotationX - modelRef.current.rotation.x) * 0.05;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[-0.3, -1.9, 0]}
      scale={0.8}
      rotation={[0.174533, 4.01426, -0.349066]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial002}
        position={[-3.119, -0.036, -2.088]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.Black}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_123.geometry}
        material={materials.PaletteMaterial003}
        position={[1.384, 0.021, 0.82]}
        scale={0.621}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_124.geometry}
        material={materials.PaletteMaterial004}
        position={[1.384, 0.021, 0.82]}
        scale={0.621}
      />
    </group>
  );
}

useGLTF.preload("/models/city-transformed.glb");