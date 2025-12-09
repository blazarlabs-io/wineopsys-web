'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroShapeLeft: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute z-0 w-[525px]
          top-[10px] ml-[-371px] 
          md:top-[14px] md:ml-[-371px]  
          lg:top-[-14px] lg:ml-[-300px] lg:max-w-[857px] 
          xl:top-[-152px] xl:ml-[-700px] xl:w-[857px]"

        initial={{ y: -10, rotate: -2 }}
        animate={{ y: [ -20, 10, -20 ], rotate: [ -3, 3, -3 ] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/object-left.svg"
          alt="object-left"
          width={900}
          height={1200}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default HeroShapeLeft;

