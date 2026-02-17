import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="relative w-250">
        <Image
          src="/big-window.png"
          alt="Janela vazia"
          width={1500}
          height={730}
          className="absolute w-full
              border border-white animate-float-slow"
        />
        <Image
          src="/big-window.png"
          alt="Janela vazia"
          width={1500}
          height={730}
          className="absolute w-full translate-x-4 translate-y-4
              border border-white animate-float" 
        />
        <Image
          src="/main-big-window.png"
          alt="Janela com a logo da Recepção de Calouros UEM"
          width={1500}
          height={730}
          className="absolute w-full translate-x-8 translate-y-8
              border border-white animate-float-slow"
        />
      </div>
    </section>
  );
}