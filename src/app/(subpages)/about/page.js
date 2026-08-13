import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import { NoodleShop } from "@/components/models/NoodleShop";

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
          className="object-cover object-center opacity-100"
        />
      </div>

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel ambientIntensity={0} environmentIntensity={0}>
          <NoodleShop />
        </RenderModel>
      </div>
    </>
  );
}