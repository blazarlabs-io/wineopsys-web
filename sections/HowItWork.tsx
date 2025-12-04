'use client'

import { FC } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroContainer } from "@/lib/motion/heroVariants";
import { cardVariants } from "@/lib/motion/common";
import HowItWorkShape from "@/components/HowItWorkShape";
import HowItWorkShapeRight from "@/components/HowitWorkShapeRight";

const moduleGroups = [
  {
    title: "Vineyards",
    icon: "/icons/vineyards.svg",
    description:
      "Vineyards — Field data meets compliance.",
  },
  {
    title: "Grapes",
    icon: "/icons/grapes.svg",
    description:
      "Grapes — Batch intake and quality control.",
  },
  {
    title: "Wine Production",
    icon: "/icons/wine-production.svg",
    description:
      "Wine Production — Primary + Secondary vinification.",
  },
  {
    title: "Order Management",
    icon: "/icons/order-management.svg",
    description:
      "Order Management — Supply and fulfillment. ",
  },
  {
    title: "Vessel Management",
    icon: "/icons/vessel-management.svg",
    description:
      "Vessel Management — Tanks, barrels, capacity. ",
  },
  {
    title: "Consumables",
    icon: "/icons/consumables.svg",
    description:
      "Consumables — Chemistry and expendables. ",
  },
  {
    title: "Storage",
    icon: "/icons/storage.svg",
    description:
      "Storage — Warehouse stock tracking.",
  },
  {
    title: "Team & Taskspes",
    icon: "/icons/team-tasks.svg",
    description:
      "Team & Tasks — Assignments and progress. ",
  },
  {
    title: "Reports",
    icon: "/icons/reports.svg",
    description:
      "Reports — Analytics and declarations. ",
  },
  {
    title: "Documents",
    icon: "/icons/documents.svg",
    description:
      "Documents — Centralized file hub.",
  },
];

const MotionCard = motion(Card);

const HowItWork: FC = () => {
  return (
    <section
      id="how-it-works"
      className="mx-auto mt-[100px] max-w-[1028px] px-5 z-20"
    >
      <div className="w-full space-y-3 relative">
        <motion.h2 
          className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px] z-10 relative"
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          How It Works – from grape to bottle
        </motion.h2>
        <motion.span 
          className="mt-[17px] flex h-0.5 w-full bg-[#66243E] relative z-10" 
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        />
        <motion.p 
          className="max-w-[500px] text-sm text-[#66243E] lg:text-[20px] lg:leading-6 relative z-10"
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          WineOpSys turns the winery production flow into modular, connected
          blocks that can be activated step by step.
        </motion.p>
         <HowItWorkShapeRight />
      </div>

      {/* Module cards */}
      <div className="mt-[50px] grid gap-x-[126px] gap-y-[55px] md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {moduleGroups.map((group, index) => (
          <MotionCard
            key={group.title}
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative group flex items-center rounded-[22px] border border-[#E8C7D3] bg-[#FFF9FB] hover:bg-[#66243E] px-8 pr-[54px] pt-4 shadow-[0_10px_30px_rgba(102,36,62,0.12)]"
          >
            {/* Icon overlapped on the left */}
            <div className="absolute left-[-45px] top-1/2 flex h-[90px] w-[90px] -translate-y-1/2 items-center justify-center rounded-2xl bg-[#C27A8F]">
              <Image
                src={group.icon}
                alt={group.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            {/* Content inside card */}
            <div className="ml-[70px] flex flex-col w-full items-start justify-between gap-6">
              <div>
                <CardTitle className="text-[22px] font-medium text-[#66243E] group-hover:text-white leading-[26px]">
                  {group.title}
                </CardTitle>

                <p className="mt-1 text-[14px] leading-4 text-[#66243E] group-hover:text-white">
                  {group.description}
                </p>
              </div>

              <Button
                variant="outline"
                className="
                  self-end rounded-full
                  border border-[#C27A8F]
                  bg-white                    /* buton alb by default */
                  px-6 py-1 text-sm font-medium
                  text-[#66243E]
                  transition-colors

                  /* group hover */
                  group-hover:border-transparent

                  /* button hover */
                  hover:bg-[#FDEFF4]
                  hover:text-[#66243E]
                "
              >
                Details
              </Button>
            </div>
          </MotionCard>
        ))}

      </div>

      <HowItWorkShape />

    </section>
  );
};

export default HowItWork;
