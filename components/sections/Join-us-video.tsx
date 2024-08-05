"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "../ui/button";
type Props = {};

function JoinUsVideoSection({}: Props) {
  return (
    <div className="relative">
      <div className="h-[600px]">
        <video
          className="w-full h-full object-cover brightness-75"
          src="/home-careers.mp4"
          autoPlay
          muted
          loop
          width={720}
          height={480}
        ></video>
      </div>
      <div className="flex absolute top-[50%] w-full tex-center justify-center">
        <div className="flex flex-col text-3xl xs:text-xl  md:text-5xl lg:text-5xl font-bold">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="div text-center"
          >
            <h1 className="">Your next starts right here</h1>
          </motion.div>
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full">Join Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsVideoSection;
