import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Atm from "@/components/models/Atm";

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

      <div className="fixed top-0 left-0 h-screen w-[30%] flex items-center justify-center pointer-events-none z-0">
        <RenderModel>
          <Atm />
        </RenderModel>
      </div>

      <div className="ml-[30%] w-[70%] px-12 py-24">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}