import { SiGoogleforms } from "@icons-pack/react-simple-icons";

export default function Inscricao() {
  return (
    <div className="flex flex-col items-center text-center space-y-7">
      <span className="text-2xl">
        Se inscreva no formulario para ganhar Atividade Acadêmica Complementar
        (AAC)
      </span>
      <div className="w-fit flex justify content-betweenp-2 border-3 border-white cursor-pointer hover:bg-white px-1 py-3 hover:text-black hover:border-black">
        <a
          href="https://forms.gle/k7DCVtbmeCjv1GjQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3"
        >
          <SiGoogleforms
            size={40}
            strokeWidth={3}
            style={{ shapeRendering: "crispEdges" }}
          />
          <span className="text-2xl font-medium"> Inscreva-se no Forms</span>
        </a>
      </div>
      <span className="text-2xl">
        Mantenha-se informado no instagram do{" "}
        <a
          href="https://www.instagram.com/din__uem/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-[#0212FE] transition-colors"
        >
          Departamento de Informática (DIN)
        </a>
      </span>
    </div>
  );
}
