'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorkShape: React.FC = () => {
  return (
    <>
      <div className="relative">
        {/* Shape Bottom Gray */}
        <motion.div 
          className="pointer-events-none absolute right-[209px] top-[-320px] w-[457px] z-0"
          initial={{ y: -2, rotate: -2 }}
          animate={{ y: [ -25, 10, -30 ], rotate: [ -7, 3, -5 ] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/shapes/object-gray-romb.svg"
            alt="object-bottom-gray"
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

export default HowItWorkShape;