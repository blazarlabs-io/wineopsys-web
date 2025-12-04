'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageGlass: React.FC = () => {
  return (
    <>
      <div className="relative">
        <motion.div 
          className="pointer-events-none absolute right-[-329px] top-[250px] w-[297px] z-0"
          initial={{ y: -1, rotate: -2 }}
          animate={{ y: [ -20, 10, -20 ], rotate: [ -3, 3, -3 ] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/glass.png"
            alt="object-glass"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </motion.div>
      </div>
    </>
  );
};

export default ImageGlass;

