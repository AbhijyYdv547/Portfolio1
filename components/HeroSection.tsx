"use client";

import { BackgroundBeams } from "./ui/background-beams";
import { heroLinks } from "@/constants/index";
import MagicButton from "./ui/magic-button";

const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-col items-center mt-12 sm:mt-16 lg:mt-24 text-center"
        id="hero"
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
          Abhijay Yadav
        </h1>
        <h2 className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-xl sm:text-3xl mt-2 font-medium">
          Fullstack Developer & DevOps Enthusiast
        </h2>
        <p className="mt-6 text-base sm:text-lg text-neutral-500 max-w-3xl">
          I build fast, scalable, and well-architected web apps. I care deeply
          about user experience, performance, and clean design.
        </p>

        <div className="flex flex-wrap justify-center mt-8 gap-4">
          {heroLinks.map((s) => (
            <MagicButton
              key={s.id}
              title={s.title}
              icon={s.icon}
              position="left"
              handleClick={() => {
                window.open(s.link, "_blank", "noopener,noreferrer");
              }}
            />
          ))}
        </div>
      </div>

      <div className="py-24 bg-background text-foreground border-b border-border"></div>
      <BackgroundBeams />
    </>
  );
};

export default HeroSection;
