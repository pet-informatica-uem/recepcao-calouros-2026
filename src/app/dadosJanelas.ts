export default interface entidadeProps {
    image: string;
    image_header: string;
    titulo: string;
    text: string;
    cor: string;
    instagram: string | null;
    site: string | null;
    facebook: string | null;
    discord: string | null;
}

export type entidadeKey = keyof typeof DADOSENTIDADES

export const DADOSENTIDADES = {
    "#pet": {
        image: "/entities/pet-pixel.png",
        image_header: "/entities/small-pet.png",
        titulo: "PET INFORMÁTICA",
        text: "O PET-Informática é um programa de educação tutorial que promove a integração entre alunos, professores e a comunidade. Com foco em ensino, pesquisa e extensão, o PET organiza eventos, cursos e projetos que desenvolvem habilidades técnicas e interpessoais dos estudantes.",
        cor: "#3788D1",
        instagram: "https://www.instagram.com/petinfouem/",
        discord: "https://discord.com/invite/q3fpMKW9CS",
        site: "https://www.petinfouem.com.br/",
        facebook: null
    },
    "#conectadas": {
        image: "/entities/conectadas-pixel.png",
        image_header: "/entities/small-conectadas.png",
        titulo: "CONECTADAS",
        text: "O Conectadas é um coletivo que busca ampliar a representatividade e a inclusão das mulheres nas áreas de tecnologia. Com ações como palestras e grupos de apoio, promovem a equidade de gênero e encorajam mais mulheres a seguirem carreiras na computação e informática.",
        cor: "#DE3185",
        instagram: "https://www.instagram.com/conectadasuem/",
        discord: null,
        site: null,
        facebook:"https://www.facebook.com/conectadasuem"
    },
    "#caccom": {
        image: "/entities/caccom-pixel.png",
        image_header: "/entities/small-caccom.png",
        titulo: "CACCOM",
        text: "O Centro Acadêmico de Computação (CACCOM) é o espaço de representatividade dos alunos de computação. Com uma gestão democrática e participativa, o CACCOM organiza iniciativas voltadas ao fortalecimento da comunidade acadêmica e à defesa dos direitos dos estudantes.",
        cor: "#FE0000",
        instagram: "https://www.instagram.com/caccomuem/",
        discord: null,
        site: "http://www.din.uem.br/caccom/",
        facebook: null
    },
    "#cainfo": {
        image: "/entities/cainfo-pixel.png",
        image_header: "/entities/small-cainfo.png",
        titulo: "CAINFO",
        text: "O Centro Acadêmico de Informática (CAINFO) é a entidade que representa os estudantes dos cursos de informática da UEM. Atuando para acolher fortalecer a união entre os alunos, defender seus interesses e promover eventos que enriquecem a experiência acadêmica, além de contribuir para um ambiente universitário mais inclusivo.",
        cor: "#FD5920",
        instagram: "https://www.instagram.com/cainfouem/",
        discord: null,
        site: "http://www.din.uem.br/cainfo/",
        facebook: null
    },
    "#ieee": {
        image: "/entities/ieee-pixel.png",
        image_header: "/entities/small-ieee.png",
        titulo: "IEEE",
        text: "O Ramo Estudantil IEEE da UEM promove inovação e tecnologia por meio de quatro sociedades: RAS (automação e robótica), PES (energia), BioEng (engenharia biomédica) e CS (computação). Seus projetos incluem jogos educativos, automação assistiva, maquetes de usinas e desenvolvimento web, unindo teoria e prática para impactar a comunidade.",
        cor: "#DD8228",
        instagram: "https://www.instagram.com/ieeeuem/",
        discord: null,
        site: "https://www.ieee.org.br/",
        facebook: null
    },
    "#robodin": {
        image: "/entities/robodin-pixel.png",
        image_header: "/entities/small-robodin.png",
        titulo: "ROBODIN",
        text: "robodin robodin robodin robodin robodin robodin robodin robodin robodin robodin robodin robodin robodin robodin",
        cor: "#2C8B8D",
        instagram: "https://www.instagram.com/robodin.uem/",
        discord: null,
        site: null,
        facebook: null
    },
    "#aaacex": {
        image: "/entities/aaacex-pixel.png",
        image_header: "/entities/small-aaacex.png",
        titulo: "AAACEX",
        text: "aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex aaacex ",
        cor: "#EE2825",
        instagram: "https://www.instagram.com/exatasuem/",
        discord: null,
        site: null,
        facebook:null
    },
    "#main": {
        image: "/entities/main-pixel.png",
        image_header: "/entities/small-main.png",
        titulo: "MAIN EMPRESA JUNIOR",
        text: "main main main main main main main main main main main main main main main main main main main main main main main main main main main ",
        cor: "#AE3AC0",
        instagram: "https://www.instagram.com/main.ej.uem/",
        discord: null,
        site: null,
        facebook: null
    },
    "#aedin": {
        image: "/entities/aedin-pixel.png",
        image_header: "/entities/small-aedin.png",
        titulo: "AEDIN",
        text: "aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin aedin ",
        cor: "#0051B1",
        instagram: "https://www.instagram.com/aedin_uem/",
        discord: null,
        site: null,
        facebook: null
    },
}