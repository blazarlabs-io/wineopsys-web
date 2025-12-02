'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    <section id="home" className="relative overflow-hidden flex ">
      {/* CONTAINER TEXT */}
      <div className="mx-auto px-5 max-w-[1028px] mb-[150px]">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* object-left */}
            <div className="absolute w-full max-w-[500px] sm:max-w-[857px] top-0 xl:top-[-232px] ml-5 xl:ml-[-731px] z-0">
              <Image
                src="/object-left.svg"
                alt="object-left"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"
                priority
              />
            </div>
          
          {/* TEXT */}
          <div className="">
            <h1 className="relative mt-[150px] text-3xl font-medium leading-[54px] tracking-tight sm:text-4xl md:text-[50px] z-10">
              The Digital Command Center for Wineries.
            </h1>

            {/* object-top */}
            <div className="hidden xl:flex absolute w-full max-w-[421px] top-[-302px] ml-[350px] ">
              <Image
                src="/object-top.svg"
                alt="object-top"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"
                priority
              />
            </div>

            <p className="relative max-w-xl text-sm mt-[41px] leading-[24px] text-[#66244E] md:text-[20px] z-10">
              From grape to bottle, one system that orchestrates production, traceability, and real-time decisions.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-[63px] relative z-10">
              <Button
                size="lg"
                className="rounded-full bg-[#66243E] px-7 text-sm font-semibold text-white hover:bg-[#66243E"
                onClick={() => scrollToSection("contact")}
              >
                Request a Demo
              </Button>

              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-[#66244e] underline-offset-4 hover:underline"
              >
                Download overview / PDF
              </button>
            </div>

          </div>

          {/* SPACER GRID */}
          <div />
        </div>
      </div>

      {/* Image right */}
      <div className="hidden xl:flex absolute w-full max-w-[700px] top-[-142px] right-[-137px] z-10">
        <Image
          src="/vineyard-hero.png"
          alt="Wine vineyard at sunset" 
          width={900}
          height={1200}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </div>

    </section>

  );
};