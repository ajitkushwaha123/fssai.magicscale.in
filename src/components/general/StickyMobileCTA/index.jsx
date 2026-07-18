"use client";
import { ShieldCheck } from "lucide-react";
import PayButton from "../Payment/PayButton";
import { useAppConfigStore } from "@/stores/app-config.store";

export default function StickyMobileCTA() {
  const plan = useAppConfigStore((state) => state.plan);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom-full duration-500"
      >
        <div className="border-t border-emerald-100 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
          <div className="mx-auto max-w-lg px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col shrink-0">
                <span className="text-2xl min-[375px]:text-3xl font-black tracking-tight text-[#22c55e]">
                  ₹{plan?.advancePrice || 300}
                </span>

                <div className="mt-0.5 flex flex-col items-start gap-1">
                  <span className="text-xs font-bold text-zinc-700">Advance</span>
                  <div className="flex items-center gap-1 text-[10px] min-[375px]:text-xs text-zinc-500 font-medium">
                    <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-500" />
                    <span className="whitespace-nowrap">GSTIN in 48 Hours</span>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[160px] min-[375px]:max-w-[180px] ml-auto">
                <PayButton className="w-full text-sm h-10 min-[375px]:h-11 shadow-lg shadow-emerald-500/25 bg-[#22c55e] hover:bg-green-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
