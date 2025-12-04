'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroShapeLeft: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute w-full max-w-[857px] top-[-172px] ml-[-700px] z-0"
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

