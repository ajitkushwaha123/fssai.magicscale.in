"use client";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { XCircle, CheckCircle2 } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function WhyChooseUs() {
  const comparisons = [
    {
      pain: "Confusing GST Portal & Forms",
      solution: "We File Everything For You",
    },
    {
      pain: "Wrong HSN/SAC Code Selection",
      solution: "Expert Code & Category Guidance",
    },
    {
      pain: "Application Rejections & Delays",
      solution: "Error-Free Document Verification",
    },
    {
      pain: "No One to Guide You",
      solution: "Dedicated Expert Support",
    },
    {
      pain: "Hidden CA / Agent Charges",
      solution: "100% Transparent ₹1,499 Pricing",
    },
    {
      pain: "Weeks of Waiting & Follow-Ups",
      solution: "GSTIN in 48 Hours, Live Updates",
    },
  ];

  return (
    <SectionWrapper
      title={
        <div className="mx-auto mb-16 text-center">
          <Title
            title={
              <>
                The Old Way vs <br />{" "}
                <Highlighter action="highlight" color={"#2563eb"}>
                  <span className="relative z-10 px-2 text-white">
                    MagicScale Way
                  </span>
                </Highlighter>
              </>
            }
            description="Stop wasting time on GST portal rejections. See how we make GST registration effortless."
          />
        </div>
      }
    >
      <div className="mx-auto md:px-0">
        <div className="bg-white rounded-lg border-2 border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

          <div className="flex bg-zinc-50/80 border-b border-zinc-100 p-4 sm:p-6 text-left">
            <div className="flex-1">
              <h3 className="text-[11px] sm:text-[13px] font-bold text-red-500 uppercase tracking-widest">Doing it Yourself</h3>
            </div>
            <div className="w-px bg-zinc-200 mx-2 sm:mx-6 shrink-0" />
            <div className="flex-1">
              <h3 className="text-[11px] sm:text-[13px] font-black text-blue-600 uppercase tracking-widest">With MagicScale</h3>
            </div>
          </div>

          <div className="divide-y divide-zinc-100">
            {comparisons.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex p-4 sm:p-6 items-center hover:bg-zinc-50/50 transition-colors group"
              >
                <div className="flex-1 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-right justify-start sm:pr-4">
                  <span className="text-[13px] sm:text-[15px] font-medium text-zinc-500 sm:order-1 order-2 group-hover:text-zinc-600 transition-colors">{item.pain}</span>
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 sm:order-2 order-1 opacity-70" />
                </div>
                <div className="w-px h-10 bg-zinc-100 mx-2 sm:mx-6 shrink-0" />

                <div className="flex-1 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center justify-start sm:text-left sm:pl-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 fill-blue-600/10" />
                  <span className="text-[13px] sm:text-[15px] font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">{item.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
