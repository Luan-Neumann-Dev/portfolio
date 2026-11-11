import type { Lang } from "@/i18n/LanguageContext";

import ln01 from "@/assets/projects/ln-01.webp";
import ln02 from "@/assets/projects/ln-02.webp";

import cf01 from "@/assets/projects/cf-01.webp";
import cf02 from "@/assets/projects/cf-02.webp";
import cf03 from "@/assets/projects/cf-03.webp";
import cf04 from "@/assets/projects/cf-04.webp";

import ch01 from "@/assets/projects/ch-01.webp";

import thumb3 from "@/assets/thumb3.png";
import p301 from "@/assets/p3-01.png";
import p302 from "@/assets/p3-02.png";
import p303 from "@/assets/p3-03.png";
import p304 from "@/assets/p3-04.png";

import habitCover from "@/assets/projects/habit-cover.svg";
import habitArchitecture from "@/assets/projects/habit-architecture.svg";

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
    id: "ln-veiculos",
    title: "LN Veículos",
    subtitle: {
      en: "Vehicle showcase on Cloudflare's free tier, used by real sellers",
      pt: "Vitrine de veículos na camada gratuita da Cloudflare, usada por vendedores reais",
    },
    description: {
      en: "A storefront I built to sell my own vehicles — then friends started listing theirs too. Next.js 16 on Cloudflare Workers with D1, R2 and edge rate limiting, at R$ 0/month in infrastructure.",
      pt: "Uma vitrine que construí para vender os meus veículos — e depois os amigos começaram a anunciar os deles também. Next.js 16 na Cloudflare Workers com D1, R2 e rate limiting na borda, com custo de infraestrutura de R$ 0 por mês.",
    },
    techs: ["Next.js 16", "React 19", "TypeScript", "Cloudflare Workers", "D1", "R2", "Drizzle ORM"],
    thumbnail: ln01,
    images: [ln01, ln02],
    fullDescription: {
      en: "LN Veículos is a used-vehicle catalog that runs entirely inside a single Cloudflare Worker. Every listing is its own crawlable page with schema.org structured data, so Google shows the car with its price and year. Buyers filter by brand, price, year, transmission and fuel instantly, and every call to action opens WhatsApp with the vehicle already in the message — that is where the sale actually closes. The seller manages everything from a phone through a password-protected admin panel: drag the photos in, reorder them and the listing is live. It started as a way to sell my own vehicles; friends asking to list theirs is what turned it into a tool other people depend on.",
      pt: "LN Veículos é um catálogo de veículos seminovos que roda inteiro dentro de um único Worker da Cloudflare. Cada anúncio é uma página própria, indexável e com dados estruturados schema.org, então o Google mostra o carro com preço e ano. O comprador filtra por marca, preço, ano, câmbio e combustível na hora, e todo botão de contato abre o WhatsApp com o veículo já na mensagem — é lá que a venda fecha de verdade. O vendedor gerencia tudo pelo celular, num painel administrativo protegido por senha: arrasta as fotos, reordena e o anúncio está no ar. Começou como um jeito de vender os meus veículos; os amigos pedindo para anunciar os deles foi o que transformou em uma ferramenta da qual outras pessoas dependem.",
    },
    problem: {
      en: "Around here, vehicles are sold through WhatsApp and Instagram: the car lives in a photo album and the price in a caption, and none of it shows up on Google. I also set a hard constraint: the whole thing had to fit Cloudflare's free tier, even when a scraper finds it at 3 a.m. On an edge runtime there is no filesystem, no long-lived process and only 10 ms of CPU per request, so several Next.js defaults (image optimizer, Node middleware, signed uploads) simply don't apply.",
      pt: "Por aqui, veículo se vende pelo WhatsApp e pelo Instagram: o carro mora num álbum de fotos e o preço numa legenda, e nada disso aparece no Google. Também impus uma restrição dura: tudo tinha que caber na camada gratuita da Cloudflare, mesmo quando um robô encontrar o site às 3 da manhã. Num runtime de borda não há sistema de arquivos, nem processo de longa duração, e só 10 ms de CPU por requisição, então vários padrões do Next.js (otimizador de imagens, middleware em Node, uploads assinados) simplesmente não se aplicam.",
    },
    solution: {
      en: "Server components render the catalog so the first paint already contains the cars, and server actions handle every write. D1 (SQLite at the edge) stores the catalog through Drizzle, and R2 stores the photos through a Worker binding, with no credentials in the app. Photos are resized and converted to WebP in the browser before upload, filters run client-side while the URL stays shareable, and a per-IP rate limiter in the middleware returns 429 before any database query or render happens.",
      pt: "Server components renderizam o catálogo, então a primeira pintura já traz os carros, e server actions cuidam de toda escrita. O D1 (SQLite na borda) guarda o catálogo via Drizzle, e o R2 guarda as fotos via binding do Worker, sem credenciais na aplicação. As fotos são redimensionadas e convertidas para WebP no navegador antes do upload, os filtros rodam no cliente mantendo a URL compartilhável, e um rate limiter por IP no middleware devolve 429 antes de qualquer consulta ao banco ou renderização.",
    },
    decisions: {
      en: [
        "Cloudflare Workers + D1 + R2 instead of a VPS: no origin server, no connection pool, and R$ 0/month — the domain is the only real cost",
        "Client-side image pipeline: a 3.8 MB phone photo leaves the device as ~13 KB + ~4 KB WebP, since the next/image optimizer doesn't run on Workers",
        "Filters applied in the browser with zero requests per click, while the filter state is mirrored in the URL so every view is shareable and server-renderable",
        "One schema for cars and motorcycles: the listing's kind drives which fields the editor shows and which filters exist",
        "JWT session in an HttpOnly cookie signed with jose (Web Crypto), and a build-time guard that fails the deploy if a secret ever lands in a .env file",
      ],
      pt: [
        "Cloudflare Workers + D1 + R2 no lugar de uma VPS: sem servidor de origem, sem pool de conexões e R$ 0 por mês — o domínio é o único custo real",
        "Pipeline de imagens no cliente: uma foto de 3,8 MB do celular sai como ~13 KB + ~4 KB em WebP, já que o otimizador do next/image não roda em Workers",
        "Filtros aplicados no navegador, com zero requisições por clique, e o estado espelhado na URL para cada visão ser compartilhável e renderizável no servidor",
        "Um schema único para carros e motos: o tipo do anúncio define quais campos o editor mostra e quais filtros existem",
        "Sessão JWT em cookie HttpOnly assinada com jose (Web Crypto), e uma checagem no build que barra o deploy se um segredo aparecer num arquivo .env",
      ],
    },
    challenges: {
      en: [
        "Serving photos fast for free — solved with two WebP variants generated in the browser and edge caching, so repeated views cost about one R2 read regardless of traffic",
        "Stopping scrapers within 10 ms of CPU — solved with Cloudflare rate limiting bindings in the middleware, rejecting floods before D1, R2 or React are touched",
        "Making each car findable on Google — solved with one slug URL per listing, schema.org Car/Motorcycle data with offer and mileage, and a generated sitemap",
      ],
      pt: [
        "Servir fotos rápido e de graça — resolvido com duas variantes WebP geradas no navegador e cache na borda, então visualizações repetidas custam cerca de uma leitura no R2, seja qual for o tráfego",
        "Barrar robôs com 10 ms de CPU — resolvido com os bindings de rate limiting da Cloudflare no middleware, rejeitando a enxurrada antes de tocar no D1, no R2 ou no React",
        "Fazer cada carro ser encontrado no Google — resolvido com uma URL por anúncio, dados schema.org Car/Motorcycle com oferta e quilometragem, e um sitemap gerado",
      ],
    },
    improvements: {
      en: [
        "Multiple sellers with their own accounts and listings",
        "View and contact-click metrics per listing",
        "Automated end-to-end tests for the admin flow",
        "Price-drop alerts for interested buyers",
      ],
      pt: [
        "Vários vendedores, cada um com sua conta e seus anúncios",
        "Métricas de visualização e de cliques no contato por anúncio",
        "Testes end-to-end automatizados para o fluxo do painel",
        "Alerta de redução de preço para compradores interessados",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/vitrine-car-app",
    demo: "https://vitrine-carros.lnneumann.workers.dev/",
    year: "2026",
    size: "lg",
    accent: "cyan",
  },
  {
    id: "cifrao",
    title: "Cifrão",
    subtitle: {
      en: "Personal finance app that models credit cards the way banks do",
      pt: "App de finanças pessoais que trata cartão de crédito como o banco trata",
    },
    description: {
      en: "Third iteration of my FinanceHub line: a Next.js 15 + NestJS 11 monorepo with real credit card invoices, installments, statement import, investments and 2FA — backed by 300+ automated tests.",
      pt: "Terceira versão da minha linha FinanceHub: um monorepo Next.js 15 + NestJS 11 com faturas de cartão reais, parcelamentos, importação de extrato, investimentos e 2FA — com mais de 300 testes automatizados.",
    },
    techs: ["Next.js 15", "NestJS 11", "TypeScript", "PostgreSQL", "Prisma", "Turborepo", "Vitest"],
    thumbnail: cf01,
    images: [cf01, cf02, cf03, cf04],
    fullDescription: {
      en: "Cifrão is a full-stack personal finance app: bank accounts, credit cards with real invoices, installments, budgets, goals, bank statement import, reports and an investment portfolio. It is the third iteration of a project I keep rebuilding as I grow: FinanceHub v1 (a NestJS API and a Next.js dashboard), FinanceHub v2 (NestJS 11, Prisma 7, Next.js 16 with Server Actions) and now Cifrão, redesigned from scratch with better-thought-out domain rules. It started from a written spec with numbered domain rules and was built in 10 phases, each closed only when lint, typecheck, tests and build were green. A demo build runs entirely in the browser from recorded API responses, so recruiters can click around without signing up.",
      pt: "Cifrão é um app full-stack de finanças pessoais: contas bancárias, cartões de crédito com faturas reais, parcelamentos, orçamentos, metas, importação de extrato, relatórios e carteira de investimentos. É a terceira versão de um projeto que eu reconstruo à medida que evoluo: FinanceHub v1 (uma API em NestJS e um dashboard em Next.js), FinanceHub v2 (NestJS 11, Prisma 7, Next.js 16 com Server Actions) e agora o Cifrão, redesenhado do zero com regras de domínio melhor pensadas. Começou de uma especificação escrita com regras de domínio numeradas e foi construído em 10 fases, cada uma fechada só com lint, typecheck, testes e build verdes. Uma versão demo roda inteira no navegador a partir de respostas reais gravadas da API, então dá para navegar sem criar conta.",
    },
    problem: {
      en: "Most finance apps record a credit card purchase as an expense on the day it happens. That is not how money works in Brazil: a purchase lands on the invoice that closes next, installments spread across future invoices, and paying the invoice moves money from your bank account to the card. Treating that payment as a new expense counts every purchase twice — and the balance you see is never what you can actually spend.",
      pt: "A maioria dos apps de finanças registra a compra no cartão como despesa no dia em que acontece. Não é assim que o dinheiro funciona no Brasil: a compra cai na fatura que fecha em seguida, as parcelas se espalham pelas próximas faturas, e pagar a fatura move dinheiro da conta para o cartão. Tratar esse pagamento como uma nova despesa conta cada compra duas vezes — e o saldo que você vê nunca é o que você pode gastar de verdade.",
    },
    solution: {
      en: "The invoice is a first-class entity: each purchase is routed to the right invoice by closing day, installments become one child transaction per consecutive invoice, and paying an invoice is a transfer that never counts as income or expense. The dashboard shows a \"truly available\" balance — limit minus open invoice, unpaid closed invoices and future installments. Domain rules live as pure TypeScript functions in a shared package, tested without a database and used by both the Next.js app and the NestJS API.",
      pt: "A fatura é uma entidade de primeira classe: cada compra vai para a fatura certa pelo dia de fechamento, as parcelas viram uma transação filha por fatura consecutiva, e pagar a fatura é uma transferência que nunca conta como receita ou despesa. O dashboard mostra o saldo \"disponível de verdade\" — limite menos fatura aberta, faturas fechadas não pagas e parcelas futuras. As regras de domínio são funções puras em TypeScript num pacote compartilhado, testadas sem banco e usadas tanto pelo app em Next.js quanto pela API em NestJS.",
    },
    decisions: {
      en: [
        "Money is always an integer number of cents (BigInt), never a float — installment remainders go to the first parts so they always add up to the total",
        "Monorepo with pnpm workspaces + Turborepo, sharing Zod schemas and pure domain logic between web and API",
        "Only the web app is exposed: the API is reached through an internal /api rewrite, with no open CORS; Better Auth issues the JWT and the API validates it locally against the JWKS",
        "Background jobs on pg-boss, a queue that lives inside Postgres, instead of adding Redis",
        "Balances maintained inside each write transaction, so reading a balance is O(1) and the dashboard answers in ~20 ms over 5,000 transactions",
      ],
      pt: [
        "Dinheiro é sempre um número inteiro de centavos (BigInt), nunca float — o resto das parcelas vai para as primeiras, então elas sempre somam o total",
        "Monorepo com pnpm workspaces + Turborepo, compartilhando schemas Zod e lógica de domínio pura entre web e API",
        "Só o app web fica exposto: a API é acessada por um rewrite interno /api, sem CORS aberto; o Better Auth emite o JWT e a API valida localmente contra o JWKS",
        "Jobs em segundo plano com pg-boss, uma fila que vive dentro do Postgres, em vez de adicionar Redis",
        "Saldos mantidos dentro de cada transação de escrita, então ler um saldo é O(1) e o dashboard responde em ~20 ms com 5.000 transações",
      ],
    },
    challenges: {
      en: [
        "Routing purchases to the right invoice — closing day 31 in February, purchases on the closing day, due dates in the next month — solved with a pure function over calendar parts in the São Paulo time zone, proven by tests",
        "Importing OFX, CSV and QIF statements without duplicates — solved with content-based format detection, FITID matching or date ±3 days + amount + trigram similarity, and a staging area where nothing is written before you confirm",
        "Proving users can't touch each other's data — solved with an end-to-end suite that creates two users and checks isolation on every endpoint",
      ],
      pt: [
        "Encaminhar compras para a fatura certa — fechamento no dia 31 em fevereiro, compras no dia do fechamento, vencimento no mês seguinte — resolvido com uma função pura sobre partes do calendário no fuso de São Paulo, comprovada por testes",
        "Importar extratos OFX, CSV e QIF sem duplicar — resolvido com detecção de formato pelo conteúdo, casamento por FITID ou data ±3 dias + valor + similaridade por trigramas, e uma área de revisão onde nada é gravado antes da confirmação",
        "Provar que um usuário não acessa os dados de outro — resolvido com uma suíte end-to-end que cria dois usuários e verifica o isolamento em todos os endpoints",
      ],
    },
    improvements: {
      en: [
        "Open Finance integration to sync accounts automatically",
        "Shared household budgets with more than one user",
        "Native mobile app reusing the shared domain package",
      ],
      pt: [
        "Integração com Open Finance para sincronizar as contas automaticamente",
        "Orçamento compartilhado da casa, com mais de um usuário",
        "App mobile nativo reaproveitando o pacote de domínio compartilhado",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/cifrao",
    demo: "https://cifrao-beryl.vercel.app",
    year: "2026",
    size: "lg",
    accent: "purple",
  },
  {
    id: "curious-hat",
    title: "Curious Hat",
    subtitle: {
      en: "Social network with anonymity enforced by the database",
      pt: "Rede social com anonimato garantido pelo banco de dados",
    },
    description: {
      en: "Each post is signed or anonymous; anonymous posts self-destruct after 24 hours. Communities and real-time chat, with privacy rules in PostgreSQL Row Level Security rather than the UI. React 19, TypeScript and Supabase.",
      pt: "Cada post é assinado ou anônimo; os anônimos se autodestroem em 24 horas. Comunidades e chat em tempo real, com as regras de privacidade no Row Level Security do PostgreSQL e não na interface. React 19, TypeScript e Supabase.",
    },
    techs: ["React 19", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "Tailwind CSS 4"],
    thumbnail: ch01,
    images: [ch01],
    fullDescription: {
      en: "Curious Hat is a social network built around one decision: for each post, called a hat, you choose whether it carries your name or an anonymous codename. Signed hats stay on your profile; anonymous hats disappear after 24 hours, with a live countdown the author can extend. Users follow each other, join communities, like and reply to hats, and talk in direct, anonymous and community chats delivered in real time. It started as a university assignment (multiple screens, validation, a consumed REST API, WCAG AA accessibility and a production deploy) and grew into a chance to design real authorization rules.",
      pt: "Curious Hat é uma rede social construída em torno de uma decisão: em cada post, chamado de hat, você escolhe se ele leva o seu nome ou um codinome anônimo. Hats assinados ficam no seu perfil; os anônimos somem depois de 24 horas, com uma contagem regressiva que o autor pode estender. Os usuários se seguem, entram em comunidades, curtem e respondem hats e conversam em chats diretos, anônimos e de comunidade entregues em tempo real. Começou como um trabalho da faculdade (várias telas, validação, consumo de API REST, acessibilidade WCAG AA e deploy em produção) e virou uma chance de projetar regras de autorização de verdade.",
    },
    problem: {
      en: "Anonymity is only worth something if it survives a curious user with the browser's network tab open. If the API returns the author's ID, hiding it in the UI is useless. Real-time chat makes it harder: Realtime broadcasts database rows, and a user_id on each message would reveal who is behind an anonymous conversation. And administrators still need to moderate content without seeing who wrote it.",
      pt: "Anonimato só vale alguma coisa se resiste a um usuário curioso com a aba de rede do navegador aberta. Se a API devolve o ID do autor, esconder na interface não adianta nada. O chat em tempo real piora: o Realtime transmite linhas do banco, e um user_id em cada mensagem revelaria quem está por trás de uma conversa anônima. E os administradores ainda precisam moderar o conteúdo sem ver quem escreveu.",
    },
    solution: {
      en: "The rules live in PostgreSQL instead of the front end. Base tables can only be read by the post's own author; everyone else reads views that blank out identifying columns whenever a hat is anonymous. Messages point to a conversation participant instead of a person, so broadcast rows carry nothing that identifies the sender. Moderation goes through security-definer functions that check permission and return only what the admin needs.",
      pt: "As regras ficam no PostgreSQL, e não no front-end. As tabelas base só podem ser lidas pelo próprio autor do post; todos os outros leem views que apagam as colunas de identificação quando o hat é anônimo. As mensagens apontam para um participante da conversa em vez de uma pessoa, então as linhas transmitidas não carregam nada que identifique quem enviou. A moderação passa por funções security definer que verificam a permissão e devolvem só o que o administrador precisa.",
    },
    decisions: {
      en: [
        "Row Level Security on every table plus column-level write permissions, so authorization holds for every request regardless of the client",
        "Public views that return null for author columns on anonymous hats and filter out expired hats — no cleanup job needed",
        "Messages linked to conversation members through a composite foreign key, which also guarantees the sender belongs to the conversation",
        "A service layer that turns Supabase errors into clear messages in Portuguese, keeping components free of API details",
        "Optimistic likes that fall back to the server's count, and images compressed in the browser before upload",
      ],
      pt: [
        "Row Level Security em todas as tabelas, mais permissões de escrita por coluna, para a autorização valer em toda requisição independente do cliente",
        "Views públicas que devolvem null nas colunas de autor de hats anônimos e filtram os hats expirados — sem precisar de rotina de limpeza",
        "Mensagens ligadas a participantes da conversa por uma chave estrangeira composta, que também garante que quem envia pertence à conversa",
        "Uma camada de services que transforma erros do Supabase em mensagens claras em português, mantendo os componentes livres de detalhes da API",
        "Curtidas otimistas que voltam ao número do servidor em caso de falha, e imagens comprimidas no navegador antes do upload",
      ],
    },
    challenges: {
      en: [
        "Anonymity that survives the network tab — solved with views that strip the author from anonymous content before it leaves the database",
        "Real-time chat without leaking identities — solved by broadcasting participant IDs instead of user IDs",
        "Moderation without seeing authors — solved with permission-checked database functions instead of giving admins read access",
      ],
      pt: [
        "Anonimato que resiste à aba de rede — resolvido com views que removem o autor do conteúdo anônimo antes de ele sair do banco",
        "Chat em tempo real sem vazar identidades — resolvido transmitindo IDs de participante em vez de IDs de usuário",
        "Moderação sem ver autores — resolvida com funções no banco que verificam a permissão, em vez de dar acesso de leitura aos administradores",
      ],
    },
    improvements: {
      en: [
        "Push notifications for replies and messages",
        "Reporting flow so users can flag abusive hats",
        "Automated tests for the RLS policies",
      ],
      pt: [
        "Notificações push para respostas e mensagens",
        "Fluxo de denúncia para os usuários sinalizarem hats abusivos",
        "Testes automatizados para as políticas de RLS",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/curious-hat-app",
    demo: "https://curious-hat-app-nu.vercel.app",
    year: "2026",
    size: "md",
    accent: "magenta",
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
    github: "https://github.com/Luan-Neumann-Dev/email-blast-app",
    year: "2025",
    size: "md",
    accent: "magenta",
  },
  {
    id: "habit-tracker-api",
    title: "Habit Tracker API",
    subtitle: {
      en: "Laravel 12 REST API with Sanctum, policies and a weekly e-mail report",
      pt: "API REST em Laravel 12 com Sanctum, policies e relatório semanal por e-mail",
    },
    description: {
      en: "Habit tracking API built to practice the parts of Laravel beyond CRUD: Sanctum token auth, ownership policies, nested resources by UUID, API Resources and a scheduled command that e-mails a weekly progress grid.",
      pt: "API de hábitos construída para praticar o Laravel além do CRUD: autenticação por token com Sanctum, policies de propriedade, recursos aninhados por UUID, API Resources e um comando agendado que envia por e-mail a grade semanal de progresso.",
    },
    techs: ["Laravel 12", "PHP 8.2", "Sanctum", "Eloquent", "SQLite", "Rector · Pint"],
    thumbnail: habitCover,
    images: [habitArchitecture],
    fullDescription: {
      en: "Habit Tracker API is a backend for tracking personal habits. A user registers, creates the habits they want to build and checks in on each day they complete one. Once a week, a scheduled Artisan command e-mails every user a Monday-to-Sunday table showing which habits were done on each day. Records are exposed by UUID instead of auto-increment IDs, relations are loaded only when the client asks for them, and checking in twice on the same date updates the existing log instead of duplicating it.",
      pt: "Habit Tracker API é um backend para acompanhar hábitos pessoais. O usuário se cadastra, cria os hábitos que quer construir e marca cada dia em que cumpriu um deles. Uma vez por semana, um comando Artisan agendado envia a cada usuário uma tabela de segunda a domingo mostrando quais hábitos foram feitos em cada dia. Os registros são expostos por UUID em vez de IDs sequenciais, as relações só são carregadas quando o cliente pede, e marcar duas vezes a mesma data atualiza o registro existente em vez de duplicar.",
    },
    problem: {
      en: "A weekly report needs a row for every day of the week, including the days with no check-in, and an API with nested resources (habits/{habit}/logs/{log}) has to make sure a user can never reach someone else's records through the URL.",
      pt: "Um relatório semanal precisa de uma linha para cada dia da semana, inclusive os dias sem registro, e uma API com recursos aninhados (habits/{habit}/logs/{log}) precisa garantir que um usuário nunca alcance os registros de outro pela URL.",
    },
    solution: {
      en: "A recursive CTE generates the seven dates and a LEFT JOIN against habit_logs marks each habit as done or missed; a Markdown notification renders it as a ✓/✗ grid. Ownership is enforced by a HabitPolicy attached as controller middleware, and nested routes use scoped bindings resolved by UUID.",
      pt: "Uma CTE recursiva gera as sete datas e um LEFT JOIN com habit_logs marca cada hábito como feito ou não; uma notificação em Markdown monta a grade ✓/✗. A propriedade é garantida por uma HabitPolicy aplicada como middleware do controller, e as rotas aninhadas usam scoped bindings resolvidos por UUID.",
    },
    decisions: {
      en: [
        "Sanctum personal access tokens, revoking the user's previous tokens on each login",
        "HabitPolicy declared as controller middleware (can:own,habit), so the ownership rule lives in one place",
        "Reusable HasUuid trait to expose UUIDs publicly instead of sequential IDs",
        "Validation in Form Requests and JSON shaped by API Resources with conditional relations (?with=logs,user)",
        "Strict types enforced with Pint and Rector",
      ],
      pt: [
        "Tokens de acesso pessoal do Sanctum, revogando os tokens anteriores do usuário a cada login",
        "HabitPolicy declarada como middleware do controller (can:own,habit), para a regra de propriedade ficar em um lugar só",
        "Trait HasUuid reutilizável para expor UUIDs em vez de IDs sequenciais",
        "Validação em Form Requests e JSON montado por API Resources com relações condicionais (?with=logs,user)",
        "Tipagem estrita garantida com Pint e Rector",
      ],
    },
    challenges: {
      en: [
        "Building a full weekly grid including empty days — solved with a recursive CTE cross-joined with habits and left-joined with logs",
        "Keeping nested routes safe — solved with scoped route binding by UUID plus the ownership policy",
      ],
      pt: [
        "Montar a grade semanal completa, incluindo dias vazios — resolvido com uma CTE recursiva em cross join com os hábitos e left join com os registros",
        "Manter as rotas aninhadas seguras — resolvido com scoped route binding por UUID mais a policy de propriedade",
      ],
    },
    improvements: {
      en: [
        "Feature tests for authentication, habits and logs",
        "Database-agnostic report query (MySQL / PostgreSQL)",
        "Streaks and completion rate per habit",
      ],
      pt: [
        "Testes de feature para autenticação, hábitos e registros",
        "Consulta do relatório independente de banco (MySQL / PostgreSQL)",
        "Sequências e taxa de conclusão por hábito",
      ],
    },
    github: "https://github.com/Luan-Neumann-Dev/habit-tracker-api",
    year: "2026",
    size: "sm",
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
