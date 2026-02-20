export type Day = {
  id: string;
  label: string;
  schedule: string[];
};

export const days: Day[] = [
  {
    id: "segunda",
    label: "segunda-feira",
    schedule: ["08:00 - Abertura", "10:00 - Palestra", "14:00 - Oficina"],
  },
  {
    id: "terca",
    label: "terça-feira",
    schedule: ["09:00 - Workshop", "13:00 - Mesa Redonda"],
  },
  {
    id: "quarta",
    label: "quarta-feira",
    schedule: ["08:30 - Minicurso", "15:00 - Campeonato"],
  },
  {
    id: "quinta",
    label: "quinta-feira",
    schedule: ["08:30 - Minicurso", "15:00 - Campeonato"],
  },
];