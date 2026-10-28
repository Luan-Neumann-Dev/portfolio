# Portfolio — Luan Henrique Neumann

> Bilingual personal portfolio (EN/PT) built with React 19, TypeScript and Vite — project case studies, experience timeline and a filterable certificate ledger, all driven by typed data files.

![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<!-- TODO: add a screenshot of the home page at docs/preview.png -->
![Portfolio home page](docs/preview.png)

**[🚀 View Live Site](https://luan-neumann-dev-portfolio.vercel.app/)**

---

## 🎯 About

This is my personal portfolio: a single-page site that presents who I am, the
stack I work with, the projects I have built, where I have worked and what I have
studied.

It is written for two audiences at once. Recruiters abroad read it in English, the
default, while people closer to home can switch to Portuguese with one click. Every
piece of content — profile, experience, education, certificates and each project's
case study — exists in both languages and lives in typed data files, so adding a
project or a certificate never means touching a component.

Each project has its own page that goes beyond a screenshot: the problem it solves,
the solution, the technical decisions, the challenges and what I would improve next.

## ✨ Key Features

- 🌐 **English / Portuguese toggle** - English by default; the choice is saved in `localStorage` and updates `<html lang>` and the page title
- 🎞️ **Project carousel** - horizontal, scroll-snapping rail with arrow controls that enable and disable based on scroll position
- 📄 **Project case studies** - a page per project (`/projeto/:id`) with gallery, problem, solution, decisions, challenges, improvements, and links to code and demo
- 🎓 **Certificate ledger** - compact list filterable by issuer (Rocketseat, Udemy…), with a hover preview of each certificate and course hours
- 🧭 **Experience & education** - timeline of companies and academic background
- ✨ **Motion that respects the user** - Framer Motion animations; the certificate list honors the system's reduced-motion setting

## 🛠️ Tech Stack

**Frontend:**
- React 19 - UI and component model
- TypeScript - typed content model (`Localized<T>`) shared by every section
- React Router 7 - home and project detail routes, plus a 404 page
- Tailwind CSS 3 + `class-variance-authority` - styling and component variants
- Framer Motion 12 - section and list animations
- Lucide React - icons

**Tools:**
- Vite 8 - dev server and build
- ESLint 9 with `typescript-eslint`
- Vercel - hosting

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Luan-Neumann-Dev/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Other scripts: `npm run build` (type-check + production build), `npm run preview`
and `npm run lint`.

Or visit the **[live site →](https://luan-neumann-dev-portfolio.vercel.app/)**

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/       # Hero, About, Stack, Projects, Experience, Education, Contact
│   │   ├── Navbar.tsx
│   │   └── LanguageToggle.tsx
│   ├── data/
│   │   ├── profile.ts      # Profile, stack, experience, education, certificates
│   │   └── projects.ts     # Projects and their case studies
│   ├── i18n/               # Language context, provider, UI strings, useContent()
│   ├── pages/              # Index, ProjectDetail, NotFound
│   └── assets/             # Photos, project screenshots, certificate images
├── public/
└── index.html
```

## 💡 Technical Highlights

### Content in both languages from one typed source

Every translatable field is typed as `Record<Lang, T>`, so a missing translation
is a compile error rather than a blank space on the page. Components never see that
shape: a single hook resolves all data to the active language.

```ts
type Localized<T> = Record<Lang, T>;

export function useContent() {
  const { lang } = useLanguage();
  return useMemo(
    () => ({
      profile: getProfile(lang),
      projects: getProjects(lang),
      // stack, experiences, education, certifications…
    }),
    [lang]
  );
}
```

### A language choice that sticks

The provider reads the saved language before the first render, then keeps
`localStorage`, `<html lang>` and the document title in sync, so screen readers and
the browser tab follow the toggle too.

```ts
useEffect(() => {
  window.localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = HTML_LANG[lang];
  document.title = TITLES[lang];
}, [lang]);
```

## 📚 What I Learned

**Technical Skills:**
- **Typed content modeling** - designing data types that make the compiler enforce complete translations
- **Internationalization without a library** - a small context + hook covering everything this site needs
- **Scroll-driven UI** - building a carousel on native scroll and scroll-snap instead of a carousel library
- **Accessible animation** - using Framer Motion's `useReducedMotion` to honor system preferences

**Best Practices:**
- Separating content from presentation, so updates are data edits, not code changes
- Keeping section components small and focused
- Conventional commits and feature branches merged through pull requests

## 🗺️ Roadmap

- [ ] Add the newer projects (Cifrão, Vitrine Carros) to the carousel
- [ ] Per-project meta tags for better link previews when sharing a case study
- [ ] Lighthouse pass on image sizes (convert project screenshots to WebP)

## 👤 Author

**Luan Henrique Neumann**

- LinkedIn: [luan-henrique-neumann-dev](https://www.linkedin.com/in/luan-henrique-neumann-dev)
- GitHub: [@Luan-Neumann-Dev](https://github.com/Luan-Neumann-Dev)
- Email: luan.neumann.dev@gmail.com

---

⭐ Found this helpful? Give it a star!
