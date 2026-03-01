export default function Footer() {
    return(
        <div className="flex flex-col gap-2 w-full h-fit bg-white text-center py-2 text-black justify-around items-center
                        md:flex-row md:gap-0 " >
            <div className="text-sm md:text-base flex flex-col md:flex-row">
                <p>
                    Mantenha-se atualizado pelo Instagram do &nbsp;
                </p>
                <p>
                    <a className="cursor-pointer underline decoration-2 decoration-solid  text-[#0212FE]" href="https://www.instagram.com/din__uem/" target="_blank" rel="noopener noreferrer">Departamento de Informática (DIN)</a>
                </p>
            </div>
            <p className="text-xs md:text-base">
                Feito com ❤ pela comissão organizadora da Recepção de Calouros 2026
            </p>
        </div>
    )
}