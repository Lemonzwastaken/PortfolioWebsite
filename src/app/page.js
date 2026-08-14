"use client"

import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/Navigation";
import { ArcadeUnit } from "@/components/models/ArcadeUnit";
import ResponsiveComponent from "@/components/ResponsiveComponent";

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
            <ResponsiveComponent>
              {({ size }) => {
                const isSmall = size && size < 480;

                return (
                  <ArcadeUnit
                    position={isSmall ? [0, -1.6, 0] : [0, -2.6, 0]}
                    rotation={isSmall ? [0.2, 0, 0] : [0.523598776, 0, 0]}
                    scale={isSmall ? 0.25 : 0.4}
                  />
                );
              }}
            </ResponsiveComponent>
          </RenderModel>
        </div>
      </div>
    </main>
  );
}