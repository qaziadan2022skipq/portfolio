"use client";

import Image from "next/image";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20 flex items-center">
      <div className="flex  flex-col w-full mx-16 items-center justify-center">
        <Image className="rounded-full border-sky-400 border-8" src={"/Adan.png"} height={250} width={250} alt="Adan Image" />
        <h1 className="text-5xl font-semibold my-6">
          Hi, I'm Qazi Adan
        </h1>
        <div className="text-[1.6rem] mt-6 lg:mt-0 md:text-6xl font-bold lg:text-6xl text-sky-400">
          <TypewriterComponent
            options={{
              strings: ["A Fullstack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-2xl mt-4 font-light">Specialized in Next-Js for scalable web applications.</p>
      </div>
    </div>
  );
};

export default HeroSection;
