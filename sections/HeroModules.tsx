'use client';

import { Button } from "@/components/ui/button";
import { heroContainer } from "@/lib/motion/heroVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroShapeLeft from "@/components/HeroShapeLeft";
import HeroModulesImageVineyard from "@/components/HeroModulesImageVineyard";
import HeroModulesImageVinemaker from "@/components/HeroModulesImageVinemaker";
import HeroModulesShapeBottom from "@/components/HeroModulesShapeBottom";
import HeroModulesImageLaptop from "@/components/HeroModulesImageLaptop";
import HeroModulesImageCellar from "@/components/HeroModulesImageCellar";

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function HeroModules() {
  return (
    <section id="home" className="relative flex pt-20">
      {/* CONTAINER TEXT */}
      <div className="mx-auto w-full px-6 xl:px-0 max-w-[1028px] mb-[100px] lg:mb-[150px]">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* object-left */}
          <HeroShapeLeft />
          
          {/* TEXT */}
          <div className="">
            <motion.h1 
              className="
                relative mt-[200px] z-10 text-[35px] font-medium leading-[42px] max-w-[320px]
                sm:mt-[150px]
                md:mt-[150px] 
                xl:text-[50px] xl:leading-[54px] xl:max-w-none
                "
              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              Core Operational Modules
            </motion.h1>

            <div className="hidden lg:block">
              {/* object-right Vinemaker */}
              <HeroModulesImageVinemaker />

              {/* object-right Laptop */}
              <HeroModulesImageLaptop />

              {/* object-right Laptop */}
              <HeroModulesImageVineyard />

              {/* object-right Laptop */}
              <HeroModulesImageCellar />
            </div>

            {/* object-bottom */}
            <HeroModulesShapeBottom />


            <motion.p 
              className="
                relative text-[#66244E] z-10 max-w-[531px] 
                text-[18px] mt-[20px] leading-[21px]
                lg:mt-[41px] lg:leading-6  md:text-[20px]"

              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              WineOpSys is a modular, end-to-end system with an intuitive interface for different winery roles, keeping one continuous data flow from vineyard to bottle.
            </motion.p>

            

          </div>

          <div />
        </div>
      </div>

    </section>

  );
};