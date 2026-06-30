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
    tagline: "Building real systems, with measurable impact and code that lasts.",
    shortBio:
      "Full stack developer with experience in production systems serving millions of users. I work with Laravel, PHP, React, Next.js and PostgreSQL — always focused on clean code, sustainable architectures and delivering real value.",
    longBio:
      "I started programming at 19, when I joined a Software Engineering degree — and I haven't stopped since. In a short time I was already contributing to systems used by more than 1 million users across city governments throughout Brazil. Today, at ZenFisio, I work on both the maintenance and the innovation of a SaaS for physiotherapy clinics with more than 3,500 active clients. I believe good software isn't just code that works — it's code the team understands, the user trusts, and the product can grow on top of.",
    location: "Ijuí, RS — Brazil",
  },
  pt: {
    title: "Desenvolvedor Full Stack",
    tagline: "Construindo sistemas reais, com impacto mensurável e código que dura.",
    shortBio:
      "Desenvolvedor full stack com experiência em sistemas de produção que atendem milhões de usuários. Trabalho com Laravel, PHP, React, Next.js e PostgreSQL — sempre focado em código limpo, arquiteturas sustentáveis e entrega de valor real.",
    longBio:
      "Comecei a programar aos 19 anos, quando entrei no curso de Engenharia de Software — e desde então não parei mais. Em pouco tempo já estava contribuindo para sistemas usados por mais de 1 milhão de usuários em prefeituras de todo o Brasil. Hoje, na ZenFisio, trabalho tanto na sustentação quanto na inovação de um SaaS para clínicas de fisioterapia com mais de 3.500 clientes ativos. Acredito que bom software não é só código que funciona — é código que o time entende, o usuário confia e o produto consegue crescer em cima.",
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

type StackCategory = "language" | "backend" | "frontend" | "database" | "devops";

const stackBase: { name: string; level: number; category: StackCategory }[] = [
  // Languages
  { name: "PHP", level: 72, category: "language" },
  { name: "JavaScript", level: 70, category: "language" },
  { name: "TypeScript", level: 60, category: "language" },
  { name: "C#", level: 55, category: "language" },

  // Backend
  { name: "Laravel", level: 85, category: "backend" },
  { name: ".NET", level: 60, category: "backend" },
  { name: "NestJS", level: 45, category: "backend" },

  // Frontend
  { name: "React", level: 75, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Ext.js", level: 55, category: "frontend" },

  // Database
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "MySQL", level: 78, category: "database" },
  { name: "Prisma", level: 50, category: "database" },

  // DevOps / Infra
  { name: "Docker", level: 45, category: "devops" },
];

const categoryLabels: Localized<Record<StackCategory, string>> = {
  en: {
    language: "Language",
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    devops: "DevOps",
  },
  pt: {
    language: "Linguagem",
    backend: "Backend",
    frontend: "Frontend",
    database: "Banco",
    devops: "DevOps",
  },
};

export type Tech = { name: string; level: number; category: string };

export const getStack = (lang: Lang): Tech[] =>
  stackBase.map((tech) => ({
    name: tech.name,
    level: tech.level,
    category: categoryLabels[lang][tech.category],
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
      en: "Development and maintenance of a SaaS for physiotherapy clinics with more than 3,500 active clients. Working on both legacy system maintenance and innovation initiatives, focused on Laravel, PHP and MySQL.",
      pt: "Desenvolvimento e sustentação de um SaaS para clínicas de fisioterapia com mais de 3.500 clientes ativos. Atuação tanto em manutenção do sistema legado quanto em iniciativas de inovação, com foco em Laravel, PHP e MySQL.",
    },
    highlights: {
      en: [
        "Built from scratch an internal support panel used by ~25 staff members, centralizing client access and enabling administrative actions such as feature activation and process configuration",
        "Actively contributing to the development of an electronic signature module integrated into the legacy system",
        "First hands-on experience with NestJS in a professional setting, building APIs that complement the Laravel ecosystem",
      ],
      pt: [
        "Desenvolvi do zero um painel interno de suporte utilizado por ~25 colaboradores, centralizando acesso aos clientes e permitindo ações administrativas como ativação de features e configuração de processos",
        "Contribuindo ativamente para o desenvolvimento de um módulo de assinatura eletrônica integrado ao sistema legado",
        "Primeiro contato com NestJS em ambiente profissional, construindo APIs complementares ao ecossistema Laravel",
      ],
    },
  },
  {
    company: "Abase Sistemas Ltda",
    logo: "company-2",
    role: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
    period: { en: "Nov 2023 — Mar 2025", pt: "Nov 2023 — Mar 2025" },
    description: {
      en: "Development of education management systems for city governments across Brazil. The product served more than 200 municipalities and over 1 million users, covering enrollment, grades, attendance, assignments and announcements — similar to a full Google Classroom integrated into the public school environment.",
      pt: "Desenvolvimento de sistemas para gestão educacional em prefeituras de todo o Brasil. O produto atendia mais de 200 municípios e mais de 1 milhão de usuários, cobrindo matrícula, notas, frequência, atividades e comunicados — similar a um Google Classroom completo integrado ao ambiente escolar público.",
    },
    highlights: {
      en: [
        "Built REST APIs with C# .NET consumed by more than 1 million users across 200+ city governments",
        "Developed interfaces with Ext.js integrated with the education portal APIs",
        "Worked with PostgreSQL in a high-load, multi-tenant municipal environment",
      ],
      pt: [
        "Construção de APIs REST com C# .NET consumidas por mais de 1 milhão de usuários em +200 prefeituras",
        "Desenvolvimento de interfaces com Ext.js integradas às APIs do portal educacional",
        "Trabalho com PostgreSQL em ambiente de alta carga e múltiplos tenants municipais",
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
      en: "2022 — 2027 (in progress)",
      pt: "2022 — 2027 (em andamento)",
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
    id: "cert1",
    name: {
      en: "C# – Object-Oriented Programming and APIs",
      pt: "C# – Programação Orientada a Objetos e APIs",
    },
    issuer: "Udemy",
    year: 2024,
    image: "udemy-c",
    href: "https://drive.google.com/file/d/1lgIPsf4zyXhkI7LVzt0hQK0rZeuGE13E/view",
  },
  {
    id: "cert2",
    name: {
      en: "Front-End Track – HTML, CSS and JavaScript",
      pt: "Formação Front-End – HTML, CSS e JavaScript",
    },
    issuer: "Udemy",
    year: 2024,
    image: "udemy-front",
    href: "https://drive.google.com/file/d/16kkTofx47lf6UidVPrrXNH9D9W5Oc08p/view",
  },
  {
    id: "cert3",
    name: {
      en: "JavaScript – Fundamentals and Advanced Development",
      pt: "JavaScript – Fundamentos e Desenvolvimento Avançado",
    },
    issuer: "Udemy",
    year: 2024,
    image: "udemy-js",
    href: "https://drive.google.com/file/d/14aSIPRmqgUPvoTbdLd2WeW_jptWu_Xn_/view",
  },
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
    id: "cert5",
    name: {
      en: "Node.js – Backend Development with Express and APIs",
      pt: "Node.js – Desenvolvimento Backend com Express e APIs",
    },
    issuer: "Udemy",
    year: 2024,
    image: "udemy-node",
    href: "https://drive.google.com/file/d/1hStHlK7Kn65vAHQyRvEewPptxebD0_19/view",
  },
  {
    id: "cert6",
    name: { en: "PHP Fundamentals", pt: "Fundamentos do PHP" },
    issuer: "Rocketseat",
    year: 2025,
    image: "rocket-php",
    hours: 21,
    href: "https://app.rocketseat.com.br/certificates/66c04dd1-b8a3-4172-9fa3-140b1e1bb719",
  },
  {
    id: "cert7",
    name: { en: "Figma for Devs", pt: "Figma para Devs" },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-figma",
    href: "https://app.rocketseat.com.br/certificates/54e19cfd-6b7b-4c88-bec8-5b0b6fae9767",
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
    id: "cert10",
    name: {
      en: "Building my first API with Laravel",
      pt: "Criando minha primeira API com Laravel",
    },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-laravel-api",
    hours: 7,
    href: "https://app.rocketseat.com.br/certificates/3ad51346-b440-49aa-899d-2174be99dcef",
  },
  {
    id: "cert11",
    name: { en: "Livewire", pt: "Livewire" },
    issuer: "Rocketseat",
    year: 2026,
    image: "rocket-livewire",
    hours: 7,
    href: "https://app.rocketseat.com.br/certificates/1da9fd88-920d-4c96-bbd4-4e7229b791b8",
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
