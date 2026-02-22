"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DADOSENTIDADES, entidadeKey } from "../app/dadosJanelas";

export function Clock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {time}
    </>
  );
}

export default function Header({abrirJanela}: {abrirJanela: (id: entidadeKey) => void}) {
  const entities = [
    { href: "#pet", img: "/entities/small-pet.png", alt: "Logo do PET" },
    { href: "#conectadas", img: "/entities/small-conectadas.png", alt: "Logo do Conectadas" },
    { href: "#caccom", img: "/entities/small-caccom.png", alt: "Logo do CACCOM" },
    { href: "#cainfo", img: "/entities/small-cainfo.png", alt: "Logo do CAINFO" },
    { href: "#ieee", img: "/entities/small-ieee.png", alt: "Logo do IEEE" },
    { href: "#robodin", img: "/entities/small-robodin.png", alt: "Logo do RoboDIN" },
    { href: "#aaacex", img: "/entities/small-aaacex.png", alt: "Logo da AAACEX" },
    { href: "#main", img: "/entities/small-main.png", alt: "Logo da Main" },
    { href: "#aedin", img: "/entities/small-aedin.png", alt: "Logo da AEDIN" },
  ];

  return (
    <header
      id="inicio"
      className="h-20 flex sticky top-0 z-50 bg-white text-black w-full"
    >
      <div className="w-full flex items-center justify-between p-4">
        <div className="flex items-center justify-between gap-4">
          {/* Start Button */}
          <Link href="/#home">
            <div className="flex items-center justify-center gap-2 color-black p-2 font-black text-3xl
                            border-3 border-t-neutral-200 border-l-neutral-200 border-r-black border-b-black
                            hover:border-b-neutral-200 hover:border-r-neutral-200 hover:border-l-black hover:border-t-black hover:bg-gray-200">
              <Image
              src={"/logo/start-logo.png"}
              width={390}
              height={290}
              alt="Logo da Recepção de Calouros"
              className="max-w-11 mx-auto"
              />
              Start
            </div>
          </Link>
          <div className="bg-black h-14 w-0.5 border-r-2"></div>
          {/* Entities Menu */}
          <div className="flex-1 flex">
            <nav className="flex justify-center">
              <ul className="flex justify-around md:justify-center">
                {Object.entries(DADOSENTIDADES).map(([chave, dados]) => (
                  <li key={chave}>
                    <div onClick={() => {abrirJanela(chave as entidadeKey)}} className="p-2 border-3 border-white cursor-pointer
                          hover:border-b-neutral-200 hover:border-r-neutral-200 hover:border-l-black hover:border-t-black hover:bg-gray-200">
                      <Image
                        src={dados.image_header}
                        width={350}
                        height={330}
                        alt={"Logo" + dados.titulo}
                        className="max-w-14 mx-auto"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* <div className="bg-black h-14 w-0.5 border-r-2"></div> */}
      </div>

        <div className="flex items-center gap-4">
          <div className="bg-black h-14 w-0.5 border-r-2"></div>
          <div className="text-3xl">
            <Clock />
          </div>
        </div>

      </div>
    </header>
  );
}