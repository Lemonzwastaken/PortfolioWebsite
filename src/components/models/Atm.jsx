"use client";

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Atm(props) {
  const { nodes, materials } = useGLTF('/models/atm-transformed.glb')
  return (
    <group {...props} dispose={null} position={[0, -1.2, 0]} rotation={[-1.5708, 0, -1.5708]} scale={0.6}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.BLUE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.GRAN}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.MAIN}
      />
    </group>
  )
}

useGLTF.preload('/models/atm-transformed.glb')