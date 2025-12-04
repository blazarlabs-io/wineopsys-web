'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImageRight: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute w-full max-w-[700px] top-[-58px] ml-[655px]"
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

