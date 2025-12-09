'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImageRight: React.FC = () => {
  return (
    <>
      <motion.div
        className="
          absolute w-[317px] 
          top-[-32px] left-[182px]
          sm:left-[425px] sm:top-[-118px] sm:w-[726px]
          lg:top-[-58px] lg:left-auto lg:ml-[655px] lg:w-full lg:max-w-[700px]"

        initial={{ y: 10, scale: 1 }}
        animate={{ y: [-5, 20, -5], scale: [1, 1.03, 1] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Image
          src="/vineyard-full-hero.png"
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

export default HeroImageRight;

