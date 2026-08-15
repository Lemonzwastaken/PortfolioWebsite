"use client"

import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/Navigation";
import { ArcadeUnit } from "@/components/models/ArcadeUnit";
import { Bounds } from "@react-three/drei";
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
                  <Bounds key={isSmall ? 'mobile' : 'desktop'} fit clip observe margin={isSmall ? 0.9 : 2}>
                    <ArcadeUnit />
                  </Bounds>
                );
              }}
            </ResponsiveComponent>
          </RenderModel>
        </div>
      </div>
    </main>
  );
}