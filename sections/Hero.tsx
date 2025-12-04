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
      <div className="mx-auto px-5 max-w-[1028px] mb-[150px]">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* object-left */}
          <HeroShapeLeft />
          
          {/* TEXT */}
          <div className="">
            <motion.h1 
              className="relative mt-[150px] text-3xl font-medium leading-[54px] tracking-tight sm:text-4xl md:text-[50px] lg:w-[526px] z-10"
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
              className="relative max-w-xl text-sm mt-[41px] leading-6 text-[#66244E] md:text-[20px] z-10"
              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              From grape to bottle, one system that orchestrates production, orders, traceability, and real-time decisions.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center gap-[35px] mt-[63px] relative z-10"
              variants={heroContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Button
                size="lg"
                className="rounded-full bg-[#66243E] px-7 text-sm font-medium text-white hover:bg-[#66243E] cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Request a Demo
              </Button>

              <a
                href="/files/overview.pdf"
                download
                className="text-[20px] font-medium text-[#66244e] underline-offset-4 hover:underline cursor-pointer"
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