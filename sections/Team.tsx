import React from 'react';
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Tudor Cotruta",
    role: "Co-founder, CEO",
    bio: "Entrepreneur with 15+ years of experience and deep involvement in the Moldovan wine ecosystem.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Alexandr Avanesean",
    role: "Co-founder, Marketing & Operations",
    bio: "Second-generation wine family background with experience in business development and FMCG brand management.",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sorin Canter",
    role: "Co-founder, CPTO",
    bio: "Over 20 years in commercial software delivery in technical and leadership roles.",
    linkedin: "https://www.linkedin.com/",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="mx-auto px-5 max-w-[1028px] mt-[100px]">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px]">
            Team
          </h2>
          
         
        </div>
      </div>

      <span className="w-full h-0.5 bg-[#66243E] flex mt-[17px]"></span>

      <div className="grid gap-4 md:grid-cols-3 mt-[70px]">
        {team.map((member) => (
          <Card
            key={member.name}
            className="flex h-full flex-col border-slate-200 bg-white"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-sm font-semibold text-slate-900 ring-1 ring-slate-200">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-slate-900">
                    {member.name}
                  </CardTitle>
                  <p className="text-xs text-emerald-700">{member.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between pt-0 text-xs leading-relaxed text-slate-600">
              <p>{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-emerald-700 hover:text-emerald-600"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>View on LinkedIn</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
};

export default Team;