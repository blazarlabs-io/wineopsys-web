'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamShapeRight: React.FC = () => {
  return (
    <>
      <motion.div
        className="hidden xl:flex absolute w-full max-w-[300px] sm:max-w-[500px] top-0 xl:top-[164px] ml-5 xl:ml-[869px] z-0"
        initial={{ y: -1, rotate: -2 }}
        animate={{ y: [ -60, 20, -40 ], rotate: [ -8, 3, -6 ] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/object-left.svg"
          alt="shape-right"
          width={715}
          height={715}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </motion.div>
    </>
  );
};

export default TeamShapeRight;

