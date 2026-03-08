import { Period } from "./desktop/days";

type popUpPeriodoProps = {
  label: Period;
};

export default function popUpPeriodo({ label }: popUpPeriodoProps) {
  return (
    <div className="hidden md:flex bg-white h-80 w-80 flex-col border-2  border-blue-600 text-blue-600 px-3 py-3 absolute -left-75 translate-y-10">
      <div className="flex flex-row justify-between">
        <p className="text-left"> {label.name.toLowerCase()}.png </p>
        <div className="text-3xl -translate-y-2">×</div>
      </div>
      <div className="bg-blue-600 flex-1 text-white text-[60px] flex flex-col justify-center">
        <p>{label.name.toUpperCase()} -&gt;</p>
      </div>
    </div>
  );
}
