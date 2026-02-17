'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isAberto, setIsAberto] = useState(false);
  const rotaAtual = usePathname(); // pega a rota atual da pagina

  // verifica se o link corresponde a pagina atual
  const isAtivo = (caminho: string) => rotaAtual === caminho;

  const linksNav = [
    { nome: "sobre nós", href: "/" },
    { nome: "petianos", href: "/petianos" },
    { nome: "eventos", href: "/eventos" },
    { nome: "contato", href: "#rodape" },
  ];

  // bloqueia o scroll da pagina quando o header mobile ta aberto
  useEffect(() => {
    document.body.style.overflow = isAberto ? "hidden" : "unset";
  }, [isAberto]);

  return (
    <header className="relative w-full bg-white z-50">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-20 xl:px-36">
        
        {/* logo */}
        <Link href="/" className="z-50 min-w-[3.44rem]">
          <Image src="/logo.svg" alt="Logo do PET" width={55} height={55} />
        </Link>

        {/* navegacao desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex flex-row text-lg font-extrabold text-blue gap-8 xl:gap-24">
            {linksNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className="group relative pb-1 transition-all duration-300 whitespace-nowrap">
                  {link.nome}
                  {/* link atual sublinhado */}
                  <span className={`absolute bottom-0 left-0 h-[0.125rem] bg-blue transition-all duration-300 ease-in-out
                    ${isAtivo(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}/>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* botao desktop */}
        <button className="hidden cursor-pointer lg:block text-white text-lg font-extrabold bg-blue py-1 px-4 rounded-md hover:scale-105 transition-all duration-300 whitespace-nowrap">
          entrar
        </button>

        {/* botao de menu hamburguer */}
        <button className="relative z-50 flex items-center justify-center lg:hidden w-10 h-10 text-blue transition-all duration-300"
          onClick={() => setIsAberto(!isAberto)}
        >
          {/* animacao de transicao entre os icones */}
          <div className={`absolute transition-all duration-300 ${isAberto ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}`}>
            <Menu size={32} />
          </div>
          <div className={`absolute transition-all duration-300 ${isAberto ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-0"}`}>
            <X size={32} />
          </div>
        </button>

        {/* menu no mobile  */}
        <nav className={`fixed inset-0 bg-white transform transition-all duration-500 ease-in-out z-40
          ${isAberto ? "translate-x-0" : "translate-x-full"} lg:hidden flex flex-col items-center justify-center`}>
          <ul className="flex flex-col items-center gap-10 text-2xl font-extrabold text-blue">
            {linksNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group relative pb-2"
                  onClick={() => setIsAberto(false)}>
                  {link.nome}
                  <span className={`
                    absolute bottom-0 left-0 h-[0.188rem] bg-blue transition-all duration-300
                    ${isAtivo(link.href) ? "w-full" : "w-0"}
                  `}></span>
                </Link>
              </li>
            ))}
            <button className="mt-4 cursor-pointer text-white text-xl bg-blue py-2 px-10 rounded-md active:scale-95 transition-transform">
              entrar
            </button>
          </ul>
        </nav>
      </div>
    </header>
  )
}