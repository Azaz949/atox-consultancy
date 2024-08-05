"use client";
import React from "react";
import { BlurFadeTextDemo } from "../magicui-blocks/BlureFadeTextDemo";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "../ui/button";

type Props = {};

function HeroVideo({}: Props) {
  return (
    <div className="relative h-screen overflow-hidde">
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75 "
        src="/video2.mp4"
        autoPlay
        muted
        loop
        width={1920}
        height={720}
      ></video>
      <div className="absolute top-[60%] ml-20">
        <div className="text-4xl xs:text-xl md:text-5xl lg:text-7xl font-extrabold ">
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
            className="div"
          >
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                Atox
              </span>{" "}
              Consulting
            </h1>{" "}
            <br />
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Innovative
              </span>{" "}
              Solutions
            </h2>
          </motion.div>
        </div>
        {/* <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Digital Transformation Across the Globe
        </p> */}

        <div className="space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="#"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;
