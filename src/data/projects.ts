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
    id: "finance-hub-web",
    title: "FinanceHub Web",
    subtitle: "Dashboard de finanças pessoais com Next.js 15",
    description:
      "Dashboard interativo para visualizar receitas, despesas, economias e tendências financeiras — construído com Next.js 15 App Router, Recharts e Radix UI.",
    techs: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Recharts", "Radix UI"],
    thumbnail: thumb1,
    images: [p101, p102, p103, p104, p105],
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
    size: "lg",
    accent: "purple",
  },
  {
    id: "finance-hub-api",
    title: "FinanceHub API",
    subtitle: "API REST para gestão de finanças pessoais",
    description:
      "API NestJS modular com autenticação JWT, controle de receitas e despesas, sistema de parcelamento, cofrinhos e motor de relatórios multi-tipo.",
    techs: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "JWT", "bcrypt"],
    thumbnail: thumb2,
    images: [p201],
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
    github: "https://github.com/Luan-Neumann-Dev/finance-hub-api-nestjs",
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
    thumbnail: thumb3,
    images: [ p301, p302, p303, p304 ],
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
  {
    id: "get-a-pet",
    title: "Get a Pet",
    subtitle: "Plataforma full-stack de adoção de pets",
    description:
      "Plataforma que conecta quem quer adotar a quem tem pets para adoção — cadastro de animais com múltiplas fotos, agendamento de visitas e o ciclo completo de adoção, com autenticação JWT e API REST protegida.",
    techs: ["React 18", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Multer"],
    thumbnail: p401,
    images: [p401, p402, p403],
    fullDescription:
      "Get a Pet é uma aplicação full-stack que conecta pessoas que querem adotar a pessoas com pets disponíveis para adoção. Os usuários se cadastram, criam anúncios dos seus animais com múltiplas fotos e gerenciam todo o ciclo de adoção — do agendamento de visitas até a conclusão. Toda rota que modifica dados é protegida por um middleware verifyToken no backend, e o frontend espelha essa verificação checando o estado de autenticação antes de renderizar páginas sensíveis, mantendo as duas camadas consistentes. O estado global de autenticação é compartilhado por toda a aplicação via Context API, enquanto um event bus desacoplado entrega as flash messages entre componentes sem prop drilling.",
    problem:
      "Ir além de um CRUD simples exige lidar com preocupações reais de uma aplicação completa: autenticação segura, rotas de API protegidas, upload de arquivos e um estado de autenticação global consistente entre todas as telas. Sem uma camada de autorização sólida, qualquer usuário autenticado poderia editar ou excluir anúncios que não são seus.",
    solution:
      "Arquitetura full-stack com React no frontend e Express + MongoDB no backend, conectados via Axios. A autenticação usa JWT enviado no header Authorization e validado por um middleware verifyToken que protege todas as operações de escrita. Cada controller de escrita resolve o usuário a partir do token e compara o _id dele com o do dono do recurso antes de permitir a operação. O upload de múltiplas imagens é tratado pelo Multer e servido como arquivos estáticos. No frontend, o Context API centraliza o estado de autenticação e um event bus baseado em EventEmitter entrega as flash messages.",
    decisions: [
      "Context API com um hook useAuth para compartilhar o estado de autenticação por toda a aplicação, eliminando prop drilling",
      "Event bus leve baseado em EventEmitter (useFlashMessage) para disparar flash messages de qualquer componente e exibi-las no topo da árvore, sem pais em comum",
      "Middleware verifyToken centralizando a autenticação em vez de repetir a verificação em cada controller",
      "Verificação de propriedade (ownership) em toda escrita: o _id do usuário do token é comparado ao do dono do recurso antes de qualquer update ou delete",
      "Denormalização deliberada no MongoDB — os dados do dono são embutidos no documento do pet para otimizar a leitura da listagem",
      "Funções helper isoladas (getToken, getUserByToken, createUserToken) para manter os controllers limpos",
    ],
    challenges: [
      "Compartilhar o estado de autenticação entre toda a aplicação e reagir em tempo real a login, logout e atualização de perfil — resolvido com um UserContext e o hook useAuth",
      "Exibir flash messages disparadas de dentro de um formulário em um componente de layout no topo da árvore, sem um pai em comum — resolvido com um event bus baseado em EventEmitter",
      "Garantir que apenas o dono de um pet possa editá-lo ou excluí-lo, independente do ID passado na URL — resolvido comparando o _id do token com o do recurso em toda escrita",
    ],
    improvements: [
      "Busca e filtro de pets por espécie, idade ou localização",
      "Chat em tempo real entre dono e possível adotante",
      "Notificações por e-mail quando uma visita é agendada",
      "Paginação na listagem de pets",
      "Migração para TypeScript no frontend e no backend",
      "Validação de entrada com Zod ou Joi na API",
    ],
    github: "https://github.com/Luan-Neumann-Dev/get-a-pet",
    year: "2024",
    size: "md",
    accent: "purple",
  },
  {
    id: "reactgram",
    title: "ReactGram",
    subtitle: "Rede social de fotos inspirada no Instagram",
    description:
      "Plataforma social full-stack inspirada no Instagram — upload de fotos, curtidas, comentários, busca e gestão de perfil, com autenticação JWT e estado assíncrono gerenciado por Redux Toolkit.",
    techs: ["React 18", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT", "Multer"],
    thumbnail: p501,
    images: [p501, p502, p503],
    fullDescription:
      "ReactGram é uma plataforma social full-stack de compartilhamento de fotos inspirada no Instagram. Os usuários se cadastram, fazem login, publicam fotos com título, curtem e comentam posts de outros usuários, editam o próprio perfil e fazem buscas — tudo através de uma API REST com autenticação baseada em token. O frontend gerencia o estado assíncrono complexo (loading, erro, sucesso) com Redux Toolkit via createAsyncThunk e extraReducers, enquanto o backend protege todas as rotas sensíveis com um middleware authGuard que valida o JWT.",
    problem:
      "Construir uma aplicação full-stack completa exige conectar autenticação, upload de arquivos e fluxo de dados através de uma arquitetura cliente-servidor real — do JWT no header da requisição até o estado protegido no navegador. Cada operação precisa ser validada também no servidor: curtidas duplicadas, edições por quem não é dono e uploads inválidos não podem depender só da UI.",
    solution:
      "API REST modular com Express e MongoDB (Mongoose), com autenticação via JWT enviado como Bearer token e validado pelo middleware authGuard em todas as rotas protegidas. O upload de imagens usa Multer com roteamento dinâmico de pastas (perfil x post) e validação de tipo. No frontend, cada slice do Redux Toolkit usa createAsyncThunk + extraReducers, com a lógica das chamadas isolada em uma camada de services para manter os slices limpos.",
    decisions: [
      "Redux Toolkit com createAsyncThunk e extraReducers por slice para gerenciar estados assíncronos (loading, erro, sucesso) de forma previsível",
      "Camada de services isolando as chamadas à API, mantendo os slices do Redux limpos e testáveis",
      "Middleware authGuard validando o JWT em todas as rotas protegidas, centralizando a autenticação",
      "Validação no servidor com express-validator como middleware antes do controller rodar",
      "Roteamento dinâmico de pastas no Multer inspecionando req.baseUrl para separar uploads de perfil e de post sem middleware extra",
      "Armazenamento apenas do token e do ID do usuário no localStorage — nunca senhas ou dados sensíveis",
    ],
    challenges: [
      "Proteger rotas no frontend sem repetir a verificação de autenticação em cada componente — resolvido com um hook useAuth que lê o estado do Redux e retorna {auth, loading}, usado para envolver cada rota protegida",
      "Direcionar uploads de imagem de perfil e de post para pastas diferentes, já que o Multer roda antes do controller — resolvido inspecionando req.baseUrl no destination do diskStorage",
      "Impedir curtidas duplicadas garantindo a regra no servidor — o controller verifica se o usuário já curtiu antes de adicionar, retornando 422 caso já tenha curtido",
    ],
    improvements: [
      "Sistema de seguir / deixar de seguir entre usuários",
      "Feed de notificações para curtidas e comentários",
      "Feed de fotos paginado",
      "Debounce na busca",
      "Deploy do backend no Railway e frontend na Vercel",
    ],
    github: "https://github.com/Luan-Neumann-Dev/reactgram",
    year: "2024",
    size: "md",
    accent: "magenta",
  },
  {
    id: "thoughts-app",
    title: "Thoughts App",
    subtitle: "App full-stack de pensamentos com SSR e Handlebars",
    description:
      "Aplicação full-stack para criar, gerenciar e compartilhar pensamentos pessoais, com autenticação por sessão, dashboard do usuário e renderização no servidor com Handlebars sobre arquitetura MVC.",
    techs: ["Node.js", "Express", "Handlebars", "Sequelize", "SQLite", "Express-session"],
    thumbnail: p601,
    images: [p601, p602, p603],
    fullDescription:
      "Thoughts App é uma aplicação web full-stack que permite aos usuários criar, gerenciar e compartilhar pensamentos pessoais de forma simples e intuitiva. Foi construída para praticar arquitetura de backend com Node.js e Express, com foco em estrutura MVC, autenticação e operações CRUD. As páginas são renderizadas no servidor com Handlebars, e cada usuário gerencia o próprio conteúdo de forma segura através de rotas protegidas por middleware de sessão.",
    problem:
      "Praticar arquitetura de backend de verdade exige ir além de telas isoladas: estruturar o código em camadas (MVC), proteger rotas para que só usuários autenticados gerenciem seu conteúdo e persistir dados com um ORM — tudo em uma aplicação renderizada no servidor.",
    solution:
      "Aplicação MVC com Express, onde models (Sequelize), controllers (lógica de negócio) e routes (endpoints) ficam bem separados. A autenticação usa express-session e um middleware checkAuth protege as rotas que exigem login. As views são renderizadas no servidor com Handlebars, e o Sequelize gerencia a persistência sobre SQLite.",
    decisions: [
      "Arquitetura MVC com separação clara entre models, controllers e routes",
      "Sequelize como ORM para modelar as entidades e relacionamentos sobre SQLite",
      "Renderização no servidor (SSR) com Handlebars para páginas dinâmicas",
      "Autenticação por sessão com express-session e middleware checkAuth protegendo as rotas privadas",
      "Funções helper isoladas para manter os controllers organizados",
    ],
    challenges: [
      "Estruturar a aplicação em camadas MVC mantendo controllers, models e rotas com responsabilidades bem separadas",
      "Proteger as rotas de gerenciamento de conteúdo para que apenas usuários autenticados acessem, via middleware de sessão",
      "Garantir que cada usuário só veja e gerencie os próprios pensamentos no dashboard",
    ],
    improvements: [
      "Curtidas ou reações nos pensamentos",
      "Sistema de comentários",
      "Melhorias de UI/UX",
      "Paginação dos pensamentos",
      "Deploy em produção (Render / Railway)",
    ],
    github: "https://github.com/Luan-Neumann-Dev/thoughts",
    year: "2023",
    size: "sm",
    accent: "purple",
  },
  {
    id: "movies-library",
    title: "Movies Library",
    subtitle: "Catálogo de filmes com a API do TMDB",
    description:
      "SPA em React que consome a API do TMDB para listar os filmes mais bem avaliados, buscar por título e ver detalhes como orçamento, receita e duração — com busca baseada na URL e rotas client-side.",
    techs: ["React 18", "React Router 6", "Vite", "TMDB API"],
    thumbnail: p701,
    images: [p701, p702, p703],
    fullDescription:
      "Movies Library é uma SPA em React que consome a API do TMDB para exibir um catálogo de filmes. Na home, o usuário vê os filmes mais bem avaliados buscados diretamente da API; a partir daí, pode pesquisar qualquer título pela navbar e navegar até uma página de detalhes com informações financeiras e editoriais de cada filme. O projeto cobre padrões reais de frontend: data fetching assíncrono com useEffect, roteamento client-side com React Router, parâmetros de busca na URL e gerenciamento da chave de API com variáveis de ambiente.",
    problem:
      "Consumir uma API externa em uma SPA exige lidar com requisições assíncronas, manter a busca compartilhável e navegável pelo histórico do navegador, reaproveitar componentes entre páginas diferentes e proteger a chave de API fora do código.",
    solution:
      "React com React Router 6 para roteamento e layout compartilhado (Outlet). A busca usa useSearchParams, guardando a query na URL para resultados compartilháveis e amigáveis ao histórico. Um componente MovieCard reutilizável serve home, busca e detalhe, controlado por uma prop showLink. A chave da API fica em variáveis de ambiente acessadas via import.meta.env do Vite.",
    decisions: [
      "Busca baseada na URL com useSearchParams, tornando os resultados compartilháveis e amigáveis ao histórico do navegador",
      "Componente MovieCard reutilizável entre home, busca e detalhe, com uma prop showLink controlando a renderização do link",
      "Layout compartilhado com o Outlet do React Router para manter a Navbar persistente entre as páginas",
      "Chave de API gerenciada por variáveis de ambiente via import.meta.env do Vite, fora do código versionado",
      "Lógica de data fetching mantida próxima ao componente que detém o estado",
    ],
    challenges: [
      "Manter a busca compartilhável e navegável pelo histórico — resolvido guardando a query na URL com useSearchParams e reagindo a ela no useEffect",
      "Reaproveitar o mesmo card de filme em home, busca e detalhe sem duplicação — resolvido com a prop showLink controlando a renderização condicional do link",
      "Proteger a chave da API fora do código — resolvido com variáveis de ambiente do Vite (import.meta.env)",
    ],
    improvements: [
      "Lista de favoritos com persistência em localStorage",
      "Paginação na home e nos resultados de busca",
      "Filtro por gênero na home",
      "Loading skeleton no lugar de texto simples",
      "Migração para TypeScript",
    ],
    github: "https://github.com/Luan-Neumann-Dev/movies-library",
    demo: "https://movies-library-smoky-nine.vercel.app/",
    year: "2024",
    size: "md",
    accent: "cyan",
  },
  {
    id: "github-finder",
    title: "GitHub Finder",
    subtitle: "Busca de perfis do GitHub com React + TypeScript",
    description:
      "SPA em React + TypeScript que busca qualquer perfil do GitHub pela API pública e mostra, em tempo real, os dados do usuário e seus 5 repositórios mais estrelados.",
    techs: ["React 18", "TypeScript", "React Router 6", "Vite", "GitHub API", "CSS Modules"],
    thumbnail: p801,
    images: [p801, p802, p803],
    fullDescription:
      "GitHub Finder é uma SPA em React que permite buscar qualquer usuário do GitHub pelo username e ver na hora os dados do seu perfil público — avatar, localização, seguidores e seguindo. A partir do perfil, é possível navegar até os 5 repositórios mais estrelados do usuário, todos buscados em tempo real na API pública do GitHub. O projeto foi construído para praticar a integração de uma API REST real com React, aplicando TypeScript para garantir segurança de tipos entre componentes e fluxos de dados.",
    problem:
      "Integrar uma API externa real em uma SPA exige lidar com requisições assíncronas, tratar diferentes status de resposta (200, 404), gerenciar estados de UI (carregando, erro, dados) e tipar as respostas para evitar erros de integração em tempo de execução.",
    solution:
      "React com TypeScript, onde as respostas da API são consumidas via fetch nativo e tipadas com interfaces customizadas, tornando o tratamento de dados previsível em todos os componentes. Os estados de UI são gerenciados explicitamente com flags de useState separadas, e a lógica de data fetching fica nas páginas (routes), separada dos componentes de apresentação. Os repositórios são ordenados por estrelas no cliente e fatiados nos 5 primeiros, evitando chamadas extras à API.",
    decisions: [
      "TypeScript com interfaces customizadas para tipar respostas da API e props dos componentes de ponta a ponta, capturando erros de integração em tempo de compilação",
      "Ordenação dos repositórios por estrelas no cliente (sort + slice nos top 5) em vez de query params, mantendo a implementação simples e sem chamadas extras",
      "Lógica de data fetching nas páginas (routes), separada dos componentes puramente apresentacionais",
      "Estados de UI (loading, erro, dados) gerenciados explicitamente com flags de useState separadas",
      "CSS Modules para estilos com escopo por componente, evitando conflitos de nomes",
    ],
    challenges: [
      "Tratar diferentes status da API do GitHub (perfil encontrado x 404) exibindo uma tela de erro amigável quando o usuário não existe",
      "Tipar respostas da API e props de ponta a ponta com TypeScript para capturar erros de integração antes da execução",
      "Mostrar os 5 repositórios mais estrelados sem chamadas extras — resolvido ordenando e fatiando os dados no cliente",
    ],
    improvements: [
      "Paginação dos repositórios em vez de limitar aos 5 primeiros",
      "Exibir detalhes do repositório: linguagem, última atualização e descrição",
      "Toggle de tema claro/escuro",
      "Cache das buscas recentes para reduzir chamadas repetidas à API",
    ],
    github: "https://github.com/Luan-Neumann-Dev/github-finder",
    demo: "https://github-finder-lemon-eight.vercel.app/",
    year: "2024",
    size: "md",
    accent: "magenta",
  },
  {
    id: "miniblog",
    title: "MiniBlog",
    subtitle: "Blog full-stack com React e Firebase",
    description:
      "Blog full-stack com React e Firebase — autenticação, CRUD de posts em tempo real com Firestore, busca por palavras-chave e dashboard do usuário, com a lógica abstraída em hooks customizados.",
    techs: ["React", "Vite", "Firebase Auth", "Firestore", "Context API", "CSS Modules"],
    thumbnail: p901,
    images: [p901, p902, p903],
    fullDescription:
      "MiniBlog é uma aplicação web full-stack que permite criar, editar e gerenciar posts de blog com autenticação. Foi construída com React no frontend e Firebase nos serviços de backend (autenticação e banco de dados), com foco em arquitetura frontend moderna, hooks reutilizáveis e dados em tempo real. As operações do Firestore são abstraídas em hooks customizados (como useInsertDocument), e o estado global de autenticação é gerenciado via Context API.",
    problem:
      "Construir uma aplicação completa sem manter um backend próprio exige integrar um BaaS (Firebase) para autenticação e banco de dados, abstrair as operações de CRUD de forma reutilizável e gerenciar o estado global de autenticação de maneira consistente entre as páginas.",
    solution:
      "React + Vite no frontend, com o Firebase fornecendo autenticação (Firebase Auth) e banco em tempo real (Firestore) como BaaS. As operações do Firestore são encapsuladas em hooks customizados reutilizáveis, e o estado de autenticação é centralizado em um Context API que controla a sessão do usuário e o comportamento das rotas protegidas.",
    decisions: [
      "Firebase como BaaS (Auth + Firestore) para ter autenticação e banco em tempo real sem manter um backend próprio",
      "Hooks customizados encapsulando as operações de CRUD do Firestore (ex.: useInsertDocument) para reaproveitar a lógica entre páginas",
      "Context API para o estado global de autenticação, controlando sessão e rotas protegidas de forma centralizada",
      "CSS Modules para estilos com escopo por componente",
      "Arquitetura baseada em componentes com separação de responsabilidades",
    ],
    challenges: [
      "Abstrair as operações do Firestore em hooks reutilizáveis em vez de repetir a lógica de CRUD em cada página",
      "Centralizar o estado de autenticação com Context API para controlar sessão e rotas protegidas de forma consistente",
      "Lidar com dados em tempo real do Firestore mantendo a UI sincronizada",
    ],
    improvements: [
      "Curtidas / reações nos posts",
      "Sistema de comentários",
      "Melhorias de UI/UX",
      "Paginação dos posts",
      "Deploy (Firebase Hosting / Vercel)",
    ],
    github: "https://github.com/Luan-Neumann-Dev/miniblog",
    year: "2023",
    size: "md",
    accent: "purple",
  },
];

export const getProjectById = (id: string) => projects.find((p) => p.id === id);