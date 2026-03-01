"use client";
import { useState } from "react";
import { days } from "./days";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const selectedDay = days.find((d) => d.id === activeWindow);

  return (
    <div className="flex flex-col items-center w-full  p-4">
      {/* Grid responsivo: 3 colunas no mobile, 5 no desktop */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 w-full max-w-5xl mb-8 md:mb-16">
        {days.map((day) => (
          <DesktopIcon
            key={day.id}
            label={day.id.toUpperCase()}
            onClick={() => setActiveWindow(day.id)}
            isActive={activeWindow ==day.id}
          />
        ))}
      </div>

      <div className="relative w-full flex justify-center">
        <div className={["w-full transition-all duration-200", 
          selectedDay ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        ].join(" ")}>
          {selectedDay && (
            <div className="flex flex-col items-center">
              <Window title={selectedDay.label} onClose={() => setActiveWindow(null)}>
                <div className="flex flex-col space-y-8 md:space-y-12 text-center">
                  <p className="text-justify px-2 md:px-4 text-base md:text-lg">
                    {selectedDay.introText}
                  </p>

                  {selectedDay.periods.map((period) => (
                    <div key={period.name} className="space-y-6 md:space-y-10">
                      <div className="relative flex items-center justify-center mb-4 md:mb-8">
                        <div className="absolute w-full border-t-2 border-dashed border-white"></div>
                        <h2 className="relative bg-black px-4 md:px-10 text-xl md:text-2xl font-black tracking-widest md:tracking-[0.3em] uppercase">
                          <span className="border-b-2 border-dashed border-white pb-1">
                            {period.name}
                          </span>
                        </h2>
                      </div>

                      <div className="space-y-10 md:space-y-16">
                        {period.activities.map((act, idx) => (
                          <div key={idx} className="flex flex-col items-center space-y-4 md:space-y-6">
                            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">
                              {act.title}
                            </h3>
                            
                            {/* Tags flexíveis */}
                            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                              {act.tags.map((tag) => (
                                <span key={tag} className="border border-white px-3 py-1 text-base font-bold uppercase bg-black text-white">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="font-bold border-white py-2 md:py-3 w-full max-w-sm text-lg md:text-xl">
                              <p>HORÁRIO: {act.time}</p>
                              <p>LOCAL: {act.location}</p>
                            </div>

                            <p className="text-justify px-2 md:px-4 text-base md:text-lg">
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
  );
}