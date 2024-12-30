"use client";
import React from "react";

import ToastProvider from "@/components/providers/toast-provider";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactQueryProvider } from "./reactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ProgressBar
        options={{ showSpinner: true }}
        shallowRouting
        color="#E11D48"
        height={"2px"}
      />
      {children}
      <ToastProvider />
    </ReactQueryProvider>
  );
};
