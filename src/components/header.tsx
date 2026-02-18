import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      id="inicio"
      className="h-20 flex sticky top-0 z-50 bg-white text-black"
    >
      <div className="flex items-center justify-between gap-2 md:gap-8 md:justify-between px-4">
        {/* Start Button */}
        <Link href="/#home">
          <div className="flex items-center justify-center gap-3 color-black border border-black p-3 hover:bg-gray-200">
            <Image
            src={"/logo/start-logo.png"}
            width={390}
            height={290}
            alt="Logo da Recepção de Calouros"
            className="max-w-15 mx-auto"
            />
            Start
          </div>
        </Link>

        {/* Entities Menu */}
        <div className="flex-1 flex">
          <nav className="flex justify-center">
            <ul className="flex justify-around md:justify-center">
              <li>
                <Link href="/#pet">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-pet.png"}
                    width={350}
                    height={330}
                    alt="Logo do PET"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#conectadas">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-conectadas.png"}
                    width={350}
                    height={330}
                    alt="Logo do Conectadas"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#caccom">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-caccom.png"}
                    width={350}
                    height={330}
                    alt="Logo do CACCOM"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                  
                </Link>
              </li>
              <li>
                <Link href="/#cainfo">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-cainfo.png"}
                    width={350}
                    height={330}
                    alt="Logo do CAINFO"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#ieee">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-ieee.png"}
                    width={350}
                    height={330}
                    alt="Logo do IEEE"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#robodin">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-robodin.png"}
                    width={350}
                    height={330}
                    alt="Logo do RoboDIN"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#aaacex">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-aaacex.png"}
                    width={350}
                    height={330}
                    alt="Logo da AAACEX"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#main">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-main.png"}
                    width={350}
                    height={330}
                    alt="Logo da Main"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#aedin">
                  <div className="p-2 hover:bg-gray-200">
                    <Image
                    src={"/entities/small-aedin.png"}
                    width={350}
                    height={330}
                    alt="Logo da AEDIN"
                    className="max-w-14 mx-auto"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}