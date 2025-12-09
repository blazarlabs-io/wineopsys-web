'use client';

import { Button } from "@/components/ui/button";
import { heroContainer } from "@/lib/motion/heroVariants";
import { motion } from "framer-motion";
import HeroShapeLeft from "@/components/HeroShapeLeft";
import HeroShapeTop from "@/components/HeroShapeTop";
import HeroImageRight from "@/components/HeroImageRight";
import HeroShapeBottom from "@/components/HeroShapeBottom";

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Hero() {
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
                xl:text-[50px] xl:leading-[54px]
                "

              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              The Digital Command Center for Wineries.
            </motion.h1>

            {/* object-top */}
            <HeroShapeTop />

            {/* object-right */}
            <HeroImageRight />

            {/* object-bottom */}
            <HeroShapeBottom />

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
              From grape to bottle, one system that orchestrates production, orders, traceability, and real-time decisions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-[15px] lg:gap-[35px] mt-[30px] lg:mt-[63px] relative z-10"
              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-[#66243E] px-[22px] text-[20px] leading-[24px] font-medium text-white hover:bg-[#66243E] cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Request a Demo
              </Button>

              <a
                href="/files/overview.pdf"
                download
                className="text-[18px] lg:text-[20px] font-medium text-[#66244e] underline-offset-4 hover:underline cursor-pointer"
              >
                Download overview / PDF
              </a>
            </motion.div>

          </div>

          <div />
        </div>
      </div>

    </section>

  );
};