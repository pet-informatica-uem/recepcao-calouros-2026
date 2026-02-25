"use client"
import React from 'react';
import {useState, useRef} from 'react'
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


    return(
    <div onMouseDownCapture={focarJanela}>
        <Draggable nodeRef={nodeRef} handle='.barra' bounds="body">   
        <div ref={nodeRef} className = 'w-170 h-fit flex flex-col fixed top-1/2 left-1/3 z-100'>
            <div style={{backgroundColor: entidade.cor}} className='barra w-full h-10 flex justify-between items-center px-5 text-black'>
                <p className='text-2xl cursor-default'>{entidade.titulo}.ent</p>
                <p className='text-3xl cursor-pointer' onClick={fecharJanela}>x</p>
            </div>
            <div style={{borderColor: entidade.cor}} className={`border-8 border-t-0 h-full px-6 py-8 flex gap-8 w-full bg-black`}>
                <div className='flex flex-col gap-5 items-center w-fit'>
                    <Image src={entidade.image} width={160} height={180} alt={'Logo ' + entidade.titulo}/>
                    <div className='flex gap-5'>
                        {entidade.instagram && <a href={entidade.instagram} target='_blank'><SiInstagram color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                        {entidade.discord && <a href={entidade.discord} target='_blank'><SiDiscord color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                        {entidade.site && <a href={entidade.site} target='_blank' ><Globe color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                        {entidade.facebook && <a href= {entidade.facebook} target='_blank'><SiFacebook color={entidade.cor} strokeWidth={3} style={{shapeRendering: "crispEdges"}} /></a>}
                        {entidade.linkedin && <a href= {entidade.linkedin} target='_blank'><Linkedin color={entidade.cor} strokeWidth={2} style={{shapeRendering: "crispEdges"}} /></a>}
                    </div>
                </div>
                <div className='flex-1 min-w-0 flex-col gap-2  wrap-break-word'>
                    <p className='text-6xl' style={{color: entidade.cor}}>{entidade.titulo}</p>
                    <p className='text-2xl'>{entidade.text}</p>
                </div>
            </div>
        </div>
        </Draggable>
    </div>   
) 
}