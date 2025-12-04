'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroShapeBottom: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute w-full max-w-[521px] top-[380px] ml-[290px]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      >
        <Image
          src="shapes/object-gray-romb.svg"
          alt="object-bottom"
          width={900}
          height={1200}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default HeroShapeBottom;

