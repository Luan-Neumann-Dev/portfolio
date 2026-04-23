export const profile = {
  name: "Luan Neumann",
  title: "Desenvolvedor Full Stack",
  tagline: "Construindo sistemas reais, com impacto mensurável e código que dura.",
  shortBio:
    "Desenvolvedor full stack com experiência em sistemas de produção que atendem milhões de usuários. Trabalho com Laravel, PHP, React, Next.js e PostgreSQL — sempre focado em código limpo, arquiteturas sustentáveis e entrega de valor real.",
  longBio:
    "Comecei a programar aos 19 anos, quando entrei no curso de Engenharia de Software — e desde então não parei mais. Em pouco tempo já estava contribuindo para sistemas usados por mais de 1 milhão de usuários em prefeituras de todo o Brasil. Hoje, na ZenFisio, trabalho tanto na sustentação quanto na inovação de um SaaS para clínicas de fisioterapia com mais de 3.500 clientes ativos. Acredito que bom software não é só código que funciona — é código que o time entende, o usuário confia e o produto consegue crescer em cima.",
  location: "Ijuí, RS — Brasil",
  email: "luan.neumann.dev@gmail.com",
  github: "https://github.com/Luan-Neumann-Dev",
  linkedin: "https://linkedin.com/in/luan-henrique-neumann-dev", 
};

export const stack = [
  //Linguagens
  { name: "PHP", level: 72, category: "Linguagem" },
  { name: "JavaScript", level: 70, category: "Linguagem" },
  { name: "TypeScript", level: 60, category: "Linguagem" },
  { name: "C#", level: 55, category: "Linguagem" },

  //Backend
  { name: "Laravel", level: 85, category: "Backend" },
  { name: ".NET", level: 60, category: "Backend" },
  { name: "NestJS", level: 45, category: "Backend" },

  // Frontend
  { name: "React", level: 75, category: "Frontend" },
  { name: "Next.js", level: 65, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Ext.js", level: 55, category: "Frontend" },

  // Banco de Dados
  { name: "PostgreSQL", level: 80, category: "Banco" },
  { name: "MySQL", level: 78, category: "Banco" },
  { name: "Prisma", level: 50, category: "Banco" },

  // DevOps / Infra
  { name: "Docker", level: 45, category: "DevOps" },
];

export const experiences = [
  {
    company: "ZenFisio",
    logo: "company-1",
    role: "Desenvolvedor Full Stack",
    period: "Mar 2025 — Presente",
    description:
      "Desenvolvimento e sustentação de um SaaS para clínicas de fisioterapia com mais de 3.500 clientes ativos. Atuação tanto em manutenção do sistema legado quanto em iniciativas de inovação, com foco em Laravel, PHP e MySQL.",
    highlights: [
      "Desenvolvi do zero um painel interno de suporte utilizado por ~25 colaboradores, centralizando acesso aos clientes e permitindo ações administrativas como ativação de features e configuração de processos",
      "Contribuindo ativamente para o desenvolvimento de um módulo de assinatura eletrônica integrado ao sistema legado",
      "Primeiro contato com NestJS em ambiente profissional, construindo APIs complementares ao ecossistema Laravel",
    ],
  },
  {
    company: "Abase Sistemas Ltda",
    logo: "company-2",
    role: "Desenvolvedor Full Stack",
    period: "Nov 2023 - Mar 2025 ",
    description:
      "Desenvolvimento de sistemas para gestão educacional em prefeituras de todo o Brasil. O produto atendia mais de 200 municípios e mais de 1 milhão de usuários, cobrindo matrícula, notas, frequência, atividades e comunicados — similar a um Google Classroom completo integrado ao ambiente escolar público.",
    highlights: [
      "Construção de APIs REST com C# .NET consumidas por mais de 1 milhão de usuários em +200 prefeituras",
      "Desenvolvimento de interfaces com Ext.js integradas às APIs do portal educacional",
      "Trabalho com PostgreSQL em ambiente de alta carga e múltiplos tenants municipais",
    ],
  }
];

export const education = [
  {
    institution: "UNIJUÍ — Universidade Regional do Noroeste do Estado do Rio Grande do Sul",
    degree: "Bacharelado em Engenharia de Software",
    period: "2022 — 2027 (em andamento)",
    logo: 'edu-1'
  },
];

export const certifications = [
  { id: "cert1", name: "C# – Programação Orientada a Objetos e APIs", issuer: "Udemy", year: 2024, image:"udemy-c", href: 'https://drive.google.com/file/d/1lgIPsf4zyXhkI7LVzt0hQK0rZeuGE13E/view' },
  { id: "cert2", name: "Formação Front-End – HTML, CSS e JavaScript", issuer: "Udemy", year: 2024, image:"udemy-front", href: 'https://drive.google.com/file/d/16kkTofx47lf6UidVPrrXNH9D9W5Oc08p/view' },
  { id: "cert3", name: "JavaScript – Fundamentos e Desenvolvimento Avançado", issuer: "Udemy", year: 2024, image:"udemy-js", href: 'https://drive.google.com/file/d/14aSIPRmqgUPvoTbdLd2WeW_jptWu_Xn_/view' },
  { id: "cert4", name: "React.js – Desenvolvimento de Interfaces Modernas", issuer: "Udemy", year: 2024, image:"udemy-react", href: 'https://drive.google.com/file/d/1hSf-de07RF57o-Ovy2hlNwFfnLMEW7yB/view' },
  { id: "cert5", name: "Node.js – Desenvolvimento Backend com Express e APIs", issuer: "Udemy", year: 2024, image: "udemy-node", href: 'https://drive.google.com/file/d/1hStHlK7Kn65vAHQyRvEewPptxebD0_19/view' },
  { id: "cert6", name: "Fundamentos do PHP", issuer: "Rocketseat", year: 2025, image: 'rocket-php', href: 'https://app.rocketseat.com.br/certificates/66c04dd1-b8a3-4172-9fa3-140b1e1bb719'},
  { id: "cert7", name: "Figma para Devs", issuer: "Rocketseat", year: 2026, image: 'rocket-figma', href: 'https://app.rocketseat.com.br/certificates/54e19cfd-6b7b-4c88-bec8-5b0b6fae9767'}
];