import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Atm from "@/components/models/Atm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <Image src={bg} alt="background-image" fill className="object-cover object-center opacity-25" />

      <div className="w-full h-screen">
        {<RenderModel>
          <Atm />   
        </RenderModel>}
      </div>


    </main>
  );
}