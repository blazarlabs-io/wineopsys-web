'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroModulesImageLaptop: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-[317px] 
          top-[-32px] left-[182px]
          sm:left-[425px] sm:top-[-118px] sm:w-[726px]
          lg:top-[328px] lg:left-auto lg:ml-[855px] lg:w-full lg:max-w-[266px]"

        initial={{ y: 5, scale: 1 }}
        animate={{
          x: [0, -5, 0, 5, 0],
          y: [-6, 0, 6],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src="/modules/laptop.png"
          alt="object-right"
          width={900}
          height={1200}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default HeroModulesImageLaptop;

