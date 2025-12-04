'use client'
import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { heroContainer } from "@/lib/motion/heroVariants";
import { cardVariants } from "@/lib/motion/common";
import { motion } from "framer-motion";
import Image from "next/image";

const featureTiles = [
  {
    title: "End-to-end supply chain tracking for wine production",
    body:
      "Maintains a linked record for each wine lot from vineyard block through fermentation, bottling, storage, and dispatch.",
  },
  {
    title: "Real-time single source of truth",
    body:
      "Provides one live view of volumes, movements, and status for winemakers, managers, and finance.",
  },
  {
    title: "Proactive planning via demand and supply mapping",
    body:
      "Aligns planned sales, available stock, and upcoming harvest so production plans can be made early and adjusted with confidence.",
  },
  {
    title: "Timeline and custom task management system",
    body:
      "Structures vineyard and cellar work into tasks with timing, owners, and status across all production stages.",
  },
  {
    title: "Custom smart action framework",
    body:
      "Turns complex procedures into guided, reusable actions that reflect the winery’s own methods and standards.",
  },
  {
    title: "Flexible reporting",
    body:
      "Generates compliance registers, operational summaries, and management reports directly from structured production data.",
  },
];

const MotionCard = motion(Card);

const Features: React.FC = () => {
  return (
    <section id="features" className=" mx-auto px-5 max-w-[1028px]">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between">
        <div>
          <motion.h2 
            className="text-[35px] font-medium leading-[54px] relative z-10"
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Key Features
          </motion.h2>
        </div>
      </div>

      <motion.span 
        className="w-full h-0.5 bg-[#66243E] flex mt-[17px] relative z-10"
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      ></motion.span>

      <div className="grid gap-4 md:grid-cols-3 mt-[37px]">
        {featureTiles.map((feature, index) => (
          <MotionCard
            key={feature.title}
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="
              group flex h-full flex-col relative
              bg-white 
              shadow-[0_2px_6px_rgba(0,0,0,0.12)]
              transition-all duration-500
              hover:-translate-y-0.5
              hover:shadow-[0_6px_16px_rgba(0,0,0,0.16)]
              hover:bg-[#66243E] py-6 gap-0
              overflow-hidden z-10
            "
          >
            {/* Decorative SVG Shape */}
            <Image
              src="/shapes/feature-item-shape.svg"
              alt=""
              width={103}
              height={99}
              className="
                absolute left-0 top-0 z-0
                pointer-events-none 
                select-none
                transition-opacity duration-500
                opacity-100
                group-hover:opacity-0
              "
            />

            {/* Shape hover  */}
            <Image
              src="/shapes/feature-item-shape-color.svg"
              alt=""
              width={103}
              height={99}
              className="
                absolute left-0 top-0 z-0
                pointer-events-none 
                select-none
                transition-opacity duration-500
                opacity-0
                group-hover:opacity-100
              "
            />

            <CardHeader className="z-20">
              <CardTitle className="text-sm sm:text-[20px] sm:leading-6 font-medium text-[#66243E] group-hover:text-white">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-xs leading-relaxed sm:text-[14px] sm:leading-4 text-[#66243E] group-hover:text-white z-10">
              {feature.body}
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export default Features;