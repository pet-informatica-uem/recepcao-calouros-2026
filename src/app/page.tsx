import Image from "next/image";
import { HeroSection } from "../components/heroSection";
import Desktop from "../components/desktop/Desktop";

export default function Home() {
  return (
    <div className="flex min-h-fill items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-22 py-16">
        <HeroSection/>
        <Desktop/>
      </main>
    </div>
  );
}
