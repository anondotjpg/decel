"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CopyCAButton({ ca }: { ca: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(ca);
      setCopied(true);
    } catch {
      // fallback (rare)
      const ta = document.createElement("textarea");
      ta.value = ca;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
    }
  }

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium
                 text-white/90 backdrop-blur-xl ring-1 ring-white/15
                 hover:bg-white/15 active:scale-[0.98] transition"
      aria-label="Copy contract address"
      title="Copy CA"
    >
      <span className="relative grid h-4 w-4 place-items-center">
        <AnimatePresence mode="wait" initial={false}>
          {!copied ? (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.85, y: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -2 }}
              transition={{ type: "spring", stiffness: 520, damping: 34 }}
              className="absolute"
            >
              {/* Copy icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M9 9h10v10H9V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 15H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.85, y: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -2 }}
              transition={{ type: "spring", stiffness: 520, damping: 34 }}
              className="absolute"
            >
              {/* Check icon */}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M20 6 9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className="opacity-70">{ca.slice(0, 4)}…{ca.slice(-4)}</span>
    </button>
  );
}