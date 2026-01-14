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
  }
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "who-uses", label: "Who Uses WineOpSys" },
  { id: "team", label: "Team / Contact" },
];

export default function NavigationBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1028px] flex items-center justify-between px-6 lg:px-0 py-4">
        <div
          className="flex cursor-pointer items-center gap-2" onClick={() => handleNavClick("home")}
        >
          <div className="flex flex-col xl:ml-[-180px]">
            <a href="/">
            <Image src="/Logo-navbar.svg" alt="WineOpSys" width={168} height={27} /> </a>
          </div>
        </div>

        {/* Desktop nav (xl and up) */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[17px] font-medium tracking-wide text-[#66244e] transition hover:text-[#66243e] cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Button
            size="sm"
            className="rounded-full bg-[#66244e] px-4 text-[14px] ml-5 font-medium text-white hover:bg-[#66243e] cursor-pointer"
            onClick={() => handleNavClick("contact")}
          >
            Request a demo
          </Button>
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
            <Button
              size="sm"
              className="mt-2 w-full rounded-full bg-[#66244e] text-[14px] font-medium text-white hover:bg-[#66243e] cursor-pointer"
              onClick={() => handleNavClick("contact")}
            >
              Request a demo
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
