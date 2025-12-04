'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamShapeLeft: React.FC = () => {
  return (
    <>
      <motion.div
        className="hidden xl:flex absolute w-full max-w-[500px] sm:max-w-[715px] top-0 xl:top-[304px] ml-5 xl:ml-[-658px] z-0"
        initial={{ y: -2, rotate: -2 }}
        animate={{ y: [ -60, 20, -40 ], rotate: [ -8, 3, -6 ] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="shapes/object-gray-romb.svg"
          alt="object-left"
          width={715}
          height={715}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default TeamShapeLeft;

