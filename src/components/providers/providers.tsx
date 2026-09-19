"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "./theme-provider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ThemeProvider>
  );
}
