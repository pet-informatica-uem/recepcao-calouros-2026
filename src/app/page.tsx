'use client'
import { HeroSection } from "../components/heroSection";
import Desktop from "../components/desktop/Desktop";
import Header  from "../components/header";
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

  const focarJanela = (id: entidadeKey) => {
    let aux = janelasAbertas.filter((item) => (item != id))
    setJanelasAbertas([...aux, id])
  }

  return (
    <div className="flex flex-col min-h-fill items-center justify-center font-sans">
      <Header abrirJanela={abrirJanela}/>
      <AreaJanelas entidades = {janelasAbertas} fecharJanela={fecharJanela} focarJanela={focarJanela}/>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-16 gap-20">
        <HeroSection/>
        <Desktop/>
      </main>
    </div>
  );
}
