export type Activity = {
  title: string;
  tags: string[];
  time: string;
  location: string;
  description: string;
};

export type Period = {
  name: "MANHÃ" | "TARDE" | "NOITE";
  activities: Activity[];
};

export type Day = {
  id: string;
  label: string;
  introText: string;
  periods: Period[];
};

export const days: Day[] = [
  {
    id: "segunda",
    label: "DIA 09/03 (SEGUNDA - FEIRA)",
    introText: "Abertura oficial da Recepção de Calouros UEM 2026. Um momento de integração com a Pró-Reitoria e apresentações culturais no Bloco C-34.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "CAFÉ COM PET E EGRESSOS",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "08:00 -> 10:00",
            location: "Bloco C-34 - Anfiteatro",
            description: "Um café da manhã especial organizado pelo PET-Informática para recepcionar os novos alunos e alinhar expectativas com egressos do curso."
          }
        ]
      },
      {
        name: "TARDE",
        activities: [
          {
            title: "VISITA AOS LABORATÓRIOS",
            tags: ["Ciência da Computação"],
            time: "14:00 -> 17:30",
            location: "DIN - Departamento de Informática",
            description: "Tour guiado pelos laboratórios de pesquisa, incluindo as áreas de Processamento Digital de Imagens e Computação Visual."
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "PALESTRA: O UNIVERSO DA COMPUTAÇÃO",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "19:30 -> 22:00",
            location: "Auditório Central",
            description: "Uma conversa sobre as diversas áreas de atuação, desde Backend com Java até a criação de Shaders e Computação Gráfica."
          }
        ]
      }
    ]
  },
  {
    id: "terça",
    label: "DIA 10/03 (TERÇA - FEIRA)",
    introText: "Dia focado em ferramentas essenciais e o ecossistema de desenvolvimento que você usará durante a graduação.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "WORKSHOP: SOBREVIVENDO AO LINUX",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "08:20 -> 11:50",
            location: "Laboratório 01 - DIN",
            description: "Aprenda a dominar o terminal, instalar pacotes e configurar seu ambiente de desenvolvimento para as disciplinas de programação."
          }
        ]
      },
      {
        name: "TARDE",
        activities: [
          {
            title: "INTRODUÇÃO AO GIT E GITHUB",
            tags: ["Engenharia de Software"],
            time: "13:30 -> 15:30",
            location: "Laboratório 03 - DIN",
            description: "Workshop prático sobre controle de versão, essencial para projetos em equipe e participação em Iniciativa Científica."
          }
        ]
      }
    ]
  },
  {
    id: "quarta",
    label: "DIA 11/03 (QUARTA - FEIRA)",
    introText: "Explorando as fronteiras da tecnologia",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "PALESTRAL",
            tags: ["Ciência da Computação"],
            time: "09:00 -> 11:00",
            location: "Anfiteatro do Bloco F-67",
            description: "Como algoritmos de processamento de imagem são usados para detectar exoplanetas e analisar manchas solares em grandes datasets astronômicos."
          }
        ]
      },
      {
        name: "TARDE",
        activities: [
          {
            title: "OFICINA",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "14:00 -> 17:00",
            location: "Laboratório 05 - DIN",
            description: "Aprenda os fundamentos da pipeline gráfica e como criar efeitos visuais incríveis utilizando a linguagem GLSL."
          }
        ]
      }
    ]
  },
  {
    id: "quinta",
    label: "DIA 12/03 (QUINTA - FEIRA)",
    introText: "Desafios e Competições. Prepare seu raciocínio lógico para o maior evento de programação da semana.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "CAMINHADA",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "08:00 -> 12:00",
            location: "C-56",
            description: "Caça ao tesouro pela universidade."
          }
        ]
      },
      {
        name: "TARDE",
        activities: [
          {
            title: "PALESTRA",
            tags: ["Ciência da Computação"],
            time: "13:30 -> 17:30",
            location: "Bloco C-34 - Sala 02",
            description: "Mão na massa com hardware: entenda como integrar sensores e atuadores usando C++ para criar robôs autônomos."
          }
        ]
      }
    ]
  },
  {
    id: "sexta",
    label: "DIA 13/03 (SEXTA - FEIRA)",
    introText: "Encerramento da semana com foco em projetos pessoais, comunidade acadêmica e diversão.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "INTEGRAÇÃO",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "09:00 -> 11:30",
            location: "Sala do PET",
            description: "Integração entre os calouros."
          }
        ]
      },
      {
        name: "TARDE",
        activities: [
          {
            title: "PALESTRA",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "14:00 -> 18:00",
            location: "Laboratório 01 - DIN",
            description: "Um desafio de 4 horas."
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "CHURRASCO DE INTEGRAÇÃO",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "20:00 -> 00:00",
            location: "Associação de Funcionários UEM",
            description: "Encerramento épico da semana com música e integração total entre veteranos e calouros."
          }
        ]
      }
    ]
  }
];