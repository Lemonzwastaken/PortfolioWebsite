// components/RenderModel.jsx
"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      gl={{ alpha: true }}
      className={clsx("w-full h-full relative", className)}
    >
      <Suspense fallback={null}>
        {children}
        <Environment preset="dawn" />
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default RenderModel;