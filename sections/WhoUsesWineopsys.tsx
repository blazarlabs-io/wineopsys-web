'use client'

import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { heroContainer } from "@/lib/motion/heroVariants";
import { cardVariants } from "@/lib/motion/common";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageGlass from "@/components/ImageGlass";
import ImageWinemaker from "@/components/ImageWinemaker";

const personas1 = [
  {
    id: 1,
    role: "Winery owners and CEOs",
    gain:
      "See a consolidated picture of production, stock, and orders across sites to support investment and growth decisions.",
  },
  {
    id: 2,
    role: "Head winemakers",
    gain:
      "Follow each lot from vineyard to bottle, reviewing operations, lab results, and interventions in one environment.",
  },
];

const personas2 = [
  {
    id: 3,
    role: "Cellar and production managers",
    gain:
      "Plan and coordinate work across shifts and teams with clear timelines, task lists, and capacity awareness.",
  },
  {
    id: 4,
    role: "Finance and accounting",
    gain:
      "Receive structured production data that can be aligned with accounting platforms and cost models.",
  },
  {
    id: 5,
    role: "Quality and compliance teams",
    gain:
      "Access traceable histories and standardised reports that support inspections, certifications, and export requirements.",
  },
];

const MotionCard = motion.create(Card);

const WhoUsesWineopsys: React.FC = () => {
  return (
    <section id="who-uses" className="mx-auto px-5 max-w-[1028px] mt-[100px] relative">
      <motion.div 
        className="w-full space-y-3"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-2xl leading-[30px] font-medium md:text-[35px] md:leading-[54px] z-20">
          Who Uses WineOpSys
        </h2>
        <span className="w-[550px] h-0.5 bg-[#66243E] flex mt-[28px] sm:mt-[17px]"></span>
        <p className="text-[18px] leading-[21px] lg:text-[20px] lg:leading-6 text-[#66243E] max-w-[550px] mt-[27px] mb-[351px] sm:mb-0">
          WineOpSys mirrors the real production flow of a winery and digitises it in modular blocks. Each module can be activated when the winery is ready, while data stays connected across the full process.
        </p>
      </motion.div>
      <div className="grid gap-[38px]  mt-[70px] lg:max-w-[320px] relative">
        {/* Image Glass Center */}
        <ImageGlass />

        {/* Image Winemaker Right */}
        <ImageWinemaker />
        
        {personas1.map((persona, index) => (
          <MotionCard
            key={persona.role}
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="h-full border-0 bg-white shadow-none"
          >
            <div className="flex relative">
              <div className="relative h-[82px] w-[82px] rotate-45 rounded-[24px] bg-[#6B1F3A] ml-7 z-10">
                <span className="absolute inset-0 flex -rotate-45 items-center justify-center text-[42px] font-bold text-white leading-[50px]">
                  {persona.id}
                </span>
              </div>
              <div className="pointer-events-none absolute right-[81px] top-[54px] w-[154px] z-0">
                <Image
                  src="/object-left.svg"
                  alt="object-left"
                  width={900}
                  height={1200}
                  className="w-full h-auto rounded-[60px]"  
                  priority
                />
              </div>
              <CardHeader className="pb-2 z-10 relative">
                <CardTitle className="text-[22px] font-medium leading-[26px] text-[#66243E]">
                  {persona.role}
                </CardTitle>
              </CardHeader>
            </div>
            <CardContent className="pt-0 text-[14px] leading-4 text-[#66243E] z-10 relative">
              {persona.gain}
            </CardContent>
          </MotionCard>
        ))}
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mt-21">
        {personas2.map((persona, index) => (
          <MotionCard
            key={persona.role}
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="h-full border-0 bg-white shadow-none"
          >
            <div className="flex relative">
              <div className="relative h-[82px] w-[82px] rotate-45 rounded-[24px] bg-[#6B1F3A] ml-7 z-10">
                <span className="absolute inset-0 flex -rotate-45 items-center justify-center text-[42px] font-bold text-white leading-[50px]">
                  {persona.id}
                </span>
              </div>
              <div className="pointer-events-none absolute right-[81px] top-[54px] w-[154px] z-0">
                <Image
                  src="/object-left.svg"
                  alt="object-left"
                  width={900}
                  height={1200}
                  className="w-full h-auto rounded-[60px]"  
                  priority
                />
              </div>
              <CardHeader className="pb-2 z-10 relative">
                <CardTitle className="text-[22px] font-medium leading-[26px] text-[#66243E]">
                  {persona.role}
                </CardTitle>
              </CardHeader>
            </div>
            <CardContent className="pt-0 text-[14px] leading-4 text-[#66243E] z-10 relative">
              {persona.gain}
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default WhoUsesWineopsys;