import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Portfolio Avatar.png"
            className="size-[250px]  rounded-full transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl mt-10"
            alt="Image"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-[800px] gap-4 items-center justify-center"
        >
          <h1 className="title md:text-4xl text-3xl">Brahma Reddy Bachu</h1>
          <h2 className="text-lg font-medium bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text transition-all duration-300 opacity-100 hover:opacity-80">
            Aspiring DevOps Engineer
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-center px-2 sm:px-5">
          Dedicated System Administrator with 2 years of hands-on experience in managing and maintaining IT infrastructure, seeking to transition into a DevOps role. 
          Strong foundation in system administration combined with emerging skills in DevOps practices and tools. 
          Let's collaborate to build something exceptional!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
