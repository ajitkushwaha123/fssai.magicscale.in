"use client";
import React from "react";
import Title from "../Title";
import PayButton from "../Payment/PayButton";
import SectionWrapper from "../SectionWrapper";
import { Check, Shield, Zap } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { useAppConfigStore } from "@/stores/app-config.store";

export default function Pricing() {
  const plan = useAppConfigStore((state) => state.plan);

  const features = [
    "GST Registration Filing",
    "GSTIN Issued in 48 Hours",
    "ARN Number & Status Tracking",
    "HSN/SAC Code Guidance",
    "Dedicated Account Manager",
    "Secure & Encrypted Processing",
  ];

  return (
    <SectionWrapper title={
      <div className="mx-auto mb-16 text-center">
        <Title
          title={
            <>
              Transparent Pricing, <br />{" "}
              <Highlighter action="highlight" color={"#22c55e"}>
                <span className="relative z-10 px-2 text-white">
                  No Hidden Fees
                </span>
              </Highlighter>
            </>
          }
          description="Get your GST Registration processed with our comprehensive, all-inclusive package."
        />
      </div>
    }>
      <div className="mx-auto relative z-10">
        <div className="mx-auto">
          <div className="relative bg-white rounded-xl border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgb(37,99,235,0.12)]">
            <div className="bg-[#22c55e] py-3 text-center">
              <p className="text-sm font-bold text-white uppercase tracking-widest flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 fill-white" /> Get GSTIN in 48 Hours ⚡
              </p>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-center bg-zinc-50/50">
                <h3 className="text-2xl font-extrabold text-zinc-900 mb-2">{plan?.title || "GST Registration"}</h3>
                <p className="text-zinc-500 mb-6 font-medium">One-time payment • GSTIN in 48 Hours</p>

                <div className="flex flex-col gap-1 mb-8">
                  <div className="flex items-end gap-3">
                    <span className="text-6xl font-black text-[#22c55e] tracking-tight">₹{plan?.advancePrice || 300}</span>
                    <span className="text-xl font-bold text-zinc-900 pb-2">Advance</span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-500">
                    Pay the remaining ₹{(plan?.price || 1499) - (plan?.advancePrice || 300)} <span className="text-[#22c55e]">after GSTIN is Issued</span>
                  </p>
                  <div className="flex flex-col mt-2">
                    <span className="text-sm font-bold text-red-500 uppercase tracking-wider mb-0.5">Total: ₹{plan?.price || 1499} (Save ₹1,500)</span>
                    <span className="text-lg text-zinc-400 font-medium line-through decoration-zinc-300">₹2,999</span>
                  </div>
                </div>

                <div className="w-full mt-auto">
                  <PayButton className="w-full h-14 text-lg rounded-xl shadow-lg transition-all bg-[#22c55e] hover:bg-green-700" />
                  <p className="text-center text-xs text-zinc-400 mt-4 font-semibold flex items-center justify-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" /> 100% Safe & Secure Payment
                  </p>
                </div>
              </div>

              <div className="flex-1 p-8 sm:p-12 bg-white">
                <h4 className="text-lg font-bold text-zinc-900 mb-6">Everything included in ₹1,499:</h4>
                <ul className="space-y-5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#22c55e] stroke-[3]" />
                      </div>
                      <span className="text-zinc-700 font-semibold text-[15px] leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
