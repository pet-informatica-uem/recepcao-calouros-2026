import Image from "next/image";

type DesktopIconProps = {
  label: string;
  onClick: () => void;
};

export default function DesktopIcon({ label, onClick }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-white hover:bg-white/20 p-3"
    >
      <div className="w-16 h-16 flex items-center justify-center font-bold">
        <Image
        src="/file-black.png"
        alt="Ícone de arquivo de texto"
        width={460}
        height={570}
        />
      </div>
      <span className="mt-2">{label}</span>
    </button>
  );
}