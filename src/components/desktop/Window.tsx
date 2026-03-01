type WindowProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Window({ title, children, onClose }: WindowProps) {
  return (
    <div className="relative w-[95%] max-w-212.5 font-mono mb-20 mt-4 mx-auto">
      <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-full h-full border-2 md:border-4 border-white bg-black -z-10" />
      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border-2 md:border-4 border-white bg-black -z-20" />

      <div className="bg-black border-2 md:border-4 border-white">
        <div className="flex justify-between items-center bg-white text-black px-4 py-2">
          <span className="font-bold uppercase text-[10px] md:text-xs tracking-widest">{title}</span>
          <button onClick={onClose} className="cursor-pointer text-2xl md:text-3xl leading-none">×</button>
        </div>

        {/* Removido overflow-y-auto e max-h */}
        <div className="p-6 md:p-10 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}