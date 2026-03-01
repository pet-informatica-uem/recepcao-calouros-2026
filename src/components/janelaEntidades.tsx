"use client"
import React from 'react';
import {useState, useRef, useEffect} from 'react'
import Draggable from 'react-draggable';
import Image from "next/image";
import entidadeProps, { DADOSENTIDADES } from '../app/dadosJanelas';
import { SiDiscord, SiInstagram , SiFacebook,   } from '@icons-pack/react-simple-icons'
import { Globe, Linkedin } from 'lucide-react'


interface janelaProps {
    entidade: entidadeProps
    fecharJanela: () => void
    focarJanela: () => void
}

export default function JanelaEntidades({entidade, fecharJanela, focarJanela}: janelaProps) {
    const nodeRef = useRef(null)
    const [celular, setCelular] = useState(false)

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px)")
        setCelular(media.matches)
    }, [])

    return(
    <div onMouseDownCapture={focarJanela}>
        <Draggable nodeRef={nodeRef} handle='.barra' bounds="body" disabled={celular}>   
        <div ref={nodeRef} className = 'w-90 lg:w-170 h-fit flex flex-col z-0 lg:fixed lg:top-1/2 lg:left-1/3 lg:z-100'>
            <div style={{backgroundColor: entidade.cor}} className='barra w-full lg:h-10 h-6 flex justify-between items-center px-2 lg:px-5 text-black'>
                <p className='text-xl lg:text-2xl cursor-default'>{entidade.titulo}.ent</p>
                <p className='text-2xl lg:text-3xl cursor-pointer' onClick={() => {if (!celular) fecharJanela()}} onTouchEnd={fecharJanela}>x</p>
            </div>
            <div style={{borderColor: entidade.cor}} className={`border-8 border-t-0 h-full px-6 py-4 lg:py-8 flex flex-col lg:gap-8 gap-4 w-full bg-black`}>
                <div className='flex items-center gap-6 lg:gap-8 w-full'>
                    <div className='flex flex-col gap-5 w-fit'>
                        <Image src={entidade.image} width={160} height={180} alt={'Logo ' + entidade.titulo} 
                        className='w-20 h-auto lg:w-40 lg:h-auto'
                        />
                        <div className='gap-5 justify-center hidden lg:flex'>
                            {entidade.instagram && <a href={entidade.instagram} target='_blank'><SiInstagram color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.discord && <a href={entidade.discord} target='_blank'><SiDiscord color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.site && <a href={entidade.site} target='_blank' ><Globe color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.facebook && <a href= {entidade.facebook} target='_blank'><SiFacebook color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.linkedin && <a href= {entidade.linkedin} target='_blank'><Linkedin color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                        </div>
                    </div>
                    <div className= 'lg:flex-1 min-w-0 flex-col lg:gap-2 flex items-start justify-around wrap-break-word'>
                        <p className='text-3xl lg:text-6xl' style={{color: entidade.cor}}>{entidade.titulo}</p>
                        <div className= 'lg:gap-5 gap-3 flex lg:hidden'>
                            {entidade.instagram && <a href={entidade.instagram} target='_blank'><SiInstagram className='w-5 lg:w-8' color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.discord && <a href={entidade.discord} target='_blank'><SiDiscord className='w-5 lg:w-6' color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.site && <a href={entidade.site} target='_blank' ><Globe className='w-5 lg:w-6' color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.facebook && <a href= {entidade.facebook} target='_blank'><SiFacebook className='w-5 lg:w-6' color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                            {entidade.linkedin && <a href= {entidade.linkedin} target='_blank'><Linkedin className='w-5 lg:w-6' color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                        </div>
                        <p className='text-[16px] lg:text-2xl hidden lg:block'>{entidade.text}</p>
                    </div>
                </div>
                <p className= 'lg:hidden'>
                    {entidade.text}
                </p>
            </div>
        </div>
        </Draggable>
    </div>   
) 
}