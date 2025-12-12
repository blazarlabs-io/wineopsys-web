'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorkShapeRight: React.FC = () => {
  return (
    <>
      <div className="relative">
        {/* Shape Bottom Gray */}
        <motion.div 
          className="pointer-events-none absolute right-[-409px] top-[-180px] w-[500px] sm:w-[715px] z-0"
          initial={{ y: -1, rotate: -2 }}
          animate={{ y: [ -27, 10, -30 ], rotate: [ -3, 3, -3 ] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/object-left.svg"
            alt="object-right"
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

export default HowItWorkShapeRight;

