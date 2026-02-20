"use client";

import { useState } from "react";
import { days } from "./days";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  return (
    <div className="absolute p-6 top-146">

      <div className="grid grid-cols-4 gap-6 w-max">
        {days.map((day) => (
          <DesktopIcon
            key={day.id}
            label={day.label}
            onClick={() => setActiveWindow(day.id)}
          />
        ))}
      </div>

      {days.map((day) =>
        activeWindow === day.id ? (
          <Window
            key={day.id}
            title={`Cronograma - ${day.label}`}
            onClose={() => setActiveWindow(null)}
          >
            <ul className="space-y-2">
              {day.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Window>
        ) : null
      )}
    </div>
  );
}