"use client";

import useInView from "@/src/hooks/use-in-view";
import Image from "next/image";
import { useRef } from "react";
import Orbit from "../shared/Orbit";
import HeroImage from "../../../public/assets/Hero Image.svg";

const HeroBottom = () => {
  const bottomHeroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: bottomHeroRef, once: true });

  return (
    <div className=" flex justify-center items-center flex-col w-full max-md:overflow-hidden h-full ">
      <div
        ref={bottomHeroRef}
        style={{
          transform: isInView ? "none" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="relative flex justify-center w-full  "
      >
        <div className=" w-full lg:mt-35 hidden md:flex justify-center items-center absolute -top-[10rem] lg:-top-[14rem] z-[-1] opacity-0 fade-in-orbit">
          <Orbit />
        </div>

        <div className="z-10 mt-10  flex justify-center relative  max-w-[1000px]  max-sm:hidden min-[2000px]:min-w-[2000px]">
          <Image
            src={HeroImage}
            alt="mask"
            width={1400}
            height={900}
            className="min-[2000px]:w-full"
            loading="eager"
            priority
          />
        </div>
        <div className="sm:hidden w-full flex justify-center h-[400px] z-10 relative overflow-clip">
          <Image
            src={HeroImage}
            className=" absolute inset-0 h-full w-full object-cover"
            alt="mask"
            width={600}
            height={400}
            loading="eager"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
