import Image from "next/image";

type DesktopIconProps = {
  label: string;
  onClick: () => void;
  isActive?: boolean;
};

export default function DesktopIcon({ label, onClick, isActive }: DesktopIconProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center text-white hover:bg-white/20 p-3 cursor-pointer"
    >
      <div className="w-16 h-16 flex items-center justify-center font-bold">
        <Image
        src={isActive ? "/file-blue.png" : "/file-black.png"}
        alt="Ícone de arquivo de texto"
        width={460}
        height={570}
        />
      </div>
      <span className="mt-2">{label}</span>
    </button>
  );
}