"use client"

import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Atm from "@/components/models/Atm";
import { Bounds } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src={bg}
          alt="background-image"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center opacity-50"
        />
      </div>

      <div className="hidden sm:flex fixed top-0 left-0 h-screen w-[30%] items-center justify-center pointer-events-none z-0">
        <RenderModel ambientIntensity={1} environmentIntensity={0.5} exposure={1} environmentPreset="sunset">
          <Bounds fit clip observe margin={0.8}>
            <Atm />
          </Bounds>
        </RenderModel>
      </div>

      <div className="sm:ml-[30%] w-full sm:w-[70%] px-6 sm:px-12 py-24">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}