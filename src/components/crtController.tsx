"use client";

import { useState } from "react";
import { CRTEffect } from "./crtEffect";
export default function CRTController() {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      {enabled && <CRTEffect />}

      <button onClick={() => setEnabled((v) => !v)} className="cursor-pointer absolute right-2 top-24 sm:right-4 sm:top-28 md:right-6 md:top-32">
        <div className="flex items-center gap-2 sm:gap-3 border border-white/15 bg-black px-2 py-2 sm:px-3 sm:py-2 transition">
          <div className={`relative h-4 w-8 sm:h-5 sm:w-10 transition ${enabled ? "bg-blue" : "bg-white/50"}`}>
            <span className={`absolute top-1/2 -translate-y-1/2 h-full w-4 sm:w-5 bg-white transition-all duration-200 ${enabled ? "left-4 sm:left-5" : "left-0"}`}/>
          </div>
        </div>
      </button>
    </>
  );
}