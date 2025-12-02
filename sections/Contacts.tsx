import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contacts: React.FC = () => {
  return (
    <section
      id="contact"
      className="space-y-8 mx-auto px-5 max-w-[1028px] mt-[100px]"
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
  );
};

export default Contacts;