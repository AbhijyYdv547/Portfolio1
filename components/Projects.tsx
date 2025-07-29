"use client";

import { projects } from "@/constants/index";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="py-20 border-b border-border" id="projects">
      <motion.div
        className="text-center space-y-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="uppercase text-xs tracking-widest text-blue-500 font-semibold">
          Projects Section
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Recent <span className="text-blue-500">Projects </span> by Me
        </h2>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-2">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[30vh] mb-10 sm:h-[40vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={img} alt="bg-img" width={800} height={500} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                  width={800}
                  height={500}
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl font-light text-sm line-clamp-2 lg:font-normal">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-gray-900 rounded-full bg-white lg:w-10 flex justify-center items-center w-8 h-8"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={800}
                        height={500}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xs md:text-sm text-sm text-purple">
                    Checkout Project
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
