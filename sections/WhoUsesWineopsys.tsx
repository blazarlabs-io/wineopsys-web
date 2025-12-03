import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

const WhoUsesWineopsys: React.FC = () => {
  return (
    <section id="who-uses" className="mx-auto px-5 max-w-[1028px] mt-[100px]">
      <div className="w-full space-y-3">
        <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px]">
          Who Uses WineOpSys
        </h2>
        <span className="w-[550px] h-0.5 bg-[#66243E] flex mt-[17px]"></span>
        <p className="text-sm lg:text-[20px] lg:leading-6 text-[#66243E] max-w-[550px] mt-[27px]">
          WineOpSys mirrors the real production flow of a winery and digitises it in modular blocks. Each module can be activated when the winery is ready, while data stays connected across the full process.
        </p>
      </div>
      <div className="grid gap-[38px]  mt-[70px] lg:max-w-[320px] relative">
        {/* Image Glass Center */}
        <div className="pointer-events-none absolute right-[-329px] top-[250px] w-[297px] z-0">
          <Image
            src="/glass.png"
            alt="object-glass"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </div>

        {/* Image Winemaker Right */}
        <div className="pointer-events-none absolute right-[-1009px] top-[-200px] w-[735px] z-0">
          <Image
            src="/winemaker.png"
            alt="winemaker"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </div>
        {personas1.map((persona) => (
          <Card
            key={persona.role}
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
          </Card>
        ))}
      </div>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 mt-21">
        {personas2.map((persona) => (
          <Card
            key={persona.role}
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
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhoUsesWineopsys;