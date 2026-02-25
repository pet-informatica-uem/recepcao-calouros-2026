import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex items-center justify-center pr-10">
      
      <div className="relative w-200 aspect-1400/730">
        
        {/* Big Window */}
        <div className="absolute top-0 right-0 w-[83%] aspect-1500/730">
          <Image
            src="/logo/big-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float"
          />
          <Image
            src="/logo/big-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white translate-x-5 translate-y-5 animate-float-fast"
          />
          <Image
            src="/logo/main-big-window.png"
            alt="Janela com a logo"
            fill
            className="object-contain border border-white translate-x-10 translate-y-10 animate-float-slow"
          />
        </div>

        {/* Small Window */}
        <div className="absolute bottom-0 left-0 w-[34%] aspect-520/330">
          <Image
            src="/logo/small-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float"
          />
          <Image
            src="/logo/small-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white translate-x-4 translate-y-4 animate-float-fast"
          />
          <Image
            src="/logo/main-small-window.png"
            alt="Janela com a logo"
            fill
            className="object-contain border border-white translate-x-8 translate-y-8 animate-float-slow"
          />
        </div>

      </div>
    </section>
  );
}