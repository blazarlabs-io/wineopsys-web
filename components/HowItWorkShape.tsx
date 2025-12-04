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
          initial={{ y: -10, rotate: -2 }}
          animate={{ y: [ -20, 10, -20 ], rotate: [ -3, 3, -3 ] }}
          transition={{
            duration: 35,
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