import { useLanguage, type Lang } from "./LanguageContext";

export type Heading = { pre: string; highlight: string; post: string };

export type UIStrings = {
  nav: {
    about: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
    cta: string;
    back: string;
  };
  hero: {
    available: string;
    viewProjects: string;
    portraitAlt: string;
    expLabel: string;
    expValue: string;
    online: string;
    stats: { v: string; l: string }[];
  };
  about: {
    tag: string;
    heading: Heading;
    quote: string;
    workspaceAlt: string;
  };
  stack: {
    tag: string;
    heading: Heading;
  };
  projects: {
    tag: string;
    heading: Heading;
    blurb: string;
    prevAria: string;
    nextAria: string;
  };
  experience: {
    tag: string;
    heading: Heading;
  };
  education: {
    tag: string;
    heading: Heading;
    certifications: string;
    all: string;
    total: string;
    study: string;
    certAriaPrefix: string;
    certAriaSuffix: string;
  };
  contact: {
    tag: string;
    heading: Heading;
    blurb: string;
    footerNote: string;
  };
  projectDetail: {
    allProjects: string;
    liveDemo: string;
    code: string;
    stackLabel: string;
    overview: string;
    problem: string;
    solution: string;
    decisions: string;
    challenges: string;
    improvements: string;
    gallery: string;
    nextProject: string;
  };
  notFound: {
    tag: string;
    message: string;
    back: string;
  };
};

export const ui: Record<Lang, UIStrings> = {
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cta: "Let's talk",
      back: "← Back",
    },
    hero: {
      available: "Available for new projects",
      viewProjects: "View projects",
      portraitAlt: "Portrait of",
      expLabel: "Exp",
      expValue: "2+ yrs",
      online: "Online now",
      stats: [
        { v: "2+", l: "Years of experience" },
        { v: "10+", l: "Systems and features built" },
        { v: "14", l: "Technologies used" },
        { v: "∞", l: "Cups of coffee" },
      ],
    },
    about: {
      tag: "// about me",
      heading: { pre: "Engineering with ", highlight: "purpose", post: " and aesthetics." },
      quote: "\"Well-written code is a form of empathy\"",
      workspaceAlt: "Developer workspace",
    },
    stack: {
      tag: "// stack",
      heading: { pre: "Tools that ", highlight: "shape", post: " my work" },
    },
    projects: {
      tag: "// selected work",
      heading: { pre: "Projects that tell ", highlight: "stories", post: "" },
      blurb:
        "Each project is a real problem, solved with deliberate technical decisions. Click for the full case study.",
      prevAria: "Previous projects",
      nextAria: "Next projects",
    },
    experience: {
      tag: "// journey",
      heading: { pre: "Places where I built ", highlight: "real things", post: "." },
    },
    education: {
      tag: "// education",
      heading: { pre: "", highlight: "Continuous", post: " learning" },
      certifications: "Certifications",
      all: "All",
      total: "total",
      study: "of study",
      certAriaPrefix: "View certificate:",
      certAriaSuffix: "(opens in a new tab)",
    },
    contact: {
      tag: "// let's build",
      heading: { pre: "Got an idea? ", highlight: "Let's talk.", post: "" },
      blurb:
        "I'm open to freelance projects, full-time roles and open source collaborations. I usually reply within 24h.",
      footerNote: "Built with coffee and curiosity.",
    },
    projectDetail: {
      allProjects: "All projects",
      liveDemo: "Live demo",
      code: "Code",
      stackLabel: "Stack:",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      decisions: "Technical decisions",
      challenges: "Challenges",
      improvements: "Future improvements",
      gallery: "Gallery",
      nextProject: "Next project",
    },
    notFound: {
      tag: "// error",
      message: "Page not found",
      back: "← Back to home",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      stack: "Stack",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      cta: "Vamos conversar",
      back: "← Voltar",
    },
    hero: {
      available: "Disponível para novos projetos",
      viewProjects: "Ver projetos",
      portraitAlt: "Retrato de",
      expLabel: "Exp",
      expValue: "2+ anos",
      online: "Online agora",
      stats: [
        { v: "2+", l: "Anos de experiência" },
        { v: "10+", l: "Sistemas e funcionalidades desenvolvidas" },
        { v: "14", l: "Tecnologias utilizadas" },
        { v: "∞", l: "Cafés tomados" },
      ],
    },
    about: {
      tag: "// sobre mim",
      heading: { pre: "Engenharia com ", highlight: "propósitos", post: " e estética." },
      quote: "\"Código bem escrito é uma forma de empatia\"",
      workspaceAlt: "Workspace do desenvolvedor",
    },
    stack: {
      tag: "// stack",
      heading: { pre: "Ferramentas que ", highlight: "moldam", post: " meu trabalho" },
    },
    projects: {
      tag: "// trabalhos selecionados",
      heading: { pre: "Projetos que contam ", highlight: "histórias", post: "" },
      blurb:
        "Cada projeto é um problema real, resolvido com decisões técnicas conscientes. Clique para o case study completo.",
      prevAria: "Projetos anteriores",
      nextAria: "Próximos projetos",
    },
    experience: {
      tag: "// jornada",
      heading: { pre: "Lugares onde construí ", highlight: "coisas reais", post: "." },
    },
    education: {
      tag: "// formação",
      heading: { pre: "Aprendizado ", highlight: "contínuo", post: "" },
      certifications: "Certificações",
      all: "Todos",
      total: "no total",
      study: "de estudo",
      certAriaPrefix: "Ver certificado:",
      certAriaSuffix: "(abre em nova aba)",
    },
    contact: {
      tag: "// vamos construir",
      heading: { pre: "Tem uma ideia? ", highlight: "Vamos conversar.", post: "" },
      blurb:
        "Estou aberto para projetos freelance, posições full-time e colaborações em open source. Geralmente respondo em até 24h.",
      footerNote: "Construído com café e curiosidade.",
    },
    projectDetail: {
      allProjects: "Todos os projetos",
      liveDemo: "Live demo",
      code: "Código",
      stackLabel: "Stack:",
      overview: "Visão geral",
      problem: "Problema",
      solution: "Solução",
      decisions: "Decisões técnicas",
      challenges: "Desafios",
      improvements: "Melhorias futuras",
      gallery: "Galeria",
      nextProject: "Próximo projeto",
    },
    notFound: {
      tag: "// erro",
      message: "Página não encontrada",
      back: "← Voltar ao início",
    },
  },
};

export function useUI(): UIStrings {
  const { lang } = useLanguage();
  return ui[lang];
}
