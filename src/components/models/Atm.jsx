"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Atm(props) {
  const { nodes, materials } = useGLTF('/models/atm-transformed.glb')
  const modelRef = useRef()

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.z += delta * 0.5 // adjust speed here
    }
  })

  return (
    <group {...props}
    ref={modelRef}
    dispose={null}
    position={[0, -3, 0]}
    rotation={[-1.5708, 0, -1.5708]}
    scale={1}>
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