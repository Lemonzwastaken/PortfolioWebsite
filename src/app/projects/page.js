import Image from "next/image";
import bg from "../../../public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../data";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-25 -z-10"
      />

    <ProjectList projects={projectsData} />
    </main>
  );
}