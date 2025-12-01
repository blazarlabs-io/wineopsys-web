'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "who-uses", label: "Who Uses WineOpSys" },
  { id: "team", label: "Team / Contact" },
];

const featureTiles = [
  {
    title: "End-to-end supply chain tracking",
    body:
      "Keeps a linked record for each wine lot from vineyard block through fermentation, bottling, storage, and dispatch.",
  },
  {
    title: "Real-time single source of truth",
    body:
      "Gives winemakers, managers, and finance one live view of volumes, movements, and status.",
  },
  {
    title: "Proactive planning",
    body:
      "Aligns planned sales, available stock, and upcoming harvest so production plans can be made early and adjusted with confidence.",
  },
  {
    title: "Timeline & task management",
    body:
      "Structures vineyard and cellar work into tasks with timing, owners, and status across all stages.",
  },
  {
    title: "Custom smart action framework",
    body:
      "Turns complex procedures into guided, reusable actions that reflect the winery’s own methods and standards.",
  },
  {
    title: "Flexible reporting",
    body:
      "Generates compliance registers, operational summaries, and management reports directly from production data.",
  },
];

const productionPhases = [
  "Vineyard",
  "Grapes",
  "Primary & Secondary Vinification",
  "Bottling",
  "Storage",
  "Orders",
];

const moduleGroups = [
  {
    title: "Vineyard & Grapes",
    items: [
      "Vineyard blocks, varieties, planting years",
      "Field activities and treatments",
      "Grape intake with origin, weight, key parameters",
      "Traceable lots that move into production",
    ],
  },
  {
    title: "Cellar Operations",
    items: [
      "Primary and secondary vinification",
      "Transfers, corrections, and lab results",
      "Task timelines for cellar work",
      "Process history for each lot",
    ],
  },
  {
    title: "Packaging & Logistics",
    items: [
      "Bottling runs and packaging materials",
      "Lot formation and labelling",
      "Bulk and bottled stock by location",
      "Order management and fulfilment",
    ],
  },
  {
    title: "Supporting Layers",
    items: [
      "Vessel Management & Consumables",
      "Chemistry and lab data",
      "Team & Tasks, Documents, Reports",
      "Nomenclature and master data",
    ],
  },
];

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

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function WineOpSysLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => scrollToSection("home")}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-600 ring-1 ring-emerald-200">
              WO
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                WineOpSys
              </span>
              <span className="text-xs text-slate-500">
                Winery Operations System
              </span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-xs font-medium tracking-wide text-slate-700 transition hover:text-emerald-600"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="sm"
              className="rounded-full bg-emerald-600 px-4 text-xs font-semibold text-white hover:bg-emerald-500"
              onClick={() => scrollToSection("contact")}
            >
              Request a demo
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section
          id="home"
          className="flex flex-col items-start gap-10 py-16 md:flex-row md:items-center md:py-24"
        >
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              From grape to bottle, one connected flow
            </div>
            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              The Digital Command Center for Wineries.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              From grape to bottle, WineOpSys orchestrates production,
              traceability, and real-time decisions in a single, winery-native
              system.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-emerald-600 px-7 text-sm font-semibold text-white hover:bg-emerald-500"
                onClick={() => scrollToSection("contact")}
              >
                Request a demo
              </Button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-slate-800 underline-offset-4 hover:underline"
              >
                Download overview / PDF
              </button>
            </div>
            <p className="text-xs text-slate-500">
              Built with wineries in mind – from vineyard blocks and cellar
              work to bottling, storage, and customer orders.
            </p>
          </div>

          {/* Hero visual: conceptual production flow */}
          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-xl shadow-emerald-100">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
                <span>Production flow overview</span>
                <span className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live signal
                </span>
              </div>
              <div className="grid gap-3 text-xs md:text-[11px]">
                {productionPhases.map((phase, index) => (
                  <div
                    key={phase}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-[10px] font-semibold text-slate-800 ring-1 ring-slate-200">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-900">
                          {phase}
                        </span>
                        <span className="text-[10px] text-emerald-600">
                          OK
                        </span>
                      </div>
                      <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full w-2/3 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-[11px] text-slate-600">
                <span>Lots tracked</span>
                <span className="font-medium text-emerald-700">128 active · 4 bottling today</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="space-y-8 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Key Features
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                WineOpSys keeps every stage of production connected so the same
                data can serve winemakers, managers, finance, and quality teams.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featureTiles.map((feature) => (
              <Card
                key={feature.title}
                className="group flex h-full flex-col border-slate-200 bg-white hover:border-emerald-400/60 hover:bg-emerald-50"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-xs leading-relaxed text-slate-600">
                  {feature.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works / Modules */}
        <section id="how-it-works" className="space-y-10 py-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              How WineOpSys Works
            </h2>
            <p className="text-sm text-slate-600">
              WineOpSys mirrors the real production flow of a winery and
              digitises it in modular blocks. Each module can be activated when
              the winery is ready, while data stays connected across the full
              process.
            </p>
          </div>

          {/* Production flow diagram */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex min-w-max items-center justify-between gap-4 md:gap-6">
              {productionPhases.map((phase, index) => (
                <div key={phase} className="flex items-center gap-3">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      {index + 1}
                    </div>
                    <span className="max-w-[7rem] text-center text-[11px] font-medium text-slate-900">
                      {phase}
                    </span>
                  </div>
                  {index !== productionPhases.length - 1 && (
                    <div className="hidden h-px w-10 bg-gradient-to-r from-emerald-400/80 to-transparent md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Module cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {moduleGroups.map((group) => (
              <Card
                key={group.title}
                className="flex h-full flex-col border-slate-200 bg-white"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-emerald-700">
                    {group.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-xs text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Who Uses WineOpSys */}
        <section id="who-uses" className="space-y-8 py-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Who Uses WineOpSys
            </h2>
            <p className="text-sm text-slate-600">
              Designed for everyone involved in winery operations – from
              owners and winemakers to finance and compliance.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {personas.map((persona) => (
              <Card
                key={persona.role}
                className="h-full border-slate-200 bg-white"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-slate-900">
                    {persona.role}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-xs leading-relaxed text-slate-600">
                  {persona.gain}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section id="team" className="space-y-8 py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Team
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                WineOpSys is built by a team that combines winery operations,
                product delivery, and technology integration experience.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
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

        {/* Contact / CTA */}
        <section
          id="contact"
          className="space-y-8 border-t border-slate-200 py-16"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Let’s map your winery’s digital workflow.
              </h2>
              <p className="text-sm text-slate-600">
                If you are exploring a structured way to manage vineyard, cellar,
                bottling, storage, and orders in one system, we can walk through
                your current processes and show how WineOpSys can be introduced
                step by step.
              </p>
              <p className="text-xs text-slate-500">
                Share a few details about your winery and we will get back to
                you with a tailored demo proposal.
              </p>
            </div>

            <Card className="border-slate-200 bg-white">
              <CardContent className="space-y-4 pt-6 text-xs">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-800">
                      Name
                    </label>
                    <Input
                      placeholder="Your full name"
                      className="h-9 border-slate-300 bg-white text-xs placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-800">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="you@winery.com"
                      className="h-9 border-slate-300 bg-white text-xs placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-800">
                      Winery / Company
                    </label>
                    <Input
                      placeholder="Winery name"
                      className="h-9 border-slate-300 bg-white text-xs placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-800">
                      Role
                    </label>
                    <Input
                      placeholder="Owner, Head winemaker, CFO…"
                      className="h-9 border-slate-300 bg-white text-xs placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-slate-800">
                    Message
                  </label>
                  <Textarea
                    rows={4}
                    placeholder="Share a bit about your current workflow and what you’d like to improve."
                    className="border-slate-300 bg-white text-xs placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="demo" />
                  <label
                    htmlFor="demo"
                    className="text-[11px] text-slate-700"
                  >
                    I want a demo / discovery call
                  </label>
                </div>

                <div className="pt-2">
                  <Button className="w-full rounded-full bg-emerald-600 text-xs font-semibold text-white hover:bg-emerald-500">
                    Request a demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-[11px] text-slate-500 md:flex-row">
            <span>© {new Date().getFullYear()} WineOpSys. All rights reserved.</span>
            <span className="text-slate-400">
              Built for wineries that want clarity from grape to bottle.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
