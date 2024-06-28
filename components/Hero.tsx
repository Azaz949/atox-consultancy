"use client";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubGlobe } from "./GitHubGlobe";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
      id="home"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
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
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Digital Transformation Across the Globe
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
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

      {/* Hero cards sections */}
      {/* <div className="z-10"><HeroCards /></div> */}
      <div className="z-10">
        <GitHubGlobe />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
