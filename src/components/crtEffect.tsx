"use client";

export function CRTEffect() {
  return (
    <div className="fixed inset-0 z-1000 pointer-events-none crt">
      <div className="crt-noise" />
      <div className="crt-scanlines" />
      <div className="crt-roll" />
      <div className="crt-vignette" />
    </div>
  );
}