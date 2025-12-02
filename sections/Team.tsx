import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Tudor Cotruta",
    role: "Co-founder, CEO",
    bio: "Entrepreneur with over 15 years of experience and deep involvement in the Moldovan wine ecosystem. Responsible for vision, stakeholder relationships, and business development for WineOpSys.",
    image: "/team/person1.png",
  },
  {
    name: "Alexandr Avanesean",
    role: "Co-founder, Marketing & Operations",
    bio: "Second-generation wine family background and experience as business developer in a leading spirits producer and brand manager for a multi-country FMCG portfolio. Leads marketing, operations, and partner coordination.",
    image: "/team/person2.png",
  },
  {
    name: "Sorin Canter",
    role: "Co-founder, CPTO",
    bio: "Over 20 years in commercial software delivery in technical and leadership roles. Responsible for product architecture, delivery, and integration of WineOpSys into real winery environments.",
    image: "/team/person3.png",
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="relative mx-auto mt-[100px] max-w-[1028px] px-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between z-10 relative">
        <div>
          <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px]">
            Team
          </h2>
        </div>
      </div>

      <span className="mt-[17px] block h-[2px] w-full bg-[#66243E]" />

      {/* object-left */}
      <div className="hidden xl:flex absolute w-full max-w-[500px] sm:max-w-[715px] top-0 xl:top-[304px] ml-5 xl:ml-[-658px] z-0">
        <Image
          src="/object-left.svg"
          alt="object-left"
          width={715}
          height={715}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </div>

      {/* object-right */}
      <div className="hidden xl:flex absolute w-full max-w-[300px] sm:max-w-[500px] top-0 xl:top-[164px] ml-5 xl:ml-[869px] z-0">
        <Image
          src="/object-left.svg"
          alt="object-left"
          width={715}
          height={715}
          className="w-full h-auto rounded-[60px]"
          priority
        />
      </div>

      <div className="mt-[70px] space-y-16 flex flex-col items-center">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-6 lg:gap-[42px] md:flex-row lg:max-w-[655px]"
          >
            {/* Portrait */}
            <div className="shrink-0">
              <div className="relative h-[197px] w-[197px] overflow-hidden rounded-[40px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Divider + Text */}
            <div className="flex w-full h-full items-stretch gap-6 md:gap-[42px]">
              <span className="hidden h-[190px] w-[1px] bg-[#CBA2A6] md:block" />
              <div className="text-left">
                <p className="text-[24px] font-medium leading-8 text-[#66243E]">
                  <span className="block">{member.name.split(" ")[0]}</span>
                  <span className="block">
                    {member.name.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <p className="mt-1 text-sm font-medium text-[#CBA2A6]">
                  {member.role}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#4B4B4B]">
                  {member.bio}
                </p>

               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
