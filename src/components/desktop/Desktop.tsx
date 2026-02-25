"use client";

import { useState } from "react";
import { days } from "./days";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const selectedDay = days.find((d) => d.id === activeWindow);

  return (
    <div className="flex flex-col items-center w-full">
      
      <div className="grid grid-cols-5 gap-12 w-max mb-16">
        {days.map((day) => (
          <DesktopIcon
            key={day.id}
            label={day.id.toUpperCase()}
            onClick={() => setActiveWindow(day.id)}
          />
        ))}
      </div>


    <div className="relative w-full flex justify-center">
      <div className="relative w-full px-4">
        <div className={[
            "absolute left-0 top-0 w-full transition-all duration-200",
            selectedDay
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
          {selectedDay && (
            <div className="flex flex-col items-center">
              <Window
                title={selectedDay.label}
                onClose={() => setActiveWindow(null)}
              >
                <div className="flex flex-col space-y-12 text-center">

                  <p className="text-justify px-4">
                    {selectedDay.introText}
                  </p>

                  {selectedDay.periods.map((period) => (
                    <div key={period.name} className="space-y-10">
                      
                      <div className="relative flex items-center justify-center mb-8">
                        <div className="absolute w-full border-t-2 border-dashed border-white"></div>
                      </div>

                      <h2 className="relative bg-black px-10 text-3xl font-black tracking-[0.3em] uppercase">
                        <span className="border-b-2 border-dashed border-white pb-1">
                          {period.name}
                        </span>
                      </h2>

                      <div className="space-y-16">
                        {period.activities.map((act, idx) => (
                          <div key={idx} className="flex flex-col items-center space-y-6">
                            <h3 className="text-4xl font-black uppercase tracking-tighter">
                              {act.title}
                            </h3>
                            
                            <div className="flex justify-center gap-4">
                              {act.tags.map((tag) => (
                                <span key={tag} className="border border-white px-5 py-1 font-bold uppercase bg-black text-white">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="font-bold border-white py-3 w-full max-w-sm">
                              <p>HORÁRIO: {act.time}</p>
                              <p>LOCAL: {act.location}</p>
                            </div>

                            <p className="text-justify">
                              {act.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Window>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}