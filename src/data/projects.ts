// =============================================
// SEUS PROJETOS — edite aqui
// =============================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techs: string[];
  thumbnail: string;       // URL ou import de imagem local
  images: string[];
  fullDescription: string;
  problem: string;
  solution: string;
  decisions: string[];
  challenges: string[];
  improvements: string[];
  github?: string;
  demo?: string;
  year: string;
  size: "lg" | "md" | "sm"; // tamanho no grid masonry
  accent: "purple" | "cyan" | "magenta";
}

export const projects: Project[] = [
  {
    id: "projeto-1",
    title: "Nome do Projeto",
    subtitle: "Subtítulo curto",
    description: "Descrição curta que aparece no card.",
    techs: ["React", "TypeScript", "Node.js"],
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    ],
    fullDescription: "Descrição completa do projeto para a página de detalhe.",
    problem: "Qual problema esse projeto resolve?",
    solution: "Como você resolveu?",
    decisions: [
      "Decisão técnica 1",
      "Decisão técnica 2",
    ],
    challenges: [
      "Desafio 1",
      "Desafio 2",
    ],
    improvements: [
      "Melhoria futura 1",
      "Melhoria futura 2",
    ],
    github: "https://github.com",
    demo: "https://example.com",
    year: "2024",
    size: "lg",
    accent: "purple",
  },
  {
    id: "projeto-2",
    title: "Projeto 2",
    subtitle: "Subtítulo",
    description: "Descrição curta.",
    techs: ["Next.js", "PostgreSQL"],
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"],
    fullDescription: "Descrição completa.",
    problem: "Problema.",
    solution: "Solução.",
    decisions: ["Decisão 1"],
    challenges: ["Desafio 1"],
    improvements: ["Melhoria 1"],
    github: "https://github.com",
    year: "2024",
    size: "md",
    accent: "cyan",
  },
  {
    id: "projeto-3",
    title: "Projeto 3",
    subtitle: "Subtítulo",
    description: "Descrição curta.",
    techs: ["Python", "FastAPI"],
    thumbnail: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    images: ["https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80"],
    fullDescription: "Descrição completa.",
    problem: "Problema.",
    solution: "Solução.",
    decisions: ["Decisão 1"],
    challenges: ["Desafio 1"],
    improvements: ["Melhoria 1"],
    year: "2023",
    size: "sm",
    accent: "magenta",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);