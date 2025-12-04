'use client'

import React from "react";
import { heroContainer } from "@/lib/motion/heroVariants";
import { cardVariants } from "@/lib/motion/common";
import { motion } from "framer-motion";
import TeamShapeLeft from "@/components/TeamShapeLeft";
import TeamShapeRight from "@/components/TeamShapeRight";

const team = [
  {
    name: "Tudor Cotruta",
    role: "Co-founder, CEO",
    bio: "Entrepreneur with over 15 years of experience and deep involvement in the Moldovan wine ecosystem. Responsible for vision, stakeholder relationships, and business development for WineOpSys.",
    image: "/team/person1.png",
  },
  {
    name: "Alexandr Avanesean",
    role: "Co-founder, Marketing & Operations",
    bio: "Second-generation wine family background and experience as business developer in a leading spirits producer and brand manager for a multi-country FMCG portfolio. Leads marketing, operations, and partner coordination.",
    image: "/team/person2.png",
  },
  {
    name: "Sorin Canter",
    role: "Co-founder, CPTO",
    bio: "Over 20 years in commercial software delivery in technical and leadership roles. Responsible for product architecture, delivery, and integration of WineOpSys into real winery environments.",
    image: "/team/person3.png",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative mx-auto mt-[100px] max-w-[1028px] px-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between z-10 relative">
        <div>
          <motion.h2 
            className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px]"
            variants={heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            Team
          </motion.h2>
        </div>
      </div>

      <motion.span 
        className="mt-[17px] block h-0.5 w-full bg-[#66243E]" 
        variants={heroContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      />

      {/* object-left */}
      <TeamShapeLeft />

      {/* object-right */}
      <TeamShapeRight />

      <div className="mt-[70px] space-y-16 flex flex-col items-center">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center gap-6 lg:gap-[42px] md:flex-row lg:max-w-[655px]"
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Portrait */}
            <div className="shrink-0">
              <div className="relative h-[197px] w-[197px] overflow-hidden rounded-[40px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Divider + Text */}
            <div className="flex w-full h-full items-stretch gap-6 md:gap-[42px]">
              <span className="hidden h-[190px] w-px bg-[#CBA2A6] md:block" />
              <div className="text-left">
                <p className="text-[24px] font-medium leading-8 text-[#66243E]">
                  <span className="block">{member.name.split(" ")[0]}</span>
                  <span className="block">
                    {member.name.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <p className="mt-1 text-sm font-medium text-[#CBA2A6]">
                  {member.role}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#66243E]">
                  {member.bio}
                </p>

               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
