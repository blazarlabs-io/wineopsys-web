'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroModulesImageVineyard: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-[317px] 
          top-[-32px] left-[182px]
          sm:left-[425px] sm:top-[-118px] sm:w-[726px]
          lg:top-[-28px] lg:left-auto lg:ml-[855px] lg:w-full lg:max-w-[266px]"

        initial={{ y: 8, scale: 1 }}
        animate={{
          x: [0, 12, 20, 12, 0, -12, 0],
          y: [-18, -10, 0, 10, 18, 10, -18],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src="/modules/vineyard.png"
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

export default HeroModulesImageVineyard;

