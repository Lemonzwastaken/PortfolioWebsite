"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({
  children,
  className,
  ambientIntensity = 0,
  environmentPreset = "dawn",
  environmentIntensity = 0,
  exposure = 1,
}) => {
  return (
    <Canvas
      gl={{ alpha: true, toneMappingExposure: exposure }}
      camera={{ position: [0, 0, 15], fov: 45 }}
      className={clsx("w-full h-full relative", className)}
    >
      <Suspense fallback={null}>
        {children}
        <Environment preset={environmentPreset} environmentIntensity={environmentIntensity} />
      </Suspense>
      <ambientLight intensity={ambientIntensity} />
    </Canvas>
  );
};

export default RenderModel;