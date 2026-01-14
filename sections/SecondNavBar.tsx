'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const navItems = [
  { id: "vineyards", label: "Vineyards" },
  { id: "grapes", label: "Grapes" },
  { id: "wine-production", label: "Wine Production" },
  { id: "order-management", label: "Order Management" },
  { id: "vessel-management", label: "Vessel Management" },
  { id: "consumables", label: "Consumables" },
  { id: "storage", label: "Storage" },
  { id: "team-tasks", label: "Team & Tasks" },
  { id: "reports", label: "Reports" },
  { id: "documents", label: "Documents" },
];

export default function SecondNavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-[64px] left-0 right-0 z-40 bg-[#F5EFEE]">
      <div className="mx-auto max-w-[1028px] flex items-center justify-between px-6 lg:px-0 py-[29px]">
        

        {/* Desktop nav (xl and up) */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[14px] font-medium text-left tracking-wide text-[#66244e] transition hover:text-[#66243e] cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile burger (below xl) */}
        <button
          className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-[#66244e] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#66244e]/40"
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[2px] w-6 bg-[#66244e] transition-transform ${
                isMobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-[#66244e] transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-[#66244e] transition-transform ${
                isMobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileOpen && (
        <nav className="xl:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-[1028px] px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full text-left py-2 text-[16px] font-medium tracking-wide text-[#66244e] hover:text-[#66243e]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
