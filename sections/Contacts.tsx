'use client'

import React, { useState } from "react";
// Components UI
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Motion
import { heroContainer } from "@/lib/motion/heroVariants";
import { itemFromBottom, itemFromright } from "@/lib/motion/common";
import { motion } from "framer-motion";

const Contacts: React.FC = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [wantsDemo, setWantsDemo] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          role,
          message,
          wantsDemo,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");

      setName("");
      setEmail("");
      setCompany("");
      setRole("");
      setMessage("");
      setWantsDemo(false);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const MotionCard = motion.create(Card);

  return (
    <section
      id="contact"
      className="space-y-8 mx-auto px-5 max-w-[1028px] mt-[100px]"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <motion.div 
          className="space-y-4"
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-2xl font-medium tracking-tight md:text-[35px] md:leading-[54px] z-10 relative">
            Contact / Call to Action
          </h2>
          <span className="mt-[17px] flex h-0.5 w-full bg-[#66243E] relative z-10" />
          <p className="max-w-[500px] text-sm text-[#66243E] lg:text-[20px] lg:leading-6 relative z-10">
            Let’s map your winery’s digital workflow.
          </p>
          <p className="text-[14px] leading-4">
            If you are exploring a structured way to manage vineyard, cellar,
            bottling, storage, and orders in one system, we can walk through
            your current processes and show how WineOpSys can be introduced
            step by step.
          </p>
          <p className="text-[14px] leading-4">
            Share a few details about your winery and we will get back to
            you with a tailored demo proposal.
          </p>
        </motion.div>

        <MotionCard 
          className="border-[#66243E] bg-white"
          variants={itemFromright}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <CardContent className="space-y-4 pt-6 text-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-[#66243E]">
                    Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="h-9 border-[#66243E] bg-white text-xs placeholder:text-[#66243E] mt-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-[#66243E]">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="you@winery.com"
                    className="h-9 border-[#66243E] bg-white text-xs placeholder:text-[#66243E] mt-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-[#66243E]">
                    Winery / Company
                  </label>
                  <Input
                    placeholder="Winery name"
                    className="h-9 border-[#66243E] bg-white text-xs placeholder:text-[#66243E] mt-2"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-[#66243E]">
                    Role
                  </label>
                  <Input
                    placeholder="Owner, Head winemaker, CFO…"
                    className="h-9 border-[#66243E] bg-white text-xs placeholder:text-[#66243E] mt-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-[#66243E]">
                  Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Share a bit about your current workflow and what you’d like to improve."
                  className="border-[#66243E] bg-white text-xs placeholder:text-[#66243E] mt-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox 
                  id="demo" 
                  checked={wantsDemo}
                  onCheckedChange={(checked) =>
                    setWantsDemo(checked === true)
                  }
                />
                <label
                  htmlFor="demo"
                  className="text-[11px] text-[#66243E] cursor-pointer"
                >
                  I want a demo / discovery call
                </label>
              </div>

              {status === "success" && (
                <p className="text-[11px] text-green-600">
                  Thank you! We’ll get back to you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-[11px] text-red-600">
                  Something went wrong. Please reload page and try again.
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-[#66243E] text-[20px] text-white hover:bg-[#66244E] cursor-pointer disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Request a demo"}
                </Button>
              </div>
            </form>
          </CardContent>
        </MotionCard>
      </div>

      <motion.div 
        className="mt-8 flex flex-col items-center justify-between gap-3 mb-[50px] border-t border-[#66243E] pt-6 text-[11px] text-[#66243E] md:flex-row"
        variants={itemFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span>© {new Date().getFullYear()} WineOpSys. All rights reserved.</span>
        <span className="text-[#66243E]">
          Built for wineries that want clarity from grape to bottle.
        </span>
      </motion.div>
    </section>
  );
};

export default Contacts;