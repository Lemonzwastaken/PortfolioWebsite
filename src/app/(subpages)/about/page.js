import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import { NoodleShop } from "@/components/models/NoodleShop";
import AboutDetails from "@/components/About";

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

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-x-1/2 -translate-y--1/2">
          <h1 className="font-bold text-9xl text-accent">Aaradhy Srivastava</h1>
          <p className="font-light text-foreground text-ls">The guy behind this portfolio :3</p>
        </div>
      </div>

      <AboutDetails />

    </>
  );
}