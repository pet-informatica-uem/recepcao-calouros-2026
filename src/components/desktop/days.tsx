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
    introText: "Na segunda-feira, a UEM realizará a Calourada 2026, resultado de parceria das pró-reitorias de Ensino (PEN) e de Extensão e Cultura (PEC), por meio da Diretoria de Cultura (DCU), com o Diretório Central de Estudantes (DCE). O evento contará com a realização de atividades culturais e artísticas.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "BATERIAS E ATLÉTICAS",
            tags: ["Ciência da Computação"],
            time: "08:00 -> 08:30",
            location: "Em frente ao Restaurante Universitário (RU)",
            description: "Recepção animada com as baterias e atléticas dos cursos."
          },
          {
            title: "INÍCIO DO CERIMONIAL",
            tags: ["Ciência da Computação"],
            time: "08:30 -> 09:00",
            location: "Restaurante Universitário (RU)",
            description: "Abertura oficial da Calourada 2026 da UEM, com falas institucionais e Boas-vindas do Reitor, Vice-reitora, DEG, DCU e DCE."
          },
          {
            title: "APRESENTAÇÃO CULTURAL E CAFÉ DA MANHÃ",
            tags: ["Ciência da Computação"],
            time: "09:00",
            location: "Restaurante Universitário (RU)",
            description: "Momento cultural seguido de um café da manhã para promover integração entre os estudantes."
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "BATERIAS E ATLÉTICAS",
            tags: ["Engenharia de Software"],
            time: "19:00 -> 19:30",
            location: "Em frente ao Restaurante Universitário (RU)",
            description: "Recepção noturna com as baterias e atléticas dos cursos."
          },
          {
            title: "INÍCIO DO CERIMONIAL",
            tags: ["Engenharia de Software"],
            time: "19:30 -> 20:00",
            location: "Restaurante Universitário (RU)",
            description: "Abertura oficial da Calourada 2026 da UEM, com falas institucionais e Boas-vindas do Reitor, Vice-reitora, DEG, DCU e DCE."
          },
          {
            title: "APRESENTAÇÃO CULTURAL E LANCHE",
            tags: ["Engenharia de Software"],
            time: "20:00",
            location: "Restaurante Universitário (RU)",
            description: "Momento cultural seguido de um lanche para promover integração entre os estudantes."
          }
        ]
      }
    ]
  },
  {
    id: "terça",
    label: "DIA 10/03 (TERÇA - FEIRA)",
    introText: "Na terça-feira, os calouros conhecerão mais profundamente o Departamento de Informática, seus cursos, estrutura e oportunidades acadêmicas.",
    periods: [
      {
        name: "TARDE",
        activities: [
          {
            title: "APRESENTAÇÃO DO DEPARTAMENTO DE INFORMÁTICA",
            tags: ["Ciência da Computação"],
            time: "13:30 -> 14:30",
            location: "Bloco C56 - DIN",
            description: "Apresentação institucional do Departamento de Informática (DIN), abordando sua estrutura, projetos, laboratórios, áreas de pesquisa e funcionamento acadêmico."
          },
          {
            title: "APRESENTAÇÃO DO CURSO DE CIÊNCIA DA COMPUTAÇÃO",
            tags: ["Ciência da Computação"],
            time: "14:30 -> 15:30",
            location: "Bloco C56 - DIN",
            description: "Detalhamento da grade curricular, oportunidades acadêmicas, projetos de extensão e pesquisa, além de orientações importantes para os novos estudantes do curso."
          },
          {
            title: "COFFEE BREAK",
            tags: ["Ciência da Computação"],
            time: "15:30 -> 16:30",
            location: "Bloco C56 - DIN",
            description: "☕☕☕"
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "APRESENTAÇÃO DO DEPARTAMENTO DE INFORMÁTICA",
            tags: ["Engenharia de Software"],
            time: "19:30 -> 20:30",
            location: "Bloco C56 - DIN",
            description: "Apresentação institucional do Departamento de Informática (DIN), abordando sua estrutura, projetos, laboratórios, áreas de pesquisa e funcionamento acadêmico."
          },
          {
            title: "APRESENTAÇÃO DO CURSO DE ENGENHARIA DE SOFTWARE",
            tags: ["Engenharia de Software"],
            time: "20:30 -> 21:30",
            location: "Bloco C56 - DIN",
            description: "Detalhamento da grade curricular, oportunidades acadêmicas, projetos de extensão e pesquisa, além de orientações importantes para os novos estudantes do curso"
          },
          {
            title: "COFFEE BREAK",
            tags: ["Engenharia de Software"],
            time: "21:30 -> 22:30",
            location: "Bloco C56 - DIN",
            description: "☕☕☕"
          }
        ]
      }
    ]
  },
  {
    id: "quarta",
    label: "DIA 11/03 (QUARTA - FEIRA)",
    introText: "Na quarta-feira, a UEM continuará as atividades da Calourada 2026, dedicada à integração geral dos estudantes com a comunidade universitária.",
    periods: [
      {
        name: "MANHÃ",
        activities: [
          {
            title: "FEIRA DE BOAS VINDAS",
            tags: ["Ciência da Computação"],
            time: "10:00 -> 13:00",
            location: "Estacionamentos do RU e BCE",
            description: "Feira de Boas Vindas com atrações artísticas, muita diversão e food trucks!"
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "FEIRA DE BOAS VINDAS",
            tags: ["Engenharia de Software"],
            time: "16:00 -> 22:00",
            location: "Estacionamentos do RU e BCE",
            description: "Feira de Boas Vindas com atrações artísticas, muita diversão e food trucks!"
          }
        ]
      }
    ]
  },
  {
    id: "quinta",
    label: "DIA 12/03 (QUINTA - FEIRA)",
    introText: "Na quinta-feira, os estudantes conhecerão os programas acadêmicos e participarão de atividades práticas voltadas à área da computação.",
    periods: [
      {
        name: "TARDE",
        activities: [
          {
            title: "MESA REDONDA DE APRESENTAÇÃO DOS PROGRAMAS",
            tags: ["Ciência da Computação"],
            time: "13:30 -> 15:30",
            location: "Bloco C56 - DIN",
            description: "Mesa redonda com representantes de programas acadêmicos (CACCOM, Main, PET, Conectadas, RoboDIN, Enactus, Atlética e IEEE), apresentando oportunidades de participação ao longo da graduação."
          },
          {
            title: "WORKSHOP DE LINUX E SEU TERMINAL",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "15:30 -> 17:30",
            location: "Bloco C56 - DIN",
            description: "Workshop introdutório sobre o sistema Linux e utilização do terminal, apresentando comandos básicos, organização de arquivos e noções fundamentais para o dia a dia acadêmico na área de tecnologia. O Workshop será realizado pelo programa PET-Informática."
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "MESA REDONDA DE APRESENTAÇÃO DOS PROGRAMAS",
            tags: ["Engenharia de Software"],
            time: "19:30 -> 21:30",
            location: "Bloco C56 - DIN",
            description: "Mesa redonda com representantes de programas acadêmicos (CAINFO, Main, PET, Conectadas, RoboDIN, Enactus, Atlética e IEEE), apresentando oportunidades de participação ao longo da graduação."
          }
        ]
      }
    ]
  },
  {
    id: "sexta",
    label: "DIA 13/03 (SEXTA - FEIRA)",
    introText: "Sextou com o encerramento da semana de recepção, o dia será dedicado à integração dos novos estudantes.",
    periods: [
      {
        name: "TARDE",
        activities: [
          {
            title: "VIR, VER E VENCER! OS SEGREDOS DE COMO ENFRENTAR OS CURSOS DE GRADUAÇÃO DO DIN",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "13:30 -> 14:30",
            location: "Bloco C56 - DIN",
            description: "Palestra do Prof. Dr. Alisson Svaigen sobre a jornada na UEM, abordando desafios, dicas e a importância da resiliência ao longo do curso."
          },
          {
            title: "CAMINHADA",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "14:30 -> 17:30",
            location: "Bloco C56 - DIN",
            description: "A comissão de recepção realizará uma caminhada por alguns pontos característicos da UEM, com enigmas e jogos para integração dos novos calouros."
          }
        ]
      },
      {
        name: "NOITE",
        activities: [
          {
            title: "INTEGRAÇÃO",
            tags: ["Ciência da Computação", "Engenharia de Software"],
            time: "19:30 -> 22:30",
            location: "Bloco C56 - DIN",
            description: "À noite a comissão da recepção preparará o departamento para sediar uma série de enigmas para serem desvendados e resolvidos em conjunto pelos calouros."
          }
        ]
      }
    ]
  }
];