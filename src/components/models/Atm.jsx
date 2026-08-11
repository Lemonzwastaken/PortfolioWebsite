"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Atm(props) {
  const { nodes, materials } = useGLTF('/models/atm-transformed.glb')
  const modelRef = useRef()

  useFrame((state, delta, XRFrame) => {

    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15;

  })

  return (
    <group {...props} 
    ref={modelRef}
    dispose={null} 
    position={[0, -2, 0]} 
    rotation={[-1.39626, -0.174533, -1.5708]} 
    scale={0.6}>
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