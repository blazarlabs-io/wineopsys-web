'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroModulesShapeBottom: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-full max-w-[418px] 
          top-[435px] ml-[255px]
          sm:top-[435px] sm:ml-[55px]
          lg:ml-[290px] lg:max-w-[418px]
          xl:top-[300px]"

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

export default HeroModulesShapeBottom;

