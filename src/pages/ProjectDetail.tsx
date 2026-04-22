import { useEffect } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { getProjectById, projects } from "@/data/projects"
import Navbar from "@/components/Navbar"

const sections = [
  { key: 'fullDescription', label: 'Visão geral' },
  { key: 'problem', label: 'Problema' },
  { key: 'solution', label: 'Solução' }
];

const listSections = [
  { key: 'decisions', label: 'Decisões técnicas' }, 
  { key: 'challenges', label: 'Desafios' }, 
  { key: 'improvements', label: 'Melhorias futuras'},
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id || "");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) return <Navigate to="/" replace />
  
  const currentIdx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(currentIdx + 1) % projects.length];
  
  return (
    <main className="relative">
      <Navbar />

      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="container relative h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-5"
          >
            <Link
              to="/#projetos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os projetos
            </Link>

            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              {project.year} · {project.subtitle}
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-gradient">{project.title}</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:border-primary/40 transition-colors"
                >
                  <Github className="w-4 h-4" /> Código
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-5 flex flex-wrap items-center gap-3"
        >
          <p className="font-mono text-[11px] text-accent uppercase tracking-widest mr-2">
            Stack:
          </p>
          {project.techs.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 border border-primary/20"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </section>

      <section className="container py-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                {`0${i + 1}`} — {s.label}
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-display">
                {project[s.key as keyof typeof project] as string}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              04 — Galeria
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl glass shadow-card ${
                    idx === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-32 lg:self-start">
          {listSections.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-4">
                {s.label}
              </p>
              <ul className="space-y-3">
                {(project[s.key as keyof typeof project] as string[]).map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span className="font-mono text-primary mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </aside>
      </section>

      <section className="container pb-32">
        <Link
          to={`/projeto/${next.id}`}
          className="group block relative rounded-3xl overflow-hidden glass shadow-elegant aspect-[16/7]"
        >
          <img
            src={next.thumbnail}
            alt={next.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
          <div className="relative h-full flex flex-col justify-center p-10 md:p-16">
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              Próximo projeto
            </p>
            <h3 className="font-display text-4xl md:text-6xl font-bold mb-3">
              {next.title}
              <ArrowUpRight className="inline-block ml-3 w-10 h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </h3>
            <p className="text-muted-foreground max-w-xl">{next.subtitle}</p>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default ProjectDetail