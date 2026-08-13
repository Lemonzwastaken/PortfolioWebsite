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

      <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <div className="w-full h-[60vh] md:h-[70vh]">
          <RenderModel ambientIntensity={0} environmentIntensity={0}>
            <NoodleShop scale={1.2} />
          </RenderModel>
        </div>

        <div className="flex flex-col items-center text-center px-4 w-full max-w-4xl -mt-24 md:-mt-40">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-accent leading-tight">
            Aaradhy Srivastava
          </h1>
          <p className="font-light text-foreground text-sm sm:text-base mt-6">
            The guy behind this portfolio :3
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}