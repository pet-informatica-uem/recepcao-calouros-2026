"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DADOSENTIDADES, entidadeKey } from "../app/dadosJanelas";
import { SiGoogleforms } from "@icons-pack/react-simple-icons";

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

  return <>{time}</>;
}

export default function Header({
  abrirJanela,
}: {
  abrirJanela: (id: entidadeKey) => void;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [startOpen, setStartOpen] = useState(false);

  // Detecta tamanho da tela
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="flex sticky top-0 z-50 text-black w-full flex-col">
      <div className="w-full flex items-center justify-between px-4 py-2 md:py-1 bg-white relative">
        <div className="flex items-center justify-between gap-4">
          {/* Start Button */}
          {isMobile ? (
            <div
              onClick={() => setStartOpen(!startOpen)}
              className="flex items-center justify-center gap-2 p-2 font-black text-3xl
              border-3 border-t-neutral-200 border-l-neutral-200 border-r-black border-b-black
              active:border-b-neutral-200 active:border-r-neutral-200 active:border-l-black active:border-t-black"
            >
              <Image
                src={"/logo/start-logo.png"}
                width={390}
                height={290}
                alt="Logo"
                className="max-w-11 mx-auto"
              />
              Start
            </div>
          ) : (
            <div
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
              className="flex items-center justify-center gap-2 p-2 font-black text-3xl
              border-3 border-t-neutral-200 border-l-neutral-200 border-r-black border-b-black
              hover:border-b-neutral-200 hover:border-r-neutral-200 hover:border-l-black hover:border-t-black hover:bg-gray-200"
            >
              <Image
                src={"/logo/start-logo.png"}
                width={390}
                height={290}
                alt="Logo"
                className="max-w-11 mx-auto"
              />
              Start
            </div>
          )}

          <div className="bg-black h-14 w-0.5 border-r-2"></div>

          {/* Entities Desktop */}
          <div className="hidden md:flex">
            <nav>
              <ul className="flex">
                {Object.entries(DADOSENTIDADES).map(([chave, dados]) => (
                  <li key={chave}>
                    <div
                      onClick={() => abrirJanela(chave as entidadeKey)}
                      className="p-2 border-3 border-white cursor-pointer
                      hover:border-b-neutral-200 hover:border-r-neutral-200 hover:border-l-black hover:border-t-black hover:bg-gray-200"
                    >
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
          <div className="hidden md:block bg-black h-14 w-0.5 border-r-2"></div>
          {/* Subscription Button */}
          <div>
            <a
              href="https://forms.gle/k7DCVtbmeCjv1GjQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 md:py-4 border-3 border-white cursor-pointer
              hover:border-b-neutral-200 hover:border-r-neutral-200 hover:border-l-black hover:border-t-black hover:bg-gray-200"
            >
              <SiGoogleforms
                size={32}
                strokeWidth={3}
                style={{ shapeRendering: "crispEdges" }}
              />
              <span className="text-xl font-medium">Inscreva-se</span>
            </a>
          </div>
        </div>

        {/* Clock Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-black h-14 w-0.5 border-r-2"></div>
          <div className="text-3xl">
            <Clock />
          </div>
        </div>
      </div>

      {/* Start Menu Mobile */}
      {isMobile && startOpen && (
        <div className="absolute top-18.5 left-0 w-72 bg-white border-black border-t-3 z-50 shadow-xl">
          <nav className="p-3">
            <p className="font-bold mb-2">ENTIDADES</p>
            <ul className="flex flex-col gap-1 pr-2">
              {Object.entries(DADOSENTIDADES).map(([chave, dados]) => (
                <li key={chave}>
                  <Link
                    href={`/${chave}`}
                    onClick={() => setStartOpen(false)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex p-2 cursor-pointer items-center gap-4 hover:bg-gray-200">
                      <Image
                        src={dados.image_header}
                        width={350}
                        height={330}
                        alt={"Logo" + dados.titulo}
                        className="max-w-10"
                      />
                      <p>{dados.titulo}</p>
                    </div>
                    <p>{">"}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}