'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageWinemaker: React.FC = () => {
  return (
    <>
      <div className="relative">
        <motion.div 
          className="pointer-events-none absolute right-[-1009px] top-[-200px] w-[735px] z-0"
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
            src="/winemaker.png"
            alt="winemaker"
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

export default ImageWinemaker;

