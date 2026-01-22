'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemFromBottom } from "@/lib/motion/common";
import { heroContainer } from "@/lib/motion/heroVariants";

type ImageSpec = {
  src: string;
  classnames?: string;
  alt?: string;
};

type CardSpec = {
  title: string;
  items: string[];
  classnames?: string;
};

type ShapeSpec = {
  src: string;
  classnames?: string;
  alt?: string;
};

export type UniversalSectionProps = {
  id: string;
  cards: CardSpec[];
  shapes?: ShapeSpec[];
  className?: string;
  heading?: React.ReactNode;
  headingIcon?: React.ReactNode;
  leftHeroimage?: string;
  rightHeroimage?: string;
};

function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Universal section that supports:
 * - 2 hero images (left/right) with optional decorative shapes
 * - A responsive grid of content cards
 */
export default function CardsSection({
  id,
  cards,
  shapes = [],
  className,
  headingIcon,
  heading,
  leftHeroimage,
  rightHeroimage
}: UniversalSectionProps) {
  return (
    <section 
      id={id} className={cn("w-full", className)}
      
      >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER */}
        <div className="mt-[45px] flex w-full">
          <div className="flex h-[49px] sm:h-[90px] w-[49px] sm:w-[90px] items-center justify-center rounded-2xl bg-[#C27A8F] shrink-0">
            <Image
              src={headingIcon as string || "/icons/vineyards.svg"}
              alt={heading as string || "section-icon"}
              width={32}
              height={32}
              className="
                object-contain
                w-[21px] h-[21px]
                sm:w-[39px] sm:h-[39px]
              "
            />
          </div>
          <div className="flex items-center ml-[28px] w-full border-b-2 border-[#C27A8F]">
            <h2 className="font-medium sm:text-[35px] leading-[54.57px]">
              {heading}
            </h2>
          </div>
        </div>

        {/* HERO */}
        <div className="flex items-center flex-col md:flex-row lg:overflow-x-hidden mt-[54px]">
          {/* object-Laptop */}
            <div className="
              relative w-full shrink-0 max-w-[445px] lg:max-w-none
              lg:w-[580px] z-20 md:translate-x-[100px]
              ">
              <Image
                src={leftHeroimage || "/laptop.png"}
                alt="object-laptop-shape"
                width={900}
                height={1200}
                className="w-full h-auto"
                priority
              />
          </div>

          {/* Images block */}
          <div className="flex md:translate-x-[-100px]">
            {/* Image vineyard */}
            <div 
              className="
                 w-[446px] z-10"
            >
              <Image
                src={rightHeroimage || "/modules/vineyard-management.png"}
                alt="object-image"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px]"  
                priority
              />
            </div>

            {/* UNDER IMAGE SHAPE */}
            <div className="w-[445px] relative left-[-350px] z-0">
              <Image
                src="shapes/object-color-romb.svg"
                alt="object-bottom"
                width={900}
                height={1200}
                className="w-full h-auto rounded-[60px] absolute "
                priority
              />
            </div>
          </div>
          
        </div>

        {/* SECTION SHAPES */}
        <div className="absolute">
          {/* Decorative shapes (absolute) */}
          {shapes.map((s, idx) => (
            <Image
              src={s.src || "/shapes/object-gray-romb.svg"}
              alt="object-bottom-gray"
              key={idx}
              width={542}
              height={542}
              className={cn("relative", s.classnames)}  
              priority
            />
          ))}
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className={cn(
                "relative rounded-2xl border bg-background px-7 py-[42px] shadow-sm",
                "overflow-x-hidden",
                "sm:last:odd:col-span-2 sm:last:odd:justify-self-center sm:last:odd:w-[calc(50%-0.75rem)]",
                card.classnames
              )}
            >
              {/* Shape */}
              <div className="z-0">
                {/* Decorative SVG Shape */}
                <Image
                  src="/modules/item-shape-whole.svg"
                  alt=""
                  width={153}
                  height={153}
                  className="
                    absolute left-0 top-0 z-0
                    pointer-events-none 
                    select-none
                    transition-opacity duration-500
                    opacity-100
                    group-hover:opacity-0
                  "
                />
              </div>
              <h3 className="text-[24px] font-medium leading-[28.8px] z-10 relative">
                {card.title}
              </h3>
              <ul className="mt-4 space-y-[16px] text-[18px] text-muted-foreground z-10 relative">
                {card.items.map((item, i) => (
                  <li key={i} className="flex gap-[12px]">
                    <span className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#66243E]" />
                    <span className="text-pretty text-[#66243E]">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
