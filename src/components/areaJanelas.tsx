'use client'
import { useEffect } from "react"
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
    
    useEffect(() => {
        const scrollToHash = () => {
            if (window.innerWidth >= 1024) return

            const hash = window.location.hash
            if (!hash) return

            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }

        scrollToHash()

        window.addEventListener("hashchange", scrollToHash)
        return () => window.removeEventListener("hashchange", scrollToHash)
    }, [])

    return(
        <div>
            {/* DESKTOP */}
            <div className="w-full justify-center relative hidden lg:block">
                {entidades.map((ent) => (
                    <JanelaEntidades 
                        key={ent} 
                        entidade={DADOSENTIDADES[ent]} 
                        fecharJanela={() => fecharJanela(ent)} 
                        focarJanela={() => focarJanela(ent)}
                    />
                ))}
            </div>

            {/* MOBILE */}
            <div className="lg:hidden w-full h-fit flex flex-col gap-10">
                {todasEntidades.map((ent) => (
                    <div 
                    id={ent.replace("#", "")} 
                    key={ent}
                    className="scroll-mt-24"
                    >
                        <JanelaEntidades 
                            entidade={DADOSENTIDADES[ent]} 
                            focarJanela={() => {}} 
                            fecharJanela={() => {}}
                        />
                    </div>
                ))}
            </div>
        </div>
    )  
}