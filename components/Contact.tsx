"use client";

import { socialMedia } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import MagicButton from "./ui/magic-button";

const Contact = () => {
  return (
    <div
      className="py-20 border-b border-border flex flex-col gap-5"
      id="contact"
    >
      <motion.div
        className="text-center space-y-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="uppercase text-xs tracking-widest text-blue-500 font-semibold">
          My Socials
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Let&apos;s <span className="text-blue-500">Connect </span>
        </h2>
      </motion.div>
      <div className="flex flex-col gap-5 md:flex-row lg:flex-row justify-center">
        {socialMedia.map((s) => (
          <MagicButton
            key={s.id}
            title={s.title}
            icon={s.icon}
            position="left"
            handleClick={() => {
              window.open(s.link, "_blank");
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
