import type { Lang } from "@/i18n/LanguageContext";

type Localized<T> = Record<Lang, T>;

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

const contact = {
  name: "Luan Neumann",
  email: "luan.neumann.dev@gmail.com",
  github: "https://github.com/Luan-Neumann-Dev",
  linkedin: "https://linkedin.com/in/luan-henrique-neumann-dev",
};

const profileText: Localized<{
  title: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  location: string;
}> = {
  en: {
    title: "Full Stack Developer",
    tagline:
      "Laravel, PHP and PostgreSQL at the core, React and TypeScript on top — building features for a healthtech SaaS used by 100,000+ healthcare professionals.",
    shortBio:
      "Full-stack software engineer with about 3 years of professional experience, specialized in Laravel, PHP and PostgreSQL. I build features for a healthtech SaaS used by 100,000+ healthcare professionals across 3,500+ clinics, and I'm now also working with React Native and TypeScript on the patient mobile app.",
    longBio:
      "I'm on the innovation team at ZenFisio — the team that builds what the product has never had — after starting on the maintenance side of the same codebase. I like owning a feature end to end: drawing the screen, building it and modeling the table behind it are the same job to me. Before that, I spent a year and a half at Abase Sistemas, on public-sector education software used by 1M+ people across 200+ municipalities. I joined ZenFisio without knowing PHP and learned it on the job, so I'm comfortable picking up a new stack. I work AI-assisted with Claude Code every day, from prototyping interfaces to writing tests.",
    location: "Ijuí, RS — Brazil",
  },
  pt: {
    title: "Desenvolvedor Full Stack",
    tagline:
      "Laravel, PHP e PostgreSQL como base, React e TypeScript por cima — construindo funcionalidades para um SaaS de saúde usado por mais de 100.000 profissionais.",
    shortBio:
      "Desenvolvedor full stack com cerca de 3 anos de experiência profissional, especializado em Laravel, PHP e PostgreSQL. Construo funcionalidades para um SaaS de saúde usado por mais de 100.000 profissionais em mais de 3.500 clínicas e, agora, também trabalho com React Native e TypeScript no app mobile do paciente.",
    longBio:
      "Estou no time de inovação da ZenFisio — o time que constrói o que o produto nunca teve — depois de começar pela sustentação da mesma base de código. Gosto de cuidar de uma funcionalidade de ponta a ponta: desenhar a tela, construí-la e modelar a tabela por trás dela são o mesmo trabalho para mim. Antes disso, passei um ano e meio na Abase Sistemas, em software de educação para o setor público usado por mais de 1 milhão de pessoas em mais de 200 municípios. Entrei na ZenFisio sem saber PHP e aprendi no dia a dia, então fico à vontade para pegar uma stack nova. Trabalho com Claude Code todos os dias, da prototipação de interfaces aos testes.",
    location: "Ijuí, RS — Brasil",
  },
};

export type Profile = typeof contact & (typeof profileText)[Lang];

export const getProfile = (lang: Lang): Profile => ({
  ...contact,
  ...profileText[lang],
});

// ---------------------------------------------------------------------------
// Stack
// ---------------------------------------------------------------------------

type StackGroupId = "core" | "also";

type TechData = { name: string; usedAt: Localized<string> };

const stackData: { id: StackGroupId; techs: TechData[] }[] = [
  {
    id: "core",
    techs: [
      { name: "Laravel", usedAt: { en: "ZenFisio · Email Blast · Habit Tracker", pt: "ZenFisio · Email Blast · Habit Tracker" } },
      { name: "PHP", usedAt: { en: "ZenFisio, daily since 2025", pt: "ZenFisio, no dia a dia desde 2025" } },
      { name: "PostgreSQL", usedAt: { en: "ZenFisio · Abase · Cifrão", pt: "ZenFisio · Abase · Cifrão" } },
      { name: "MySQL", usedAt: { en: "ZenFisio", pt: "ZenFisio" } },
      { name: "Livewire", usedAt: { en: "ZenFisio design system", pt: "Design system da ZenFisio" } },
      { name: "REST APIs", usedAt: { en: "ZenFisio · Abase · FinanceHub", pt: "ZenFisio · Abase · FinanceHub" } },
      { name: "PHPUnit · Pest", usedAt: { en: "ZenFisio · Email Blast", pt: "ZenFisio · Email Blast" } },
      { name: "Tailwind CSS", usedAt: { en: "ZenFisio · every personal project", pt: "ZenFisio · todos os projetos pessoais" } },
    ],
  },
  {
    id: "also",
    techs: [
      { name: "TypeScript", usedAt: { en: "Patient app · LN Veículos · Cifrão", pt: "App do paciente · LN Veículos · Cifrão" } },
      { name: "React", usedAt: { en: "LN Veículos · Cifrão", pt: "LN Veículos · Cifrão" } },
      { name: "React Native · Expo", usedAt: { en: "ZenFisio patient app", pt: "App do paciente da ZenFisio" } },
      { name: "Next.js", usedAt: { en: "LN Veículos · Cifrão", pt: "LN Veículos · Cifrão" } },
      { name: "Node.js · NestJS", usedAt: { en: "ZenFisio e-signature API · Cifrão", pt: "API de assinatura da ZenFisio · Cifrão" } },
      { name: "Prisma", usedAt: { en: "Cifrão · FinanceHub", pt: "Cifrão · FinanceHub" } },
      { name: "Cloudflare Workers", usedAt: { en: "LN Veículos (D1, R2)", pt: "LN Veículos (D1, R2)" } },
      { name: "C# · .NET", usedAt: { en: "Abase, 2023–2025", pt: "Abase, 2023–2025" } },
      { name: "Docker", usedAt: { en: "Local environments and personal projects", pt: "Ambientes locais e projetos pessoais" } },
      { name: "Claude Code", usedAt: { en: "AI-assisted development, every day", pt: "Desenvolvimento com IA, todos os dias" } },
    ],
  },
];

const stackGroupText: Localized<Record<StackGroupId, { title: string; blurb: string }>> = {
  en: {
    core: { title: "Core stack", blurb: "What I use every day in production." },
    also: { title: "Also working with", blurb: "Used at work and in my own projects." },
  },
  pt: {
    core: { title: "Stack principal", blurb: "O que uso todos os dias em produção." },
    also: { title: "Também trabalho com", blurb: "Usadas no trabalho e nos meus projetos." },
  },
};

export type Tech = { name: string; usedAt: string };
export type StackGroup = { id: StackGroupId; title: string; blurb: string; techs: Tech[] };

export const getStack = (lang: Lang): StackGroup[] =>
  stackData.map((group) => ({
    id: group.id,
    ...stackGroupText[lang][group.id],
    techs: group.techs.map((tech) => ({ name: tech.name, usedAt: tech.usedAt[lang] })),
  }));

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

type ExperienceData = {
  company: string;
  logo: string;
  role: Localized<string>;
  period: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
};

const experiencesData: ExperienceData[] = [
  {
    company: "ZenFisio",
    logo: "company-1",
    role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
    period: { en: "Mar 2025 — Present", pt: "Mar 2025 — Presente" },
    description: {
      en: "Practice management SaaS for physiotherapy clinics: 100,000+ active healthcare professionals across 3,500+ clinics, with 4M+ patient records. Joined the maintenance team in March 2025 and moved to the innovation team, which builds new features, in early 2026. Laravel, PHP, PostgreSQL, Livewire and React Native.",
      pt: "SaaS de gestão para clínicas de fisioterapia: mais de 100.000 profissionais de saúde ativos, mais de 3.500 clínicas e mais de 4 milhões de pacientes cadastrados. Entrei na sustentação em março de 2025 e, no início de 2026, fui para o time de inovação, que cria funcionalidades novas. Laravel, PHP, PostgreSQL, Livewire e React Native.",
    },
    highlights: {
      en: [
        "Electronic signature: built the Laravel side of the innovation team's first release — flow, screens, integration with a NestJS signing API and a few endpoints on it. Virtually every client clinic uses it, and about 40% have bought the paid plan",
        "TISS billing: implemented version 4.02.00 of TISS, the claims standard required by Brazil's health insurance regulator (ANS) — a malformed claim is a payment the clinic never receives",
        "Internal admin panel: built from scratch the panel all 30 employees use to access client accounts, replacing a shared account with per-user access and audit trail",
        "Design system: created the new design system for the UI refresh, validated the screens with the Product Owner and implemented them in Blade, Livewire and Tailwind CSS",
        "Patient app: upgrading the Expo SDK of the React Native (TypeScript) app patients use to book appointments",
      ],
      pt: [
        "Assinatura eletrônica: construí o lado Laravel da primeira entrega do time de inovação — fluxo, telas, integração com uma API de assinatura em NestJS e alguns endpoints nela. Praticamente todas as clínicas usam, e cerca de 40% já compraram o plano pago",
        "Faturamento TISS: implementei a versão 4.02.00 do padrão TISS da ANS, usado nas guias entre clínicas e convênios — uma guia malformada é um pagamento que a clínica não recebe",
        "Painel administrativo interno: construí do zero o painel que os 30 funcionários usam para acessar contas de clientes, com login individual e registro de cada ação no lugar de uma conta compartilhada",
        "Design system: criei o novo design system da revitalização das interfaces, validei as telas com o Product Owner e implementei em Blade, Livewire e Tailwind CSS",
        "App do paciente: atualizando o SDK do Expo no app em React Native (TypeScript) que os pacientes usam para agendar consultas",
      ],
    },
  },
  {
    company: "Abase Sistemas",
    logo: "company-2",
    role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
    period: { en: "Nov 2023 — Mar 2025", pt: "Nov 2023 — Mar 2025" },
    description: {
      en: "Software for the public sector. Its education system is used by 1M+ people across 200+ municipalities in Brazil. C#/.NET, Ext JS and PostgreSQL.",
      pt: "Software para o setor público. O sistema de educação da empresa é usado por mais de 1 milhão de pessoas em mais de 200 municípios do Brasil. C#/.NET, Ext JS e PostgreSQL.",
    },
    highlights: {
      en: [
        "Built a student portal for municipal schools, backend and frontend: a Classroom-style space where students follow assignments and grades, re-enroll for the next school year and check the weekly school menu",
        "Developed and maintained features of the education system with C#/.NET (MVC) REST APIs and PostgreSQL, including JWT-based authentication and authorization",
        "Designed and maintained relational schemas for large volumes of school data in a multi-tenant, municipal environment",
      ],
      pt: [
        "Construí um portal do aluno para escolas municipais, backend e frontend: um espaço no estilo Classroom onde os alunos acompanham atividades e notas, fazem a rematrícula para o próximo ano letivo e consultam o cardápio da semana",
        "Desenvolvi e mantive funcionalidades do sistema de educação com APIs REST em C#/.NET (MVC) e PostgreSQL, incluindo autenticação e autorização com JWT",
        "Modelei e mantive esquemas relacionais para grandes volumes de dados escolares, em ambiente com múltiplos municípios",
      ],
    },
  },
];

export type Experience = {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export const getExperiences = (lang: Lang): Experience[] =>
  experiencesData.map((exp) => ({
    company: exp.company,
    logo: exp.logo,
    role: exp.role[lang],
    period: exp.period[lang],
    description: exp.description[lang],
    highlights: exp.highlights[lang],
  }));

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

type EducationData = {
  institution: Localized<string>;
  degree: Localized<string>;
  period: Localized<string>;
  logo: string;
};

const educationData: EducationData[] = [
  {
    institution: {
      en: "UNIJUÍ — Regional University of Northwestern Rio Grande do Sul",
      pt: "UNIJUÍ — Universidade Regional do Noroeste do Estado do Rio Grande do Sul",
    },
    degree: {
      en: "Bachelor's in Software Engineering",
      pt: "Bacharelado em Engenharia de Software",
    },
    period: {
      en: "2022 — Dec 2027 (expected)",
      pt: "2022 — dez. 2027 (previsão)",
    },
    logo: "edu-1",
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  logo: string;
};

export const getEducation = (lang: Lang): EducationItem[] =>
  educationData.map((e) => ({
    institution: e.institution[lang],
    degree: e.degree[lang],
    period: e.period[lang],
    logo: e.logo,
  }));

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

type CertificationData = {
  id: string;
  name: Localized<string>;
  issuer: string;
  year: number;
  image: string;
  href: string;
  /** Course length in hours. Optional: omit while the data is unavailable. */
  hours?: number;
};

const certificationsData: CertificationData[] = [
  {
    id: "cert4",
    name: {
      en: "React.js – Building Modern Interfaces",
      pt: "React.js – Desenvolvimento de Interfaces Modernas",
    },
    issuer: "Udemy",
    year: 2024,
    image: "udemy-react",
    href: "https://drive.google.com/file/d/1hSf-de07RF57o-Ovy2hlNwFfnLMEW7yB/view",
  },
  {
    id: "cert8",
    name: { en: "PHP – Complete Track", pt: "PHP – Formação Completa" },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-php-formacao",
    hours: 126,
    href: "https://app.rocketseat.com.br/certificates/2b3b1951-0869-4b3f-af6a-87ebb92b1aca",
  },
  {
    id: "cert9",
    name: {
      en: "Laravel: from fundamentals to real-world projects",
      pt: "Laravel: dos fundamentos à prática em projetos reais",
    },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-laravel",
    hours: 18,
    href: "https://app.rocketseat.com.br/certificates/26b5808f-f063-4b2c-ad1e-ee037f43c18f",
  },
  {
    id: "cert12",
    name: {
      en: "Automated testing with PHPUnit and Pest",
      pt: "Testes automatizados com PHPUnit e Pest",
    },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-tests",
    hours: 8,
    href: "https://app.rocketseat.com.br/certificates/c762a080-6d71-454b-8d1c-66077e67e4db",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  year: number;
  image: string;
  href: string;
  hours?: number;
};

export const getCertifications = (lang: Lang): Certification[] =>
  certificationsData.map((c) => ({
    id: c.id,
    name: c.name[lang],
    issuer: c.issuer,
    year: c.year,
    image: c.image,
    href: c.href,
    hours: c.hours,
  }));

// ---------------------------------------------------------------------------
// Research
// ---------------------------------------------------------------------------

type PublicationData = {
  title: string;
  venue: Localized<string>;
  year: number;
  coauthors: string;
  summary: Localized<string>;
  href: string;
};

const publicationsData: PublicationData[] = [
  {
    title: "Explorando a Rede LoRa",
    venue: {
      en: "Salão do Conhecimento Unijuí — Undergraduate Research Seminar (Engineering)",
      pt: "Salão do Conhecimento Unijuí — Seminário de Iniciação Científica (Engenharias)",
    },
    year: 2023,
    coauthors: "Guilherme M. Bonfada, Peterson C. Avi",
    summary: {
      en: "Research scholarship (PROFAP) in the \"Creative and Smart City\" project. I set up the LoRaWAN infrastructure — a Linux server running ChirpStack and Kerlink iStation gateways — to define the best antenna locations for collecting urban IoT sensor data, replacing a previous setup that failed to communicate with the university's server.",
      pt: "Bolsa de iniciação científica (PROFAP) no projeto \"Cidade Criativa e Inteligente\". Montei a infraestrutura LoRaWAN — um servidor Linux com ChirpStack e antenas Kerlink iStation — para definir os melhores pontos de instalação das antenas na coleta de dados de sensores IoT urbanos, substituindo uma configuração anterior que não se comunicava com o servidor da universidade.",
    },
    href: "https://www.publicacoeseventos.unijui.edu.br/index.php/salaoconhecimento/article/view/24374",
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: number;
  coauthors: string;
  summary: string;
  href: string;
};

export const getPublications = (lang: Lang): Publication[] =>
  publicationsData.map((p) => ({
    title: p.title,
    venue: p.venue[lang],
    year: p.year,
    coauthors: p.coauthors,
    summary: p.summary[lang],
    href: p.href,
  }));
