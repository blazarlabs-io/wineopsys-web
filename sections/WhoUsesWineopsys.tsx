import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

const personas = [
  {
    role: "Winery owners and CEOs",
    gain:
      "See a consolidated picture of production, stock, and orders across sites to support investment and growth decisions.",
  },
  {
    role: "Head winemakers",
    gain:
      "Follow each lot from vineyard to bottle, reviewing operations, lab results, and interventions in one environment.",
  },
  {
    role: "Cellar and production managers",
    gain:
      "Plan and coordinate work across shifts and teams with clear timelines, task lists, and capacity awareness.",
  },
  {
    role: "Finance and accounting",
    gain:
      "Receive structured production data that can be aligned with accounting platforms and cost models.",
  },
  {
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
        <span className="w-full h-0.5 bg-[#66243E] flex mt-[17px]"></span>
        <p className="text-sm lg:text-[20px] lg:leading-6 text-[#66243E] max-w-[500px]">
          Designed for everyone involved in winery operations – from
          owners and winemakers to finance and compliance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 mt-[30px]">
        {personas.map((persona) => (
          <Card
            key={persona.role}
            className="h-full border-slate-200 bg-white"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-[#66243E]">
                {persona.role}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-xs leading-relaxed text-[#66243E]">
              {persona.gain}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhoUsesWineopsys;