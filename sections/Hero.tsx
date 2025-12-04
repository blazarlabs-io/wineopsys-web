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
    <section id="home" className="relative flex pt-20">
      {/* CONTAINER TEXT */}
      <div className="mx-auto px-5 max-w-[1028px] mb-[150px]">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* object-left */}
            <div className="absolute w-full max-w-[857px] top-[-172px] ml-[-700px] z-0">
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
            <h1 className="relative mt-[150px] text-3xl font-medium leading-[54px] tracking-tight sm:text-4xl md:text-[50px] lg:w-[526px] z-10">
              The Digital Command Center for Wineries.
            </h1>

            {/* object-top */}
            <div className=" absolute w-full max-w-[421px] top-[-202px] ml-[330px] ">
              <Image
                src="/object-top.svg"
                alt="object-top"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"
                priority
              />
            </div>

            {/* object-right */}
            <div className=" absolute w-full max-w-[700px] top-[-58px] ml-[655px] ">
              <Image
                src="/vineyard-full-hero.png"
                alt="object-right"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"
                priority
              />
            </div>

            {/* object-bottom */}
            <div className=" absolute w-full max-w-[521px] top-[380px] ml-[290px] ">
              <Image
                src="shapes/object-gray-romb.svg"
                alt="object-top"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"
                priority
              />
            </div>

            <p className="relative max-w-xl text-sm mt-[41px] leading-[24px] text-[#66244E] md:text-[20px] z-10">
              From grape to bottle, one system that orchestrates production, orders, traceability, and real-time decisions.
            </p>

            <div className="flex flex-wrap items-center gap-[35px] mt-[63px] relative z-10">
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
            </div>

          </div>

          <div />
        </div>
      </div>

    </section>

  );
};