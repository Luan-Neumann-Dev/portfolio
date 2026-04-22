// =============================================
// PROJETOS
// =============================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techs: string[];
  thumbnail: string;
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
  size: "lg" | "md" | "sm";
  accent: "purple" | "cyan" | "magenta";
}

export const projects: Project[] = [
  {
    id: "finance-hub-api",
    title: "FinanceHub API",
    subtitle: "API REST para gestão de finanças pessoais",
    description:
      "API NestJS modular com autenticação JWT, controle de receitas e despesas, sistema de parcelamento, cofrinhos e motor de relatórios multi-tipo.",
    techs: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "bcrypt"],
    thumbnail:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    fullDescription:
      "FinanceHub API é um serviço backend RESTful para gestão de finanças pessoais. Expõe endpoints para fontes de receita com regras de recorrência (semanal, mensal, anual, única), despesas categorizadas, compras parceladas e cofrinhos virtuais com histórico de transações. Um módulo dedicado de relatórios entrega resumos mensais, análises por período, dados anuais mês a mês e comparativos entre meses — tudo calculado no servidor com queries paralelas.",
    problem:
      "Aplicativos de finanças pessoais frequentemente centralizam toda a lógica no cliente, o que dificulta a extensão e torna impossível compartilhar dados entre dispositivos. O desafio era construir um backend estruturado e seguro que centralizasse os cálculos financeiros e os expusesse por meio de uma API limpa.",
    solution:
      "Arquitetura modular com NestJS, onde cada domínio financeiro (auth, receitas, despesas, parcelamentos, cofrinhos, relatórios) vive em um módulo isolado. O Prisma gerencia toda a comunicação com o banco com tipagem completa. O motor de relatórios usa queries paralelas com Promise.all e os recursos groupBy e aggregate do Prisma para normalizar diferentes tipos de recorrência sem gerar queries N+1.",
    decisions: [
      "NestJS pelo seu sistema de módulos opinativo e suporte nativo a guards, pipes e filters — o que tornou simples implementar um guard JWT global com opt-out por rota via @Public()",
      "Prisma no lugar de SQL puro ou outro ORM pelo query builder com tipagem segura e tooling de migrations de primeira classe",
      "InstallmentGroup como modelo pai que gera automaticamente N registros de Expense individuais na criação, mantendo a tabela de despesas uniforme e permitindo visualizações agrupadas",
      "ValidationPipe global com whitelist: true para descartar campos desconhecidos na entrada do controller, prevenindo problemas de mass assignment",
      "Categorias padrão de despesas criadas automaticamente no registro do usuário para melhorar a experiência de primeiro acesso sem exigir configuração extra",
    ],
    challenges: [
      "Normalizar receitas recorrentes entre diferentes tipos de recorrência (semanal ×4, mensal ×1, anual ÷12) para qualquer intervalo de datas no motor de relatórios",
      "Modelar o sistema de parcelamento de forma que os registros de despesa individuais continuem consultáveis normalmente e ao mesmo tempo vinculáveis ao grupo pai",
      "Manter as queries de relatório rápidas agrupando todas as agregações em um único Promise.all em vez de awaits sequenciais",
    ],
    improvements: [
      "Endpoint de documentação Swagger/OpenAPI",
      "Metas de orçamento por categoria com alertas de limite",
      "Exportação de relatórios em CSV ou PDF",
      "Suporte a refresh token",
      "Cobertura de testes unitários para todos os métodos de serviço",
    ],
    github: "https://github.com/Luan-Neumann-Dev/finance-hub-api",
    year: "2026",
    size: "lg",
    accent: "purple",
  },
  {
    id: "finance-hub-web",
    title: "FinanceHub Web",
    subtitle: "Dashboard de finanças pessoais com Next.js 15",
    description:
      "Dashboard interativo para visualizar receitas, despesas, economias e tendências financeiras — construído com Next.js 15 App Router, Recharts e Radix UI.",
    techs: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Recharts", "Radix UI"],
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    fullDescription:
      "FinanceHub Web é o frontend do ecossistema FinanceHub. Oferece um dashboard com cards de resumo mensal, gráfico de pizza de despesas por categoria, gráfico de barras anual de receitas vs. despesas e cards de insights financeiros gerados a partir dos dados dos relatórios. As demais páginas cobrem gestão de despesas com visualização de grupos de parcelamento, fontes de receita, cofrinhos com histórico de transações e relatórios por período e anuais. A autenticação é feita via rotas protegidas por middleware e JWT armazenado em cookie.",
    problem:
      "Consumir uma API financeira rica exige um frontend capaz de lidar com múltiplas fontes de dados assíncronas, proteger rotas sem piscar conteúdo não autenticado e apresentar dados complexos (gráficos, parcelamentos agrupados, cards de insights) sem poluir a camada de componentes com lógica de negócio.",
    solution:
      "Next.js 15 App Router com route groups — (auth) e (dashboard) — para separação de layout sem impacto na URL. Cada página delega todo o carregamento de dados a um custom hook dedicado (useDashboard, useExpenses, usePiggys, etc.), mantendo os componentes puramente apresentacionais. O middleware protege as rotas no servidor. Os insights financeiros são derivados no cliente a partir dos dados dos relatórios por uma função pura, sem chamadas extras à API.",
    decisions: [
      "Route groups do App Router do Next.js 15 para aplicar layouts diferentes (com/sem sidebar) sem alterar a estrutura de URLs",
      "Custom hooks por domínio como camada de dados — os componentes recebem o estado pronto para renderizar e nunca chamam a API diretamente",
      "loading.tsx por rota para estados de skeleton automáticos, eliminando layout shift durante o carregamento",
      "Primitivos do Radix UI para dialogs, selects e tabs acessíveis sem importar uma biblioteca de componentes completa",
      "js-cookie para armazenamento do JWT no cliente, mantendo o fluxo de autenticação simples sem camada de backend-for-frontend",
    ],
    challenges: [
      "Proteger rotas no App Router do Next.js sem flash no cliente — resolvido tratando os redirecionamentos no middleware.ts antes da página renderizar",
      "Compor os componentes do Recharts (tooltips customizados, containers responsivos, gráfico de barras duplo) para se encaixar no design do dashboard",
      "Construir o motor de insights para surfaçar mensagens financeiras contextuais e relevantes a partir dos dados brutos dos relatórios, puramente no cliente",
    ],
    improvements: [
      "Toggle de modo escuro",
      "Filtros de despesas por categoria, intervalo de datas e valor",
      "Exportação dos dados do dashboard em CSV",
      "Suporte a PWA mobile-first",
      "Notificações de alertas de limite de orçamento",
    ],
    github: "https://github.com/Luan-Neumann-Dev/finance-hub-web",
    year: "2026",
    size: "md",
    accent: "cyan",
  },
  {
    id: "email-blast",
    title: "Email Blast",
    subtitle: "Plataforma de email marketing self-hosted",
    description:
      "Aplicação Laravel 12 para criar campanhas, gerenciar listas de assinantes, agendar envios em massa via jobs na fila e rastrear taxas de abertura e clique por destinatário.",
    techs: ["Laravel 12", "PHP 8.2", "Blade", "Tailwind CSS", "SQLite", "Pest"],
    thumbnail:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    ],
    fullDescription:
      "Email Blast é uma plataforma de email marketing self-hosted construída com Laravel 12. Os usuários podem gerenciar listas de assinantes, criar templates HTML reutilizáveis e montar campanhas por meio de um wizard multi-etapas. Ao publicar uma campanha, um job fan-out (SendEmailsCampaignJob) é disparado e cria um job individual na fila por assinante (SendEmailCampaignJob), cada um agendado de forma independente via Mail::later(). Taxas de abertura e clique são rastreadas por registro de CampaignMail usando um endpoint de pixel e um controller de redirecionamento.",
    problem:
      "Ferramentas de email marketing são produtos SaaS complexos. O desafio era modelar as mecânicas centrais — entrega assíncrona em massa, rastreamento por destinatário, envios agendados — em uma aplicação Laravel limpa e compreensível.",
    solution:
      "O sistema de filas do Laravel gerencia o padrão fan-out: um job dispatcher itera sobre os assinantes e despacha um job por destinatário, cada um responsável pela própria entrega e falha. O rastreamento é implementado com um pixel 1×1 transparente para aberturas e um controller de redirecionamento para cliques, ambos incrementando contadores no registro de CampaignMail. A criação de campanhas usa estado de sessão em um wizard multi-etapas com middleware para controlar a navegação entre abas.",
    decisions: [
      "Padrão fan-out com dois jobs (SendEmailsCampaignJob → SendEmailCampaignJob por assinante) para que cada entrega falhe e seja reprocessada de forma independente",
      "Mail::later() para entrega agendada, deixando a fila do Laravel gerenciar o timing sem precisar de um scheduler customizado",
      "Estado do wizard em sessão para a criação de campanhas, persistindo os dados do formulário entre as abas sem um sistema de rascunho no banco",
      "Soft deletes nas campanhas para preservar o histórico de entrega e rastreamento após a remoção",
      "Laravel Breeze para o scaffold de autenticação, mantendo o foco no domínio de campanhas e rastreamento",
    ],
    challenges: [
      "Projetar o sistema de rastreamento de forma que pixels de abertura e redirecionamentos de clique registrem os eventos sem quebrar a renderização do email ou a experiência de destino da URL",
      "Gerenciar o estado de sessão do wizard entre múltiplos envios de formulário mantendo a lógica do controller limpa",
      "Garantir que o job fan-out despache os jobs por assinante corretamente quando a lista de assinantes for grande",
    ],
    improvements: [
      "Link de descadastro com opt-out em um clique",
      "Dashboard de analytics de campanha com gráficos de taxa de abertura e clique",
      "Editor de templates com preview HTML ao vivo",
      "Tratamento de bounces e falhas de entrega",
      "Suporte a múltiplos usuários com workspaces de equipe",
    ],
    github: "https://github.com/Luan-Neumann-Dev/email-blast",
    year: "2025",
    size: "sm",
    accent: "magenta",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);