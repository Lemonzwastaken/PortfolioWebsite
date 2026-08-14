"use client"

import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/Navigation";
import { ArcadeUnit } from "@/components/models/ArcadeUnit";
import { Bounds } from "@react-three/drei";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 relative overflow-hidden">
      <Image
        src={bg}
        alt="background-image"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-50 -z-10"
      />

      <div className="w-full h-screen relative">
        <Navigation />

        <div className="absolute inset-0 pointer-events-none">
          <RenderModel ambientIntensity={1} environmentIntensity={0} exposure={1} environmentPreset="sunset">
            <Bounds fit clip observe margin={1.2}>
              <ArcadeUnit rotation={[0.523598776, 0, 0]} />
            </Bounds>
          </RenderModel>
        </div>
      </div>
    </main>
  );
}