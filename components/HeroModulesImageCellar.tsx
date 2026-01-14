'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroModulesImageCellar: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-[317px] 
          top-[-32px] left-[182px]
          sm:left-[425px] sm:top-[-118px] sm:w-[726px]
          lg:top-[158px] lg:left-auto lg:ml-[1055px] lg:w-full lg:max-w-[266px]"

        initial={{ y: 3, scale: 1 }}
        animate={{
          x: [-8, 12, -8],
          y: [4, -6, 4],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src="/modules/cellar.png"
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

export default HeroModulesImageCellar;

