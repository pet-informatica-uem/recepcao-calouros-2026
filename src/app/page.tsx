'use client'
import { HeroSection } from "../components/heroSection";
import Desktop from "../components/desktop/Desktop";
import Header  from "../components/header";
import { DADOSENTIDADES } from "./dadosJanelas";
import AreaJanelas from "../components/areaJanelas";
import { useState } from "react";
import { entidadeKey } from "./dadosJanelas";

export default function Home() {

  const [janelasAbertas, setJanelasAbertas] = useState<entidadeKey[]>([])

  const abrirJanela = (id: entidadeKey) => {
    if(!janelasAbertas.includes(id)){setJanelasAbertas([...janelasAbertas, id])}
  }

    const fecharJanela = (id: entidadeKey) => {
      setJanelasAbertas(janelasAbertas.filter(((i) => i != id)))
    }

  return (
    <div className="flex flex-col min-h-fill items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header abrirJanela={abrirJanela}/>
      <AreaJanelas entidades = {janelasAbertas} fecharJanela={fecharJanela}/>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between gap-22 py-16 bg-white dark:bg-black sm:items-start">
        <HeroSection/>
        <Desktop/>
      </main>
    </div>
  );
}
