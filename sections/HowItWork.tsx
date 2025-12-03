import React, { FC } from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

const HowItWork: FC = () => {
  return (
    <section
      id="how-it-works"
      className="mx-auto mt-[100px] max-w-[1028px] px-5 z-20"
    >
      <div className="w-full space-y-3 relative">
        <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px] z-10 relative">
          How It Works – from grape to bottle
        </h2>
        <span className="mt-[17px] flex h-0.5 w-full bg-[#66243E] relative z-10" />
        <p className="max-w-[500px] text-sm text-[#66243E] lg:text-[20px] lg:leading-6 relative z-10">
          WineOpSys turns the winery production flow into modular, connected
          blocks that can be activated step by step.
        </p>
         <div className="pointer-events-none absolute right-[-409px] top-[-180px] w-[500px] sm:w-[715px] z-0">
          <Image
            src="/object-left.svg"
            alt="object-left"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </div>
      </div>

      {/* Module cards */}
      <div className="mt-[50px] grid gap-x-[126px] gap-y-[55px] md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {moduleGroups.map((group) => (
          <Card
            key={group.title}
            className="relative flex items-center rounded-[22px] border border-[#E8C7D3] bg-[#FFF9FB] px-8 pr-[54px] pt-4 shadow-[0_10px_30px_rgba(102,36,62,0.12)]"
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
                <CardTitle className="text-[22px] font-medium text-[#66243E] leading-[26px]">
                  {group.title}
                </CardTitle>

                <p className="mt-1 text-[14px] leading-4 text-[#66243E]">
                  {group.description}
                </p>
              </div>

              <Button
                variant="outline"
                className="self-end rounded-full border-[#C27A8F] bg-transparent px-6 py-1 text-sm font-medium text-[#66243E] hover:bg-[#FDEFF4] cursor-pointer"
              >
                Details
              </Button>
            </div>
          </Card>
        ))}

      </div>

      <div className="relative">
        {/* Shape Bottom Gray */}
        <div className="pointer-events-none absolute right-[209px] top-[-320px] w-[457px] z-0">
          <Image
            src="/shapes/object-gray-romb.svg"
            alt="object-bottom-gray"
            width={900}
            height={1200}
            className="w-full h-auto rounded-[60px]"  
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default HowItWork;
