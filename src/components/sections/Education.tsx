import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Award, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useContent } from '@/i18n/useContent'
import { useUI } from '@/i18n/ui'
import rocketFigma from "@/assets/rocket-figma.png";
import rocketPhp from "@/assets/rocket-php.png";
import rocketPhpFormacao from "@/assets/rocket-php-formacao.jpg";
import rocketLaravel from "@/assets/rocket-laravel.jpg";
import rocketLaravelApi from "@/assets/rocket-laravel-api.jpg";
import rocketLivewire from "@/assets/rocket-livewire.jpg";
import rocketTests from "@/assets/rocket-tests.jpg";
import udemyC from "@/assets/udemy-c.png"
import udemyFront from "@/assets/udemy-front.png"
import udemyReact from "@/assets/udemy-react.png"
import udemyJs from "@/assets/udemy-js.png"
import udemyNode from "@/assets/udemy-node.png"
import edu1 from "@/assets/edu-1.png"

const eduLogos: Record<string, string> = {
  "edu-1": edu1,
};

const certImages: Record<string, string> = {
  "rocket-php": rocketPhp,
  "rocket-php-formacao": rocketPhpFormacao,
  "rocket-laravel": rocketLaravel,
  "rocket-laravel-api": rocketLaravelApi,
  "rocket-livewire": rocketLivewire,
  "rocket-tests": rocketTests,
  "rocket-figma": rocketFigma,
  "udemy-c": udemyC,
  "udemy-front": udemyFront,
  "udemy-react": udemyReact,
  "udemy-js": udemyJs,
  "udemy-node": udemyNode
};

const issuerIcons: Record<string, string> = {
  Udemy: "🎓",
  Rocketseat: "🚀",
};
const iconFor = (issuer: string) => issuerIcons[issuer] ?? "📜";

// Stable sentinel for the "all issuers" filter — kept language-independent so
// switching the language never invalidates the active filter.
const ALL = "__all__";
const pad = (n: number) => String(n).padStart(2, "0");

const Education = () => {
  const { education, certifications } = useContent();
  const ui = useUI();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<string>(ALL);
  const [hovered, setHovered] = useState<string | null>(null);

  // Emissores únicos, derivados dos dados (filtro se atualiza sozinho ao adicionar certificados).
  const issuers = useMemo(
    () => Array.from(new Set(certifications.map((c) => c.issuer))),
    [certifications]
  );

  const sorted = useMemo(
    () => [...certifications].sort((a, b) => b.year - a.year),
    [certifications]
  );

  // Soma a carga horária apenas dos certificados que têm o dado disponível.
  const totalHours = useMemo(
    () => certifications.reduce((sum, c) => sum + (c.hours ?? 0), 0),
    [certifications]
  );

  const visible = useMemo(
    () => (filter === ALL ? sorted : sorted.filter((c) => c.issuer === filter)),
    [filter, sorted]
  );

  const countFor = (issuer: string) =>
    issuer === ALL
      ? certifications.length
      : certifications.filter((c) => c.issuer === issuer).length;

  return (
    <section id='formacao' className='relative py-32'>
      <div className='container'>
        <motion.div
          initial={{opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once: true}}
          transition={{ duration: 0.6 }}
          className='max-w-2xl mb-16'
        >
          <p className='font-mono text-xs text-accent uppercase tracking-widest mb-3'>
            {ui.education.tag}
          </p>
          <h2 className='font-display text-4xl md:text-5xl font-bold leading-tight'>
            {ui.education.heading.pre}<span className='text-gradient'>{ui.education.heading.highlight}</span>{ui.education.heading.post}
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-6'>
          {education.map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity:0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{ duration: 0.6, delay: i * 0.1}}
              className='group glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 lg:col-span-1'
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center p-2 mb-5 group-hover:scale-110 transition-transform">
                <img
                  src={eduLogos[e.logo]}
                  alt={e.institution}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              </div>

              <p className='font-mono text-[10px] text-accent uppercase tracking-widest mb-2'>
                {e.period}
              </p>

              <h3 className='font-display text-lg font-bold mb-1'>{e.degree}</h3>
              <p className='text-sm text-muted-foreground'>{e.institution}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{ duration: 0.6, delay: 0.3}}
            className='glass-card p-6 lg:col-span-3'
          >
            {/* Cabeçalho */}
            <div className='flex items-center justify-between gap-4 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow'>
                  <Award className='w-5 h-5 text-primary-foreground' />
                </div>
                <h3 className='font-display text-xl font-bold'>{ui.education.certifications}</h3>
              </div>
              <p className='font-mono text-xs text-muted-foreground text-right'>
                <span className='text-gradient font-bold text-base'>{pad(certifications.length)}</span>{" "}
                {ui.education.total}
                {totalHours > 0 && (
                  <>
                    {" · "}
                    <span className='text-gradient font-bold text-base'>{totalHours}h</span>{" "}
                    {ui.education.study}
                  </>
                )}
              </p>
            </div>

            {/* Filtro por emissor */}
            <div className='flex flex-wrap gap-2 mb-6'>
              {[ALL, ...issuers].map((issuer) => {
                const active = filter === issuer;
                return (
                  <button
                    key={issuer}
                    type='button'
                    onClick={() => setFilter(issuer)}
                    aria-pressed={active}
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'bg-gradient-primary text-primary-foreground border-transparent shadow-glow'
                        : 'bg-secondary/40 text-muted-foreground border-primary/10 hover:border-primary/40 hover:text-foreground'
                    )}
                  >
                    {issuer !== ALL && <span aria-hidden>{iconFor(issuer)}</span>}
                    <span>{issuer === ALL ? ui.education.all : issuer}</span>
                    <span
                      className={cn(
                        'tabular-nums',
                        active ? 'text-primary-foreground/70' : 'text-accent'
                      )}
                    >
                      {pad(countFor(issuer))}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Ledger de certificados */}
            <motion.div layout className='grid sm:grid-cols-2 gap-3'>
              <AnimatePresence mode='popLayout'>
                {visible.map((c) => (
                  <motion.a
                    key={c.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    href={c.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${ui.education.certAriaPrefix} ${c.name} — ${c.issuer}, ${c.year} ${ui.education.certAriaSuffix}`}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered((h) => (h === c.id ? null : h))}
                    className='group relative flex items-center gap-3 rounded-2xl bg-secondary/40 border border-primary/10 p-3 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                  >
                    {/* Barra de destaque que cresce no hover */}
                    <span className='absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 rounded-full bg-gradient-primary transition-all duration-300 group-hover:h-2/3' />

                    {/* Marca do emissor */}
                    <span
                      className='shrink-0 w-10 h-10 rounded-xl glass flex items-center justify-center text-lg leading-none'
                      aria-hidden
                    >
                      {iconFor(c.issuer)}
                    </span>

                    {/* Texto */}
                    <span className='min-w-0 flex-1'>
                      <span className='block text-sm font-semibold leading-snug line-clamp-2'>
                        {c.name}
                      </span>
                      <span className='block font-mono text-[10px] text-accent uppercase tracking-widest mt-1'>
                        {c.issuer} · {c.year}
                        {c.hours != null && ` · ${c.hours}h`}
                      </span>
                    </span>

                    {/* Afordância de link */}
                    <ArrowUpRight className='shrink-0 w-4 h-4 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />

                    {/* Preview flutuante da imagem (só no hover, desktop) */}
                    {!reduceMotion && (
                      <AnimatePresence>
                        {hovered === c.id && (
                          <motion.span
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className='pointer-events-none absolute left-1/2 bottom-[calc(100%+0.6rem)] -translate-x-1/2 z-30 w-56 rounded-xl overflow-hidden border border-primary/30 shadow-elegant glass'
                          >
                            <img
                              src={certImages[c.image]}
                              alt=''
                              loading='lazy'
                              className='block w-full aspect-[4/3] object-cover'
                            />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
