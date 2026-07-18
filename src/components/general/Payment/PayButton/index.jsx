"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";
import ReserveSeatDialog from "../../CustomerInfoForm";

export default function PayButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReserveSeatDialog open={open} onOpenChange={setOpen} />
      <button
        onClick={() => {
          posthog.capture("application_form_opened");
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "InitiateCheckout", { content_name: "GST Registration Form Opened" });
          }
          setOpen(true);
        }}
        className="group flex-1 w-full rounded-md bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 active:scale-[0.98]"
      >
        <div className="flex items-center justify-center gap-2">
          <span>Get GST Now</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </button>
    </>
  );
}
