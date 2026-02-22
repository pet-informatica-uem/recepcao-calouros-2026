'use client'
import { useState } from "react"
import { DADOSENTIDADES } from "../app/dadosJanelas"
import JanelaEntidades from "./janelaEntidades"
import { entidadeKey } from "../app/dadosJanelas"

interface areaJanelasProps {
    entidades: entidadeKey[]
    fecharJanela: (id: entidadeKey) => void
}

export default function AreaJanelas ({entidades, fecharJanela}: areaJanelasProps){                                 
    return(

        <div className="w-full justify-center relative">
            {entidades.map((ent) => (<JanelaEntidades key={ent} entidade={DADOSENTIDADES[ent]} fecharJanela={() => fecharJanela(ent)}/>))}
        </div>
    )   
} 