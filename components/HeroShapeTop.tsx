'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroShapeTop: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute w-full max-w-[421px] top-[-202px] ml-[330px]"
        initial={{ y: 0, rotate: 0 }}
        animate={{ y: [5, -15, 5], rotate: [1, -2, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <Image
          src="/object-top.svg"
          alt="object-top"
          width={900}
          height={1200}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default HeroShapeTop;

