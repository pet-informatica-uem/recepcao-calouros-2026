type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {
  return (
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-200
                    bg-black border-4 border-white shadow-2xl text-xl">

      <div className="flex justify-between items-center
                      bg-white text-black px-3 py-1">
        <span>{title}</span>
        <button
          onClick={onClose}
          className="px-2 font-bold text-2xl"
        >
          X
        </button>
      </div>

      <div className="p-4 text-white">
        {children}
      </div>
    </div>
  );
}