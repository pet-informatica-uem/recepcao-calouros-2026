import { Period } from "./desktop/days";

type popUpPeriodoProps = {
  label: Period;
};

export default function popUpPeriodo({ label }: popUpPeriodoProps) {
  return (
    <div className="bg-white h-100 w-100 border-2  border-blue-600 text-blue-600 justify px-3 py-3">
      <p className="text-left "> {label.name.toLowerCase()}.png </p>
      <div className="bg-blue-600 h-full w-full text-white text-[80px]">
        <p>{label.name.toUpperCase()} -&gt;</p>
      </div>
    </div>
  );
}
