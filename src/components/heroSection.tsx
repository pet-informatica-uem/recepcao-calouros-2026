import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center w-full min-h-125 py-10 overflow-x-hidden">
      
      <div className="relative w-[90%] max-w-250 aspect-1400/800 md:aspect-1400/730 mx-auto">
        
        {/* Big Window */}
        <div className="absolute top-0 right-3 w-[85%] md:w-[80%] aspect-1500/730">
          <div className="absolute inset-0 animate-float translate-x-2">
            <Image
            src="/logo/big-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float" 
            priority 
            />
          </div>
          <div className="absolute inset-0 translate-x-4 translate-y-2 md:translate-x-5 md:translate-y-5 animate-float-fast">
            <Image
            src="/logo/big-window.png" 
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float"
            />
          </div>
          <div className="absolute inset-0 translate-x-6 translate-y-4 md:translate-x-10 md:translate-y-10 animate-float-slow">
            <Image
            src="/logo/main-big-window.png"
            alt="Janela com a logo" 
            fill
            className="object-contain border border-white animate-float"
            />
          </div>
        </div>

        {/* Small Window*/}
        <div className="absolute bottom-0 left-0 w-[45%] md:w-[34%] aspect-520/330">
          <div className="absolute inset-0 animate-float translate-y-6 md:translate-y-4">
            <Image
            src="/logo/small-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float" 
            />
          </div>
          <div className="absolute inset-0 translate-x-1 translate-y-8 md:translate-x-4 md:translate-y-6 animate-float-fast">
            <Image
            src="/logo/small-window.png"
            alt="Janela vazia"
            fill
            className="object-contain border border-white animate-float" />
          </div>
          <div className="absolute inset-0 translate-x-2 translate-y-10 md:translate-x-8 md:translate-y-8 animate-float-slow">
            <Image
            src="/logo/main-small-window.png"
            alt="Janela com a logo"
            fill
            className="object-contain border border-white animate-float"
            />
          </div>
        </div>

      </div>
    </section>
  );
}