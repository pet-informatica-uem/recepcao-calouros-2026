import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center">
        <div className="relative w-fill">
            <div className="relative w-150">
                <Image
                src="/logo/big-window.png"
                alt="Janela vazia"
                width={1500}
                height={730}
                className="absolute w-full
                    border border-white animate-float"
                />
                <Image
                src="/logo/big-window.png"
                alt="Janela vazia"
                width={1500}
                height={730}
                className="absolute w-full translate-x-4 translate-y-4
                    border border-white animate-float-fast" 
                />
                <Image
                src="/logo/main-big-window.png"
                alt="Janela com a logo da Recepção de Calouros UEM"
                width={1500}
                height={730}
                className="absolute w-full translate-x-8 translate-y-8
                    border border-white animate-float-slow"
                />
            </div>
            <div className="relative w-56 translate-y-56 -translate-x-28">
                <Image
                src="/logo/small-window.png"
                alt="Janela vazia"
                width={520}
                height={330}
                className="absolute w-full
                    border border-white animate-float"
                />
                <Image
                src="/logo/small-window.png"
                alt="Janela vazia"
                width={520}
                height={330}
                className="absolute w-full translate-x-4 translate-y-4
                    border border-white animate-float-fast" 
                />
                <Image
                src="/logo/main-small-window.png"
                alt="Janela com a logo da Recepção de Calouros UEM"
                width={520}
                height={330}
                className="absolute w-full translate-x-8 translate-y-8
                    border border-white animate-float-slow"
                />
            </div>
        </div>
    </section>
  );
}