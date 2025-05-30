import React from "react";
import Image from "next/image";
import Penny from "@/assets/images/5.svg";
import Yen from "@/assets/images/yen.svg";

export const HeroSection = () => {
  return (
    <section className="mt-16 bg-neutral-100 rounded-[40px] max-md:pl-5 max-md:mt-10 max-md:max-w-full" aria-label="Hero section">
      <div className="flex gap-5 items-center justify-around max-md:flex-col" aria-label="Hero section content">
        <Image src={Penny} alt="Penny" className="w-1/2" />
        <div className="w-[42%] max-md:ml-0 max-md:w-full">
          <h1 className="self-stretch my-auto text-4xl font-bold text-black max-md:mt-10" aria-label="Hero section title">
            Point Exchange
          </h1>
        </div>
        <div className="ml-5 w-[58%] max-md:ml-0 max-md:w-full">
          <Image
            src={Yen}
            alt="Point Exchange illustration"
            className="object-contain z-10 grow mr-0 w-full aspect-[3.04] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
