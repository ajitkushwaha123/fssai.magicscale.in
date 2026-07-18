import { create } from "zustand";

import { PLANS } from "@/constants/plans";

const initialState = {
  planId: "gst-registration",
  plan: PLANS["gst-registration"],
};

export const useAppConfigStore = create((set) => ({
  ...initialState,

  setPlanId: (planId) =>
    set({
      planId,
    }),

  setPlan: (plan) =>
    set({
      plan,
    }),
  reset: () => set(initialState),
}));
