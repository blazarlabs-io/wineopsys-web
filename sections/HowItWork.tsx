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
      className="mx-auto mt-[100px] max-w-[1028px] px-5 z-20 relative"
    >
      <div className="w-full space-y-3">
        <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px]">
          How It Works – from grape to bottle
        </h2>
        <span className="mt-[17px] flex h-0.5 w-full bg-[#66243E]" />
        <p className="max-w-[500px] text-sm text-[#66243E] lg:text-[20px] lg:leading-[24px]">
          WineOpSys turns the winery production flow into modular, connected
          blocks that can be activated step by step.
        </p>
      </div>

      {/* Module cards */}
      <div className="mt-[30px] grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {moduleGroups.map((group) => (
          <Card
            key={group.title}
            className="flex h-full flex-col rounded-[22px] border border-[#E8C7D3] bg-white shadow-[0_10px_30px_rgba(102,36,62,0.12)]"
          >
            <CardHeader className="flex flex-col items-center gap-4 pb-0 pt-6">
              {/* Icon in rounded square */}
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-2xl bg-[#C27A8F]">
                <Image
                  src={group.icon}
                  alt={group.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-center text-lg font-semibold text-[#66243E]">
                {group.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between px-6 pb-6 pt-4">
              <p className="text-sm leading-relaxed text-[#66243E]">
                {group.description}
              </p>

              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  className="h-auto rounded-full border-[#C27A8F] bg-white px-6 py-1 text-sm font-medium text-[#66243E] hover:bg-[#FDEFF4]"
                >
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
