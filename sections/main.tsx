'use client';
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin } from "lucide-react";
import Image from "next/image";

import Hero from "@/sections/Hero";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "who-uses", label: "Who Uses WineOpSys" },
  { id: "team", label: "Team / Contact" },
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

      {/* Top navigation */}
      

      <main className="mx-auto max-w-6xl px-4">
   

        

        {/* Who Uses WineOpSys */}
        

        {/* Team */}
        

        {/* Contact / CTA */}
        
      </main>
  );
}
