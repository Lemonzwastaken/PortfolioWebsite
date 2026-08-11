import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Atm from "@/components/models/Atm";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 relative overflow-hidden">
      <Image
        src={bg}
        alt="background-image"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center opacity-25 -z-10"
      />

      <div className="w-full h-screen relative">
        <Navigation />

        <div className="absolute inset-0 pointer-events-none">
          <RenderModel>
            <Atm />
          </RenderModel>
        </div>
      </div>
    </main>
  );
}