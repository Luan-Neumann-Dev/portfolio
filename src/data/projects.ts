import type { Lang } from "@/i18n/LanguageContext";

import thumb1 from "@/assets/thumb1.png";
import thumb2 from "@/assets/thumb2.png";
import thumb3 from "@/assets/thumb3.png";
import p101 from "@/assets/p1-01.png"
import p102 from "@/assets/p1-02.png"
import p103 from "@/assets/p1-03.png"
import p104 from "@/assets/p1-04.png"
import p105 from "@/assets/p1-05.png"

import p201 from "@/assets/p2-01.png"

import p301 from "@/assets/p3-01.png"
import p302 from "@/assets/p3-02.png"
import p303 from "@/assets/p3-03.png"
import p304 from "@/assets/p3-04.png"

import p401 from "@/assets/p4-01.jpg"
import p402 from "@/assets/p4-02.jpg"
import p403 from "@/assets/p4-03.jpg"

import p501 from "@/assets/p5-01.jpg"
import p502 from "@/assets/p5-02.jpg"
import p503 from "@/assets/p5-03.jpg"

import p601 from "@/assets/p6-01.jpg"
import p602 from "@/assets/p6-02.jpg"
import p603 from "@/assets/p6-03.jpg"

import p701 from "@/assets/p7-01.jpg"
import p702 from "@/assets/p7-02.jpg"
import p703 from "@/assets/p7-03.jpg"

import p801 from "@/assets/p8-01.jpg"
import p802 from "@/assets/p8-02.jpg"
import p803 from "@/assets/p8-03.jpg"

import p901 from "@/assets/p9-01.jpg"
import p902 from "@/assets/p9-02.jpg"
import p903 from "@/assets/p9-03.jpg"

// =============================================
// PROJECTS
// =============================================

type Localized<T> = Record<Lang, T>;

interface ProjectData {
  id: string;
  title: string;
  subtitle: Localized<string>;
  description: Localized<string>;
  techs: string[];
  thumbnail: string;
  images: string[];
  fullDescription: Localized<string>;
  problem: Localized<string>;
  solution: Localized<string>;
  decisions: Localized<string[]>;
  challenges: Localized<string[]>;
  improvements: Localized<string[]>;
  github?: string;
  demo?: string;
  year: string;
  size: "lg" | "md" | "sm";
  accent: "purple" | "cyan" | "magenta";
}

/** A project with every localized field resolved to the active language. */
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

const projectsData: ProjectData[] = [
  {
    id: "finance-hub-web",
    title: "FinanceHub Web",
    subtitle: {
      en: "Personal finance dashboard with Next.js 15",
      pt: "Dashboard de finanças pessoais com Next.js 15",
    },
    description: {
      en: "Interactive dashboard to visualize income, expenses, savings and financial trends — built with Next.js 15 App Router, Recharts and Radix UI.",
      pt: "Dashboard interativo para visualizar receitas, despesas, economias e tendências financeiras — construído com Next.js 15 App Router, Recharts e Radix UI.",
    },
    techs: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Recharts", "Radix UI"],
    thumbnail: thumb1,
    images: [p101, p102, p103, p104, p105],
    fullDescription: {
      en: "FinanceHub Web is the frontend of the FinanceHub ecosystem. It offers a dashboard with monthly summary cards, a pie chart of expenses by category, an annual bar chart of income vs. expenses and financial insight cards generated from the report data. The remaining pages cover expense management with installment-group views, income sources, piggy banks with transaction history, and reports by period and by year. Authentication is handled through middleware-protected routes and a JWT stored in a cookie.",
      pt: "FinanceHub Web é o frontend do ecossistema FinanceHub. Oferece um dashboard com cards de resumo mensal, gráfico de pizza de despesas por categoria, gráfico de barras anual de receitas vs. despesas e cards de insights financeiros gerados a partir dos dados dos relatórios. As demais páginas cobrem gestão de despesas com visualização de grupos de parcelamento, fontes de receita, cofrinhos com histórico de transações e relatórios por período e anuais. A autenticação é feita via rotas protegidas por middleware e JWT armazenado em cookie.",
    },
    problem: {
      en: "Consuming a rich financial API requires a frontend that can handle multiple asynchronous data sources, protect routes without flashing unauthenticated content, and present complex data (charts, grouped installments, insight cards) without polluting the component layer with business logic.",
      pt: "Consumir uma API financeira rica exige um frontend capaz de lidar com múltiplas fontes de dados assíncronas, proteger rotas sem piscar conteúdo não autenticado e apresentar dados complexos (gráficos, parcelamentos agrupados, cards de insights) sem poluir a camada de componentes com lógica de negócio.",
    },
    solution: {
      en: "Next.js 15 App Router with route groups — (auth) and (dashboard) — for layout separation without affecting the URL. Each page delegates all data loading to a dedicated custom hook (useDashboard, useExpenses, usePiggys, etc.), keeping components purely presentational. Middleware protects the routes on the server. Financial insights are derived on the client from the report data by a pure function, with no extra API calls.",
      pt: "Next.js 15 App Router com route groups — (auth) e (dashboard) — para separação de layout sem impacto na URL. Cada página delega todo o carregamento de dados a um custom hook dedicado (useDashboard, useExpenses, usePiggys, etc.), mantendo os componentes puramente apresentacionais. O middleware protege as rotas no servidor. Os insights financeiros são derivados no cliente a partir dos dados dos relatórios por uma função pura, sem chamadas extras à API.",
    },
    decisions: {
      en: [
        "Next.js 15 App Router route groups to apply different layouts (with/without sidebar) without changing the URL structure",
        "Per-domain custom hooks as the data layer — components receive render-ready state and never call the API directly",
        "Per-route loading.tsx for automatic skeleton states, eliminating layout shift during loading",
        "Radix UI primitives for accessible dialogs, selects and tabs without importing a full component library",
        "js-cookie for client-side JWT storage, keeping the auth flow simple without a backend-for-frontend layer",
      ],
      pt: [
        "Route groups do App Router do Next.js 15 para aplicar layouts diferentes (com/sem sidebar) sem alterar a estrutura de URLs",
        "Custom hooks por domínio como camada de dados — os componentes recebem o estado pronto para renderizar e nunca chamam a API diretamente",
        "loading.tsx por rota para estados de skeleton automáticos, eliminando layout shift durante o carregamento",
        "Primitivos do Radix UI para dialogs, selects e tabs acessíveis sem importar uma biblioteca de componentes completa",
        "js-cookie para armazenamento do JWT no cliente, mantendo o fluxo de autenticação simples sem camada de backend-for-frontend",
      ],
    },
    challenges: {
      en: [
        "Protecting routes in the Next.js App Router without a client-side flash — solved by handling redirects in middleware.ts before the page renders",
        "Composing Recharts components (custom tooltips, responsive containers, dual bar chart) to fit the dashboard design",
        "Building the insight engine to surface contextual, relevant financial messages from raw report data, entirely on the client",
      ],
      pt: [
        "Proteger rotas no App Router do Next.js sem flash no cliente — resolvido tratando os redirecionamentos no middleware.ts antes da página renderizar",
        "Compor os componentes do Recharts (tooltips customizados, containers responsivos, gráfico de barras duplo) para se encaixar no design do dashboard",
        "Construir o motor de insights para surfaçar mensagens financeiras contextuais e relevantes a partir dos dados brutos dos relatórios, puramente no cliente",
      ],
    },
    improvements: {
      en: [
        "Dark mode toggle",
        "Expense filters by category, date range and amount",
        "CSV export of dashboard data",
        "Mobile-first PWA support",
        "Budget-limit alert notifications",
      ],
      pt: [
        "Toggle de modo escuro",
        "Filtros de despesas por categoria, intervalo de datas e valor",
        "Exportação dos dados do dashboard em CSV",
        "Suporte a PWA mobile-first",
        "Notificações de alertas de limite de orçamento",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/finance-hub-web",
    year: "2026",
    size: "lg",
    accent: "purple",
  },
  {
    id: "finance-hub-api",
    title: "FinanceHub API",
    subtitle: {
      en: "REST API for personal finance management",
      pt: "API REST para gestão de finanças pessoais",
    },
    description: {
      en: "Modular NestJS API with JWT authentication, income and expense control, an installment system, piggy banks and a multi-type reporting engine.",
      pt: "API NestJS modular com autenticação JWT, controle de receitas e despesas, sistema de parcelamento, cofrinhos e motor de relatórios multi-tipo.",
    },
    techs: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "bcrypt"],
    thumbnail: thumb2,
    images: [p201],
    fullDescription: {
      en: "FinanceHub API is a RESTful backend service for personal finance management. It exposes endpoints for income sources with recurrence rules (weekly, monthly, yearly, one-off), categorized expenses, installment purchases and virtual piggy banks with transaction history. A dedicated reporting module delivers monthly summaries, period analyses, month-by-month annual data and month-to-month comparisons — all computed on the server with parallel queries.",
      pt: "FinanceHub API é um serviço backend RESTful para gestão de finanças pessoais. Expõe endpoints para fontes de receita com regras de recorrência (semanal, mensal, anual, única), despesas categorizadas, compras parceladas e cofrinhos virtuais com histórico de transações. Um módulo dedicado de relatórios entrega resumos mensais, análises por período, dados anuais mês a mês e comparativos entre meses — tudo calculado no servidor com queries paralelas.",
    },
    problem: {
      en: "Personal finance apps often centralize all the logic on the client, which makes them hard to extend and impossible to share data across devices. The challenge was to build a structured, secure backend that centralizes the financial calculations and exposes them through a clean API.",
      pt: "Aplicativos de finanças pessoais frequentemente centralizam toda a lógica no cliente, o que dificulta a extensão e torna impossível compartilhar dados entre dispositivos. O desafio era construir um backend estruturado e seguro que centralizasse os cálculos financeiros e os expusesse por meio de uma API limpa.",
    },
    solution: {
      en: "Modular architecture with NestJS, where each financial domain (auth, income, expenses, installments, piggy banks, reports) lives in an isolated module. Prisma handles all database communication with full type safety. The reporting engine uses parallel queries with Promise.all and Prisma's groupBy and aggregate features to normalize different recurrence types without generating N+1 queries.",
      pt: "Arquitetura modular com NestJS, onde cada domínio financeiro (auth, receitas, despesas, parcelamentos, cofrinhos, relatórios) vive em um módulo isolado. O Prisma gerencia toda a comunicação com o banco com tipagem completa. O motor de relatórios usa queries paralelas com Promise.all e os recursos groupBy e aggregate do Prisma para normalizar diferentes tipos de recorrência sem gerar queries N+1.",
    },
    decisions: {
      en: [
        "NestJS for its opinionated module system and native support for guards, pipes and filters — which made it simple to implement a global JWT guard with per-route opt-out via @Public()",
        "Prisma instead of raw SQL or another ORM for its type-safe query builder and first-class migration tooling",
        "InstallmentGroup as a parent model that automatically generates N individual Expense records on creation, keeping the expenses table uniform while enabling grouped views",
        "Global ValidationPipe with whitelist: true to drop unknown fields at the controller boundary, preventing mass-assignment issues",
        "Default expense categories created automatically on user registration to improve the first-run experience without extra setup",
      ],
      pt: [
        "NestJS pelo seu sistema de módulos opinativo e suporte nativo a guards, pipes e filters — o que tornou simples implementar um guard JWT global com opt-out por rota via @Public()",
        "Prisma no lugar de SQL puro ou outro ORM pelo query builder com tipagem segura e tooling de migrations de primeira classe",
        "InstallmentGroup como modelo pai que gera automaticamente N registros de Expense individuais na criação, mantendo a tabela de despesas uniforme e permitindo visualizações agrupadas",
        "ValidationPipe global com whitelist: true para descartar campos desconhecidos na entrada do controller, prevenindo problemas de mass assignment",
        "Categorias padrão de despesas criadas automaticamente no registro do usuário para melhorar a experiência de primeiro acesso sem exigir configuração extra",
      ],
    },
    challenges: {
      en: [
        "Normalizing recurring income across different recurrence types (weekly ×4, monthly ×1, yearly ÷12) for any date range in the reporting engine",
        "Modeling the installment system so individual expense records stay queryable as usual while still being linked to the parent group",
        "Keeping report queries fast by batching every aggregation into a single Promise.all instead of sequential awaits",
      ],
      pt: [
        "Normalizar receitas recorrentes entre diferentes tipos de recorrência (semanal ×4, mensal ×1, anual ÷12) para qualquer intervalo de datas no motor de relatórios",
        "Modelar o sistema de parcelamento de forma que os registros de despesa individuais continuem consultáveis normalmente e ao mesmo tempo vinculáveis ao grupo pai",
        "Manter as queries de relatório rápidas agrupando todas as agregações em um único Promise.all em vez de awaits sequenciais",
      ],
    },
    improvements: {
      en: [
        "Swagger/OpenAPI documentation endpoint",
        "Per-category budget goals with limit alerts",
        "Report export in CSV or PDF",
        "Refresh token support",
        "Unit test coverage for every service method",
      ],
      pt: [
        "Endpoint de documentação Swagger/OpenAPI",
        "Metas de orçamento por categoria com alertas de limite",
        "Exportação de relatórios em CSV ou PDF",
        "Suporte a refresh token",
        "Cobertura de testes unitários para todos os métodos de serviço",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/finance-hub-api-nestjs",
    year: "2026",
    size: "md",
    accent: "cyan",
  },
  {
    id: "email-blast",
    title: "Email Blast",
    subtitle: {
      en: "Self-hosted email marketing platform",
      pt: "Plataforma de email marketing self-hosted",
    },
    description: {
      en: "Laravel 12 application to create campaigns, manage subscriber lists, schedule bulk sends via queued jobs and track open and click rates per recipient.",
      pt: "Aplicação Laravel 12 para criar campanhas, gerenciar listas de assinantes, agendar envios em massa via jobs na fila e rastrear taxas de abertura e clique por destinatário.",
    },
    techs: ["Laravel 12", "PHP 8.2", "Blade", "Tailwind CSS", "SQLite", "Pest"],
    thumbnail: thumb3,
    images: [ p301, p302, p303, p304 ],
    fullDescription: {
      en: "Email Blast is a self-hosted email marketing platform built with Laravel 12. Users can manage subscriber lists, create reusable HTML templates and assemble campaigns through a multi-step wizard. When a campaign is published, a fan-out job (SendEmailsCampaignJob) is dispatched and creates one queued job per subscriber (SendEmailCampaignJob), each scheduled independently via Mail::later(). Open and click rates are tracked per CampaignMail record using a pixel endpoint and a redirect controller.",
      pt: "Email Blast é uma plataforma de email marketing self-hosted construída com Laravel 12. Os usuários podem gerenciar listas de assinantes, criar templates HTML reutilizáveis e montar campanhas por meio de um wizard multi-etapas. Ao publicar uma campanha, um job fan-out (SendEmailsCampaignJob) é disparado e cria um job individual na fila por assinante (SendEmailCampaignJob), cada um agendado de forma independente via Mail::later(). Taxas de abertura e clique são rastreadas por registro de CampaignMail usando um endpoint de pixel e um controller de redirecionamento.",
    },
    problem: {
      en: "Email marketing tools are complex SaaS products. The challenge was to model the core mechanics — asynchronous bulk delivery, per-recipient tracking, scheduled sends — in a clean, understandable Laravel application.",
      pt: "Ferramentas de email marketing são produtos SaaS complexos. O desafio era modelar as mecânicas centrais — entrega assíncrona em massa, rastreamento por destinatário, envios agendados — em uma aplicação Laravel limpa e compreensível.",
    },
    solution: {
      en: "Laravel's queue system manages the fan-out pattern: a dispatcher job iterates over the subscribers and dispatches one job per recipient, each responsible for its own delivery and failure. Tracking is implemented with a transparent 1×1 pixel for opens and a redirect controller for clicks, both incrementing counters on the CampaignMail record. Campaign creation uses session state in a multi-step wizard with middleware to control tab navigation.",
      pt: "O sistema de filas do Laravel gerencia o padrão fan-out: um job dispatcher itera sobre os assinantes e despacha um job por destinatário, cada um responsável pela própria entrega e falha. O rastreamento é implementado com um pixel 1×1 transparente para aberturas e um controller de redirecionamento para cliques, ambos incrementando contadores no registro de CampaignMail. A criação de campanhas usa estado de sessão em um wizard multi-etapas com middleware para controlar a navegação entre abas.",
    },
    decisions: {
      en: [
        "Fan-out pattern with two jobs (SendEmailsCampaignJob → SendEmailCampaignJob per subscriber) so each delivery fails and retries independently",
        "Mail::later() for scheduled delivery, letting Laravel's queue manage the timing without a custom scheduler",
        "Session-based wizard state for campaign creation, persisting form data across tabs without a database draft system",
        "Soft deletes on campaigns to preserve delivery and tracking history after removal",
        "Laravel Breeze for the auth scaffold, keeping the focus on the campaign and tracking domain",
      ],
      pt: [
        "Padrão fan-out com dois jobs (SendEmailsCampaignJob → SendEmailCampaignJob por assinante) para que cada entrega falhe e seja reprocessada de forma independente",
        "Mail::later() para entrega agendada, deixando a fila do Laravel gerenciar o timing sem precisar de um scheduler customizado",
        "Estado do wizard em sessão para a criação de campanhas, persistindo os dados do formulário entre as abas sem um sistema de rascunho no banco",
        "Soft deletes nas campanhas para preservar o histórico de entrega e rastreamento após a remoção",
        "Laravel Breeze para o scaffold de autenticação, mantendo o foco no domínio de campanhas e rastreamento",
      ],
    },
    challenges: {
      en: [
        "Designing the tracking system so open pixels and click redirects record events without breaking email rendering or the destination URL experience",
        "Managing the wizard's session state across multiple form submissions while keeping the controller logic clean",
        "Ensuring the fan-out job dispatches per-subscriber jobs correctly when the subscriber list is large",
      ],
      pt: [
        "Projetar o sistema de rastreamento de forma que pixels de abertura e redirecionamentos de clique registrem os eventos sem quebrar a renderização do email ou a experiência de destino da URL",
        "Gerenciar o estado de sessão do wizard entre múltiplos envios de formulário mantendo a lógica do controller limpa",
        "Garantir que o job fan-out despache os jobs por assinante corretamente quando a lista de assinantes for grande",
      ],
    },
    improvements: {
      en: [
        "Unsubscribe link with one-click opt-out",
        "Campaign analytics dashboard with open and click rate charts",
        "Template editor with live HTML preview",
        "Bounce and delivery-failure handling",
        "Multi-user support with team workspaces",
      ],
      pt: [
        "Link de descadastro com opt-out em um clique",
        "Dashboard de analytics de campanha com gráficos de taxa de abertura e clique",
        "Editor de templates com preview HTML ao vivo",
        "Tratamento de bounces e falhas de entrega",
        "Suporte a múltiplos usuários com workspaces de equipe",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/email-blast",
    year: "2025",
    size: "sm",
    accent: "magenta",
  },
  {
    id: "get-a-pet",
    title: "Get a Pet",
    subtitle: {
      en: "Full-stack pet adoption platform",
      pt: "Plataforma full-stack de adoção de pets",
    },
    description: {
      en: "A platform that connects people who want to adopt with people who have pets up for adoption — animal listings with multiple photos, visit scheduling and the full adoption cycle, with JWT authentication and a protected REST API.",
      pt: "Plataforma que conecta quem quer adotar a quem tem pets para adoção — cadastro de animais com múltiplas fotos, agendamento de visitas e o ciclo completo de adoção, com autenticação JWT e API REST protegida.",
    },
    techs: ["React 18", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Multer"],
    thumbnail: p401,
    images: [p401, p402, p403],
    fullDescription: {
      en: "Get a Pet is a full-stack application that connects people who want to adopt with people who have pets available for adoption. Users sign up, create listings for their animals with multiple photos and manage the entire adoption cycle — from scheduling visits to completion. Every route that modifies data is protected by a verifyToken middleware on the backend, and the frontend mirrors that check by verifying the auth state before rendering sensitive pages, keeping both layers consistent. Global auth state is shared across the app via the Context API, while a decoupled event bus delivers flash messages between components without prop drilling.",
      pt: "Get a Pet é uma aplicação full-stack que conecta pessoas que querem adotar a pessoas com pets disponíveis para adoção. Os usuários se cadastram, criam anúncios dos seus animais com múltiplas fotos e gerenciam todo o ciclo de adoção — do agendamento de visitas até a conclusão. Toda rota que modifica dados é protegida por um middleware verifyToken no backend, e o frontend espelha essa verificação checando o estado de autenticação antes de renderizar páginas sensíveis, mantendo as duas camadas consistentes. O estado global de autenticação é compartilhado por toda a aplicação via Context API, enquanto um event bus desacoplado entrega as flash messages entre componentes sem prop drilling.",
    },
    problem: {
      en: "Going beyond a simple CRUD means dealing with real concerns of a complete application: secure authentication, protected API routes, file uploads and a consistent global auth state across every screen. Without a solid authorization layer, any authenticated user could edit or delete listings that aren't theirs.",
      pt: "Ir além de um CRUD simples exige lidar com preocupações reais de uma aplicação completa: autenticação segura, rotas de API protegidas, upload de arquivos e um estado de autenticação global consistente entre todas as telas. Sem uma camada de autorização sólida, qualquer usuário autenticado poderia editar ou excluir anúncios que não são seus.",
    },
    solution: {
      en: "Full-stack architecture with React on the frontend and Express + MongoDB on the backend, connected via Axios. Authentication uses a JWT sent in the Authorization header and validated by a verifyToken middleware that protects all write operations. Each write controller resolves the user from the token and compares their _id with the resource owner's before allowing the operation. Multi-image upload is handled by Multer and served as static files. On the frontend, the Context API centralizes auth state and an EventEmitter-based event bus delivers flash messages.",
      pt: "Arquitetura full-stack com React no frontend e Express + MongoDB no backend, conectados via Axios. A autenticação usa JWT enviado no header Authorization e validado por um middleware verifyToken que protege todas as operações de escrita. Cada controller de escrita resolve o usuário a partir do token e compara o _id dele com o do dono do recurso antes de permitir a operação. O upload de múltiplas imagens é tratado pelo Multer e servido como arquivos estáticos. No frontend, o Context API centraliza o estado de autenticação e um event bus baseado em EventEmitter entrega as flash messages.",
    },
    decisions: {
      en: [
        "Context API with a useAuth hook to share the auth state across the whole app, eliminating prop drilling",
        "Lightweight EventEmitter-based event bus (useFlashMessage) to fire flash messages from any component and display them at the top of the tree, with no common parent",
        "verifyToken middleware centralizing authentication instead of repeating the check in every controller",
        "Ownership check on every write: the token user's _id is compared with the resource owner's before any update or delete",
        "Deliberate denormalization in MongoDB — the owner's data is embedded in the pet document to optimize listing reads",
        "Isolated helper functions (getToken, getUserByToken, createUserToken) to keep controllers clean",
      ],
      pt: [
        "Context API com um hook useAuth para compartilhar o estado de autenticação por toda a aplicação, eliminando prop drilling",
        "Event bus leve baseado em EventEmitter (useFlashMessage) para disparar flash messages de qualquer componente e exibi-las no topo da árvore, sem pais em comum",
        "Middleware verifyToken centralizando a autenticação em vez de repetir a verificação em cada controller",
        "Verificação de propriedade (ownership) em toda escrita: o _id do usuário do token é comparado ao do dono do recurso antes de qualquer update ou delete",
        "Denormalização deliberada no MongoDB — os dados do dono são embutidos no documento do pet para otimizar a leitura da listagem",
        "Funções helper isoladas (getToken, getUserByToken, createUserToken) para manter os controllers limpos",
      ],
    },
    challenges: {
      en: [
        "Sharing the auth state across the entire app and reacting in real time to login, logout and profile updates — solved with a UserContext and the useAuth hook",
        "Displaying flash messages fired from inside a form in a layout component at the top of the tree, with no common parent — solved with an EventEmitter-based event bus",
        "Ensuring only a pet's owner can edit or delete it, regardless of the ID passed in the URL — solved by comparing the token's _id with the resource's on every write",
      ],
      pt: [
        "Compartilhar o estado de autenticação entre toda a aplicação e reagir em tempo real a login, logout e atualização de perfil — resolvido com um UserContext e o hook useAuth",
        "Exibir flash messages disparadas de dentro de um formulário em um componente de layout no topo da árvore, sem um pai em comum — resolvido com um event bus baseado em EventEmitter",
        "Garantir que apenas o dono de um pet possa editá-lo ou excluí-lo, independente do ID passado na URL — resolvido comparando o _id do token com o do recurso em toda escrita",
      ],
    },
    improvements: {
      en: [
        "Search and filter pets by species, age or location",
        "Real-time chat between owner and potential adopter",
        "Email notifications when a visit is scheduled",
        "Pagination on the pet listing",
        "Migration to TypeScript on frontend and backend",
        "Input validation with Zod or Joi on the API",
      ],
      pt: [
        "Busca e filtro de pets por espécie, idade ou localização",
        "Chat em tempo real entre dono e possível adotante",
        "Notificações por e-mail quando uma visita é agendada",
        "Paginação na listagem de pets",
        "Migração para TypeScript no frontend e no backend",
        "Validação de entrada com Zod ou Joi na API",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/get-a-pet",
    year: "2024",
    size: "md",
    accent: "purple",
  },
  {
    id: "reactgram",
    title: "ReactGram",
    subtitle: {
      en: "Instagram-inspired photo social network",
      pt: "Rede social de fotos inspirada no Instagram",
    },
    description: {
      en: "Full-stack social platform inspired by Instagram — photo uploads, likes, comments, search and profile management, with JWT authentication and async state managed by Redux Toolkit.",
      pt: "Plataforma social full-stack inspirada no Instagram — upload de fotos, curtidas, comentários, busca e gestão de perfil, com autenticação JWT e estado assíncrono gerenciado por Redux Toolkit.",
    },
    techs: ["React 18", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    thumbnail: p501,
    images: [p501, p502, p503],
    fullDescription: {
      en: "ReactGram is a full-stack photo-sharing social platform inspired by Instagram. Users sign up, log in, post photos with a title, like and comment on other users' posts, edit their own profile and search — all through a REST API with token-based authentication. The frontend manages complex async state (loading, error, success) with Redux Toolkit via createAsyncThunk and extraReducers, while the backend protects all sensitive routes with an authGuard middleware that validates the JWT.",
      pt: "ReactGram é uma plataforma social full-stack de compartilhamento de fotos inspirada no Instagram. Os usuários se cadastram, fazem login, publicam fotos com título, curtem e comentam posts de outros usuários, editam o próprio perfil e fazem buscas — tudo através de uma API REST com autenticação baseada em token. O frontend gerencia o estado assíncrono complexo (loading, erro, sucesso) com Redux Toolkit via createAsyncThunk e extraReducers, enquanto o backend protege todas as rotas sensíveis com um middleware authGuard que valida o JWT.",
    },
    problem: {
      en: "Building a complete full-stack application means wiring authentication, file uploads and data flow through a real client-server architecture — from the JWT in the request header to the protected state in the browser. Every operation must also be validated on the server: duplicate likes, edits by non-owners and invalid uploads can't rely on the UI alone.",
      pt: "Construir uma aplicação full-stack completa exige conectar autenticação, upload de arquivos e fluxo de dados através de uma arquitetura cliente-servidor real — do JWT no header da requisição até o estado protegido no navegador. Cada operação precisa ser validada também no servidor: curtidas duplicadas, edições por quem não é dono e uploads inválidos não podem depender só da UI.",
    },
    solution: {
      en: "Modular REST API with Express and MongoDB (Mongoose), with authentication via a JWT sent as a Bearer token and validated by the authGuard middleware on every protected route. Image upload uses Multer with dynamic folder routing (profile vs. post) and type validation. On the frontend, each Redux Toolkit slice uses createAsyncThunk + extraReducers, with the call logic isolated in a services layer to keep slices clean.",
      pt: "API REST modular com Express e MongoDB (Mongoose), com autenticação via JWT enviado como Bearer token e validado pelo middleware authGuard em todas as rotas protegidas. O upload de imagens usa Multer com roteamento dinâmico de pastas (perfil x post) e validação de tipo. No frontend, cada slice do Redux Toolkit usa createAsyncThunk + extraReducers, com a lógica das chamadas isolada em uma camada de services para manter os slices limpos.",
    },
    decisions: {
      en: [
        "Redux Toolkit with createAsyncThunk and extraReducers per slice to manage async states (loading, error, success) predictably",
        "Services layer isolating API calls, keeping the Redux slices clean and testable",
        "authGuard middleware validating the JWT on every protected route, centralizing authentication",
        "Server-side validation with express-validator as middleware before the controller runs",
        "Dynamic folder routing in Multer by inspecting req.baseUrl to separate profile and post uploads without extra middleware",
        "Storing only the token and the user ID in localStorage — never passwords or sensitive data",
      ],
      pt: [
        "Redux Toolkit com createAsyncThunk e extraReducers por slice para gerenciar estados assíncronos (loading, erro, sucesso) de forma previsível",
        "Camada de services isolando as chamadas à API, mantendo os slices do Redux limpos e testáveis",
        "Middleware authGuard validando o JWT em todas as rotas protegidas, centralizando a autenticação",
        "Validação no servidor com express-validator como middleware antes do controller rodar",
        "Roteamento dinâmico de pastas no Multer inspecionando req.baseUrl para separar uploads de perfil e de post sem middleware extra",
        "Armazenamento apenas do token e do ID do usuário no localStorage — nunca senhas ou dados sensíveis",
      ],
    },
    challenges: {
      en: [
        "Protecting frontend routes without repeating the auth check in every component — solved with a useAuth hook that reads the Redux state and returns {auth, loading}, used to wrap each protected route",
        "Routing profile and post image uploads to different folders, since Multer runs before the controller — solved by inspecting req.baseUrl in the diskStorage destination",
        "Preventing duplicate likes by enforcing the rule on the server — the controller checks whether the user already liked before adding, returning 422 if so",
      ],
      pt: [
        "Proteger rotas no frontend sem repetir a verificação de autenticação em cada componente — resolvido com um hook useAuth que lê o estado do Redux e retorna {auth, loading}, usado para envolver cada rota protegida",
        "Direcionar uploads de imagem de perfil e de post para pastas diferentes, já que o Multer roda antes do controller — resolvido inspecionando req.baseUrl no destination do diskStorage",
        "Impedir curtidas duplicadas garantindo a regra no servidor — o controller verifica se o usuário já curtiu antes de adicionar, retornando 422 caso já tenha curtido",
      ],
    },
    improvements: {
      en: [
        "Follow / unfollow system between users",
        "Notification feed for likes and comments",
        "Paginated photo feed",
        "Debounced search",
        "Deploy the backend on Railway and the frontend on Vercel",
      ],
      pt: [
        "Sistema de seguir / deixar de seguir entre usuários",
        "Feed de notificações para curtidas e comentários",
        "Feed de fotos paginado",
        "Debounce na busca",
        "Deploy do backend no Railway e frontend na Vercel",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/reactgram",
    year: "2024",
    size: "md",
    accent: "magenta",
  },
  {
    id: "thoughts-app",
    title: "Thoughts App",
    subtitle: {
      en: "Full-stack thoughts app with SSR and Handlebars",
      pt: "App full-stack de pensamentos com SSR e Handlebars",
    },
    description: {
      en: "Full-stack application to create, manage and share personal thoughts, with session-based authentication, a user dashboard and server-side rendering with Handlebars over an MVC architecture.",
      pt: "Aplicação full-stack para criar, gerenciar e compartilhar pensamentos pessoais, com autenticação por sessão, dashboard do usuário e renderização no servidor com Handlebars sobre arquitetura MVC.",
    },
    techs: ["Node.js", "Express", "Handlebars", "Sequelize", "SQLite", "Express-session"],
    thumbnail: p601,
    images: [p601, p602, p603],
    fullDescription: {
      en: "Thoughts App is a full-stack web application that lets users create, manage and share personal thoughts in a simple, intuitive way. It was built to practice backend architecture with Node.js and Express, focused on MVC structure, authentication and CRUD operations. Pages are rendered on the server with Handlebars, and each user manages their own content securely through routes protected by session middleware.",
      pt: "Thoughts App é uma aplicação web full-stack que permite aos usuários criar, gerenciar e compartilhar pensamentos pessoais de forma simples e intuitiva. Foi construída para praticar arquitetura de backend com Node.js e Express, com foco em estrutura MVC, autenticação e operações CRUD. As páginas são renderizadas no servidor com Handlebars, e cada usuário gerencia o próprio conteúdo de forma segura através de rotas protegidas por middleware de sessão.",
    },
    problem: {
      en: "Practicing real backend architecture means going beyond isolated screens: structuring the code in layers (MVC), protecting routes so only authenticated users manage their content, and persisting data with an ORM — all in a server-rendered application.",
      pt: "Praticar arquitetura de backend de verdade exige ir além de telas isoladas: estruturar o código em camadas (MVC), proteger rotas para que só usuários autenticados gerenciem seu conteúdo e persistir dados com um ORM — tudo em uma aplicação renderizada no servidor.",
    },
    solution: {
      en: "MVC application with Express, where models (Sequelize), controllers (business logic) and routes (endpoints) are kept well separated. Authentication uses express-session and a checkAuth middleware protects the routes that require login. Views are rendered on the server with Handlebars, and Sequelize handles persistence over SQLite.",
      pt: "Aplicação MVC com Express, onde models (Sequelize), controllers (lógica de negócio) e routes (endpoints) ficam bem separados. A autenticação usa express-session e um middleware checkAuth protege as rotas que exigem login. As views são renderizadas no servidor com Handlebars, e o Sequelize gerencia a persistência sobre SQLite.",
    },
    decisions: {
      en: [
        "MVC architecture with a clear separation between models, controllers and routes",
        "Sequelize as the ORM to model the entities and relationships over SQLite",
        "Server-side rendering (SSR) with Handlebars for dynamic pages",
        "Session-based authentication with express-session and a checkAuth middleware protecting the private routes",
        "Isolated helper functions to keep the controllers organized",
      ],
      pt: [
        "Arquitetura MVC com separação clara entre models, controllers e routes",
        "Sequelize como ORM para modelar as entidades e relacionamentos sobre SQLite",
        "Renderização no servidor (SSR) com Handlebars para páginas dinâmicas",
        "Autenticação por sessão com express-session e middleware checkAuth protegendo as rotas privadas",
        "Funções helper isoladas para manter os controllers organizados",
      ],
    },
    challenges: {
      en: [
        "Structuring the application in MVC layers while keeping controllers, models and routes with well-separated responsibilities",
        "Protecting the content-management routes so only authenticated users can access them, via session middleware",
        "Ensuring each user only sees and manages their own thoughts in the dashboard",
      ],
      pt: [
        "Estruturar a aplicação em camadas MVC mantendo controllers, models e rotas com responsabilidades bem separadas",
        "Proteger as rotas de gerenciamento de conteúdo para que apenas usuários autenticados acessem, via middleware de sessão",
        "Garantir que cada usuário só veja e gerencie os próprios pensamentos no dashboard",
      ],
    },
    improvements: {
      en: [
        "Likes or reactions on thoughts",
        "Comment system",
        "UI/UX improvements",
        "Pagination of thoughts",
        "Production deploy (Render / Railway)",
      ],
      pt: [
        "Curtidas ou reações nos pensamentos",
        "Sistema de comentários",
        "Melhorias de UI/UX",
        "Paginação dos pensamentos",
        "Deploy em produção (Render / Railway)",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/thoughts",
    year: "2023",
    size: "sm",
    accent: "purple",
  },
  {
    id: "movies-library",
    title: "Movies Library",
    subtitle: {
      en: "Movie catalog powered by the TMDB API",
      pt: "Catálogo de filmes com a API do TMDB",
    },
    description: {
      en: "React SPA that consumes the TMDB API to list top-rated movies, search by title and view details like budget, revenue and runtime — with URL-based search and client-side routing.",
      pt: "SPA em React que consome a API do TMDB para listar os filmes mais bem avaliados, buscar por título e ver detalhes como orçamento, receita e duração — com busca baseada na URL e rotas client-side.",
    },
    techs: ["React 18", "React Router 6", "Vite", "TMDB API"],
    thumbnail: p701,
    images: [p701, p702, p703],
    fullDescription: {
      en: "Movies Library is a React SPA that consumes the TMDB API to display a movie catalog. On the home page, the user sees the top-rated movies fetched directly from the API; from there, they can search any title from the navbar and navigate to a details page with financial and editorial information for each movie. The project covers real frontend patterns: async data fetching with useEffect, client-side routing with React Router, URL search params and API-key management with environment variables.",
      pt: "Movies Library é uma SPA em React que consome a API do TMDB para exibir um catálogo de filmes. Na home, o usuário vê os filmes mais bem avaliados buscados diretamente da API; a partir daí, pode pesquisar qualquer título pela navbar e navegar até uma página de detalhes com informações financeiras e editoriais de cada filme. O projeto cobre padrões reais de frontend: data fetching assíncrono com useEffect, roteamento client-side com React Router, parâmetros de busca na URL e gerenciamento da chave de API com variáveis de ambiente.",
    },
    problem: {
      en: "Consuming an external API in a SPA requires handling asynchronous requests, keeping the search shareable and navigable through browser history, reusing components across different pages and protecting the API key outside the code.",
      pt: "Consumir uma API externa em uma SPA exige lidar com requisições assíncronas, manter a busca compartilhável e navegável pelo histórico do navegador, reaproveitar componentes entre páginas diferentes e proteger a chave de API fora do código.",
    },
    solution: {
      en: "React with React Router 6 for routing and a shared layout (Outlet). Search uses useSearchParams, keeping the query in the URL for shareable, history-friendly results. A reusable MovieCard component serves home, search and details, controlled by a showLink prop. The API key lives in environment variables accessed via Vite's import.meta.env.",
      pt: "React com React Router 6 para roteamento e layout compartilhado (Outlet). A busca usa useSearchParams, guardando a query na URL para resultados compartilháveis e amigáveis ao histórico. Um componente MovieCard reutilizável serve home, busca e detalhe, controlado por uma prop showLink. A chave da API fica em variáveis de ambiente acessadas via import.meta.env do Vite.",
    },
    decisions: {
      en: [
        "URL-based search with useSearchParams, making results shareable and browser-history friendly",
        "Reusable MovieCard component across home, search and details, with a showLink prop controlling whether the link renders",
        "Shared layout with React Router's Outlet to keep the Navbar persistent across pages",
        "API key managed via environment variables through Vite's import.meta.env, kept out of version control",
        "Data-fetching logic kept close to the component that owns the state",
      ],
      pt: [
        "Busca baseada na URL com useSearchParams, tornando os resultados compartilháveis e amigáveis ao histórico do navegador",
        "Componente MovieCard reutilizável entre home, busca e detalhe, com uma prop showLink controlando a renderização do link",
        "Layout compartilhado com o Outlet do React Router para manter a Navbar persistente entre as páginas",
        "Chave de API gerenciada por variáveis de ambiente via import.meta.env do Vite, fora do código versionado",
        "Lógica de data fetching mantida próxima ao componente que detém o estado",
      ],
    },
    challenges: {
      en: [
        "Keeping the search shareable and history-friendly — solved by storing the query in the URL with useSearchParams and reacting to it in useEffect",
        "Reusing the same movie card on home, search and details without duplication — solved with the showLink prop controlling the conditional link rendering",
        "Protecting the API key outside the code — solved with Vite environment variables (import.meta.env)",
      ],
      pt: [
        "Manter a busca compartilhável e navegável pelo histórico — resolvido guardando a query na URL com useSearchParams e reagindo a ela no useEffect",
        "Reaproveitar o mesmo card de filme em home, busca e detalhe sem duplicação — resolvido com a prop showLink controlando a renderização condicional do link",
        "Proteger a chave da API fora do código — resolvido com variáveis de ambiente do Vite (import.meta.env)",
      ],
    },
    improvements: {
      en: [
        "Favorites list persisted in localStorage",
        "Pagination on home and search results",
        "Genre filter on the home page",
        "Loading skeleton instead of plain text",
        "Migration to TypeScript",
      ],
      pt: [
        "Lista de favoritos com persistência em localStorage",
        "Paginação na home e nos resultados de busca",
        "Filtro por gênero na home",
        "Loading skeleton no lugar de texto simples",
        "Migração para TypeScript",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/movies-library",
    demo: "https://movies-library-smoky-nine.vercel.app/",
    year: "2024",
    size: "md",
    accent: "cyan",
  },
  {
    id: "github-finder",
    title: "GitHub Finder",
    subtitle: {
      en: "GitHub profile search with React + TypeScript",
      pt: "Busca de perfis do GitHub com React + TypeScript",
    },
    description: {
      en: "React + TypeScript SPA that searches any GitHub profile through the public API and shows, in real time, the user's data and their 5 most-starred repositories.",
      pt: "SPA em React + TypeScript que busca qualquer perfil do GitHub pela API pública e mostra, em tempo real, os dados do usuário e seus 5 repositórios mais estrelados.",
    },
    techs: ["React 18", "TypeScript", "React Router 6", "Vite", "GitHub API", "CSS Modules"],
    thumbnail: p801,
    images: [p801, p802, p803],
    fullDescription: {
      en: "GitHub Finder is a React SPA that lets you search any GitHub user by username and instantly see their public profile data — avatar, location, followers and following. From the profile, you can navigate to the user's 5 most-starred repositories, all fetched in real time from the public GitHub API. The project was built to practice integrating a real REST API with React, applying TypeScript to ensure type safety across components and data flows.",
      pt: "GitHub Finder é uma SPA em React que permite buscar qualquer usuário do GitHub pelo username e ver na hora os dados do seu perfil público — avatar, localização, seguidores e seguindo. A partir do perfil, é possível navegar até os 5 repositórios mais estrelados do usuário, todos buscados em tempo real na API pública do GitHub. O projeto foi construído para praticar a integração de uma API REST real com React, aplicando TypeScript para garantir segurança de tipos entre componentes e fluxos de dados.",
    },
    problem: {
      en: "Integrating a real external API into a SPA requires handling asynchronous requests, dealing with different response statuses (200, 404), managing UI states (loading, error, data) and typing the responses to avoid runtime integration errors.",
      pt: "Integrar uma API externa real em uma SPA exige lidar com requisições assíncronas, tratar diferentes status de resposta (200, 404), gerenciar estados de UI (carregando, erro, dados) e tipar as respostas para evitar erros de integração em tempo de execução.",
    },
    solution: {
      en: "React with TypeScript, where API responses are consumed via native fetch and typed with custom interfaces, making data handling predictable across all components. UI states are managed explicitly with separate useState flags, and the data-fetching logic lives in the pages (routes), separated from the presentational components. Repositories are sorted by stars on the client and sliced to the top 5, avoiding extra API calls.",
      pt: "React com TypeScript, onde as respostas da API são consumidas via fetch nativo e tipadas com interfaces customizadas, tornando o tratamento de dados previsível em todos os componentes. Os estados de UI são gerenciados explicitamente com flags de useState separadas, e a lógica de data fetching fica nas páginas (routes), separada dos componentes de apresentação. Os repositórios são ordenados por estrelas no cliente e fatiados nos 5 primeiros, evitando chamadas extras à API.",
    },
    decisions: {
      en: [
        "TypeScript with custom interfaces to type API responses and component props end to end, catching integration errors at compile time",
        "Client-side sorting of repositories by stars (sort + slice to the top 5) instead of query params, keeping the implementation simple and avoiding extra calls",
        "Data-fetching logic in the pages (routes), separated from the purely presentational components",
        "UI states (loading, error, data) managed explicitly with separate useState flags",
        "CSS Modules for component-scoped styles, avoiding name collisions",
      ],
      pt: [
        "TypeScript com interfaces customizadas para tipar respostas da API e props dos componentes de ponta a ponta, capturando erros de integração em tempo de compilação",
        "Ordenação dos repositórios por estrelas no cliente (sort + slice nos top 5) em vez de query params, mantendo a implementação simples e sem chamadas extras",
        "Lógica de data fetching nas páginas (routes), separada dos componentes puramente apresentacionais",
        "Estados de UI (loading, erro, dados) gerenciados explicitamente com flags de useState separadas",
        "CSS Modules para estilos com escopo por componente, evitando conflitos de nomes",
      ],
    },
    challenges: {
      en: [
        "Handling different GitHub API statuses (profile found vs. 404) by showing a friendly error screen when the user doesn't exist",
        "Typing API responses and props end to end with TypeScript to catch integration errors before runtime",
        "Showing the 5 most-starred repositories without extra calls — solved by sorting and slicing the data on the client",
      ],
      pt: [
        "Tratar diferentes status da API do GitHub (perfil encontrado x 404) exibindo uma tela de erro amigável quando o usuário não existe",
        "Tipar respostas da API e props de ponta a ponta com TypeScript para capturar erros de integração antes da execução",
        "Mostrar os 5 repositórios mais estrelados sem chamadas extras — resolvido ordenando e fatiando os dados no cliente",
      ],
    },
    improvements: {
      en: [
        "Pagination of repositories instead of limiting to the top 5",
        "Show repository details: language, last update and description",
        "Light/dark theme toggle",
        "Cache recent searches to reduce repeated API calls",
      ],
      pt: [
        "Paginação dos repositórios em vez de limitar aos 5 primeiros",
        "Exibir detalhes do repositório: linguagem, última atualização e descrição",
        "Toggle de tema claro/escuro",
        "Cache das buscas recentes para reduzir chamadas repetidas à API",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/github-finder",
    demo: "https://github-finder-lemon-eight.vercel.app/",
    year: "2024",
    size: "md",
    accent: "magenta",
  },
  {
    id: "miniblog",
    title: "MiniBlog",
    subtitle: {
      en: "Full-stack blog with React and Firebase",
      pt: "Blog full-stack com React e Firebase",
    },
    description: {
      en: "Full-stack blog with React and Firebase — authentication, real-time post CRUD with Firestore, keyword search and a user dashboard, with the logic abstracted into custom hooks.",
      pt: "Blog full-stack com React e Firebase — autenticação, CRUD de posts em tempo real com Firestore, busca por palavras-chave e dashboard do usuário, com a lógica abstraída em hooks customizados.",
    },
    techs: ["React", "Vite", "Firebase Auth", "Firestore", "Context API", "CSS Modules"],
    thumbnail: p901,
    images: [p901, p902, p903],
    fullDescription: {
      en: "MiniBlog is a full-stack web application that lets users create, edit and manage blog posts with authentication. It was built with React on the frontend and Firebase for the backend services (authentication and database), focused on modern frontend architecture, reusable hooks and real-time data. Firestore operations are abstracted into custom hooks (such as useInsertDocument), and the global auth state is managed via the Context API.",
      pt: "MiniBlog é uma aplicação web full-stack que permite criar, editar e gerenciar posts de blog com autenticação. Foi construída com React no frontend e Firebase nos serviços de backend (autenticação e banco de dados), com foco em arquitetura frontend moderna, hooks reutilizáveis e dados em tempo real. As operações do Firestore são abstraídas em hooks customizados (como useInsertDocument), e o estado global de autenticação é gerenciado via Context API.",
    },
    problem: {
      en: "Building a complete application without maintaining your own backend means integrating a BaaS (Firebase) for authentication and database, abstracting CRUD operations in a reusable way and managing the global auth state consistently across pages.",
      pt: "Construir uma aplicação completa sem manter um backend próprio exige integrar um BaaS (Firebase) para autenticação e banco de dados, abstrair as operações de CRUD de forma reutilizável e gerenciar o estado global de autenticação de maneira consistente entre as páginas.",
    },
    solution: {
      en: "React + Vite on the frontend, with Firebase providing authentication (Firebase Auth) and a real-time database (Firestore) as a BaaS. Firestore operations are wrapped in reusable custom hooks, and the auth state is centralized in a Context API that controls the user session and the behavior of protected routes.",
      pt: "React + Vite no frontend, com o Firebase fornecendo autenticação (Firebase Auth) e banco em tempo real (Firestore) como BaaS. As operações do Firestore são encapsuladas em hooks customizados reutilizáveis, e o estado de autenticação é centralizado em um Context API que controla a sessão do usuário e o comportamento das rotas protegidas.",
    },
    decisions: {
      en: [
        "Firebase as a BaaS (Auth + Firestore) to get authentication and a real-time database without maintaining your own backend",
        "Custom hooks wrapping Firestore CRUD operations (e.g. useInsertDocument) to reuse the logic across pages",
        "Context API for the global auth state, controlling session and protected routes in a centralized way",
        "CSS Modules for component-scoped styles",
        "Component-based architecture with separation of concerns",
      ],
      pt: [
        "Firebase como BaaS (Auth + Firestore) para ter autenticação e banco em tempo real sem manter um backend próprio",
        "Hooks customizados encapsulando as operações de CRUD do Firestore (ex.: useInsertDocument) para reaproveitar a lógica entre páginas",
        "Context API para o estado global de autenticação, controlando sessão e rotas protegidas de forma centralizada",
        "CSS Modules para estilos com escopo por componente",
        "Arquitetura baseada em componentes com separação de responsabilidades",
      ],
    },
    challenges: {
      en: [
        "Abstracting Firestore operations into reusable hooks instead of repeating the CRUD logic on each page",
        "Centralizing the auth state with the Context API to control session and protected routes consistently",
        "Handling real-time Firestore data while keeping the UI in sync",
      ],
      pt: [
        "Abstrair as operações do Firestore em hooks reutilizáveis em vez de repetir a lógica de CRUD em cada página",
        "Centralizar o estado de autenticação com Context API para controlar sessão e rotas protegidas de forma consistente",
        "Lidar com dados em tempo real do Firestore mantendo a UI sincronizada",
      ],
    },
    improvements: {
      en: [
        "Likes / reactions on posts",
        "Comment system",
        "UI/UX improvements",
        "Pagination of posts",
        "Deploy (Firebase Hosting / Vercel)",
      ],
      pt: [
        "Curtidas / reações nos posts",
        "Sistema de comentários",
        "Melhorias de UI/UX",
        "Paginação dos posts",
        "Deploy (Firebase Hosting / Vercel)",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/miniblog",
    year: "2023",
    size: "md",
    accent: "purple",
  },
];

const resolveProject = (p: ProjectData, lang: Lang): Project => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle[lang],
  description: p.description[lang],
  techs: p.techs,
  thumbnail: p.thumbnail,
  images: p.images,
  fullDescription: p.fullDescription[lang],
  problem: p.problem[lang],
  solution: p.solution[lang],
  decisions: p.decisions[lang],
  challenges: p.challenges[lang],
  improvements: p.improvements[lang],
  github: p.github,
  demo: p.demo,
  year: p.year,
  size: p.size,
  accent: p.accent,
});

export const getProjects = (lang: Lang): Project[] =>
  projectsData.map((p) => resolveProject(p, lang));

export const getProjectById = (lang: Lang, id: string): Project | undefined => {
  const found = projectsData.find((p) => p.id === id);
  return found ? resolveProject(found, lang) : undefined;
};
