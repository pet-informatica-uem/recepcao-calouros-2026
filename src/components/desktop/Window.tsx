type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {
  return (
    <div className="relative w-[850px] font-mono mb-20 mt-4">
      
      <div className="absolute -top-3 -right-3 w-full h-full border-2 border-white bg-black -z-10" />
      <div className="absolute -top-6 -right-6 w-full h-full border-2 border-white bg-black -z-20" />

      <div className="bg-black border-4 border-white overflow-hidden">
        <div className="flex justify-between items-center bg-white text-black px-4 py-2">
          <span className="font-bold uppercase text-xs tracking-widest">{title}</span>
          <button 
            onClick={onClose} 
            className="cursor-pointer transition-colors text-3xl"
          >
            x
          </button>
        </div>

        <div className="p-10 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}