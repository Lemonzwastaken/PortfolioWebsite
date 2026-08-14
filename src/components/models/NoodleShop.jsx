"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function NoodleShop({ position = [0, -2, 0], ...props }) {
  const { nodes, materials } = useGLTF("/models/NoodleShop-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    if (!modelRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetRotationY = 0 + mouseX * 0.4;
    const targetRotationX = 0.3 - mouseY * 0.2;

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
      position={position}
      rotation={[0.3, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo_Garbadge_Bin_M_UniqueAssets_0.geometry}
        material={materials.M_UniqueAssets}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo_Kiosk_M_TrimSheet_0.geometry}
        material={materials.M_TrimSheet}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/NoodleShop-transformed.glb");