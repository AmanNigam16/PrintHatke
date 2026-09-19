"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` when the document/tab is hidden.
 * Use to pause non-essential animations when the user switches tabs.
 */
export function useTabHidden(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onVisibilityChange = () => {
      setHidden(document.hidden);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return hidden;
}
