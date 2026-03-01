"use client";

import { useState } from "react";
import { CRTEffect } from "./crtEffect";
export default function CRTController() {
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      {enabled && <CRTEffect />}

      <button 
        onClick={() => setEnabled((v) => !v)} 
        className="fixed z-50 flex items-center gap-3 group right-4 top-24 sm:right-6 sm:top-28 md:right-8 md:top-32 hover:opacity-80 transition-opacity cursor-pointer"
      >

        {/* Trilho do Switch */}
        <div className={`relative w-12 h-6 md:w-14 md:h-7 p-1 border-2 border-white transition-colors duration-200
          ${enabled ? "bg-blue" : "bg-black"} 
        `}>
          <div className={`h-full w-4 md:w-5 bg-white transition-all duration-200 ease-in-out transform
            ${enabled ? "translate-x-5 md:translate-x-6" : "translate-x-0"}
          `} />
          
          {!enabled && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
              <div className="w-1 h-1 bg-white/30" />
              <div className="w-1 h-1 bg-white/30" />
            </div>
          )}
        </div>
      </button>
    </>
  );
}