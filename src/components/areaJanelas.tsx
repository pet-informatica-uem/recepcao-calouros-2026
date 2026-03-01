'use client'
import { useState } from "react"
import { DADOSENTIDADES } from "../app/dadosJanelas"
import JanelaEntidades from "./janelaEntidades"
import { entidadeKey } from "../app/dadosJanelas"


interface areaJanelasProps {
    entidades: entidadeKey[]
    fecharJanela: (id: entidadeKey) => void
    focarJanela: (id: entidadeKey) => void
}

const todasEntidades: entidadeKey[]  = ["#pet", "#conectadas", "#caccom", "#cainfo", "#ieee", "#robodin", "#aaacex", "#main", "#aedin"]

export default function AreaJanelas ({entidades, fecharJanela, focarJanela}: areaJanelasProps){                                 
    return(
        <div>
            <div className="w-full justify-center relative hidden lg:block">
                {entidades.map((ent) => (
                    <JanelaEntidades key={ent} entidade={DADOSENTIDADES[ent]} fecharJanela={() => fecharJanela(ent)} focarJanela={() => focarJanela(ent)}/>))}
            </div>
            <div className="lg:hidden w-full h-fit flex flex-col gap-10">
                {todasEntidades.map((ent) => (
                    <JanelaEntidades key={ent} entidade={DADOSENTIDADES[ent]} focarJanela={() => {}} fecharJanela={() => {}}/>
            ))}
            </div>
        </div>
    )  
} 