import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Hero = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden flex flex-col items-center">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-blue-600/30 fill-blue-600/30 dark:stroke-blue-400/30 dark:fill-blue-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
        )}
      />
      <h1
        className="relative z-10 w-full mx-auto pb-4 animate-in fade-in slide-in-from-top-4 duration-700"
      >
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full bg-blue-100/80 dark:bg-blue-900/30 px-4 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20 shadow-sm">
            🚀 Trusted by 10,000+ Businesses Across India
          </span>
        </div>

        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] md:leading-[1.1] text-gray-900 dark:text-white">
          Get Your GST Number{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 drop-shadow-sm">
            in 48 Hours
          </span>
          <br />
          <span className="mt-2 md:mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span>At Just</span>
            <span className="inline-block -rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <Highlighter action="highlight" color="#2563eb">
                <span className="text-white relative z-10 px-4 py-1 rounded-md">
                  ₹1,499
                </span>
              </Highlighter>
            </span>
          </span>
        </div>
      </h1>

      <p
        className="relative z-10 mt-6 text-sm md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-3xl font-normal leading-relaxed mx-auto px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both"
      >
        Start selling on{" "}
        <span className="text-orange-500 font-semibold">Amazon</span>,{" "}
        <span className="text-blue-500 font-semibold">Flipkart</span> &amp; grow your business with a valid GSTIN.
        100% online, government-approved process.
      </p>

      <div className="relative z-10 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-2xl border border-blue-100 dark:border-blue-800/30">
          <span className="text-blue-700 dark:text-blue-400 font-semibold text-lg flex items-center gap-2">
            <span className="text-2xl font-black">₹300</span> Advance
          </span>
          <span className="hidden sm:block text-blue-300">|</span>
          <span className="text-blue-600 dark:text-blue-500 font-medium text-sm sm:text-base">
            Pay the rest after GSTIN is Issued
          </span>
        </div>
      </div>

      <div
        className="relative hidden z-10 md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 mb-12 text-sm font-medium text-gray-500 dark:text-gray-400 animate-in fade-in duration-700 delay-500 fill-mode-both"
      >
        <span className="flex items-center gap-1.5"><span className="text-blue-500 bg-blue-100 dark:bg-blue-900/40 rounded-full p-0.5">✓</span> 100% Online Process</span>
        <span className="flex items-center gap-1.5"><span className="text-blue-500 bg-blue-100 dark:bg-blue-900/40 rounded-full p-0.5">✓</span> Govt Approved</span>
        <span className="flex items-center gap-1.5"><span className="text-blue-500 bg-blue-100 dark:bg-blue-900/40 rounded-full p-0.5">✓</span> 48hr Turnaround</span>
      </div>

      <div className="w-full max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700 delay-700 ">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-[24px] border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-black shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-2 sm:p-4">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 overflow-hidden rounded-xl md:rounded-[16px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center p-8 md:p-12">
            {/* GST Certificate Visual */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-blue-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-8 py-6 text-center">
                <div className="text-white text-xs font-bold tracking-widest uppercase mb-1 opacity-80">Government of India</div>
                <div className="text-white text-2xl font-black tracking-tight">GST Registration Certificate</div>
                <div className="text-blue-200 text-sm mt-1">Goods and Services Tax</div>
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">GSTIN</div>
                    <div className="text-blue-700 font-black text-lg tracking-widest">27AABCU9603R1ZX</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Registration Type</div>
                    <div className="text-zinc-800 font-bold">Regular Taxpayer</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Business Name</div>
                    <div className="text-zinc-800 font-bold">Your Business Pvt. Ltd.</div>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold mb-1">Date of Registration</div>
                    <div className="text-zinc-800 font-bold">Within 48 Hours ⚡</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-300 animate-pulse"></span>
                    <span className="text-green-600 font-bold text-sm">Certificate Active</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                    <span className="text-blue-700 font-black text-sm">✓ Govt. Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
