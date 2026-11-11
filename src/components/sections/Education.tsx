import { useMemo, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Award, ArrowUpRight, FileText } from 'lucide-react'
import { useContent } from '@/i18n/useContent'
import { useUI } from '@/i18n/ui'
import rocketPhpFormacao from "@/assets/rocket-php-formacao.webp";
import rocketLaravel from "@/assets/rocket-laravel.webp";
import rocketTests from "@/assets/rocket-tests.webp";
import udemyReact from "@/assets/udemy-react.webp"
import edu1 from "@/assets/edu-1.png"

const eduLogos: Record<string, string> = {
  "edu-1": edu1,
};

const certImages: Record<string, string> = {
  "rocket-php-formacao": rocketPhpFormacao,
  "rocket-laravel": rocketLaravel,
  "rocket-tests": rocketTests,
  "udemy-react": udemyReact,
};

const issuerIcons: Record<string, string> = {
  Udemy: "🎓",
  Rocketseat: "🚀",
};
const iconFor = (issuer: string) => issuerIcons[issuer] ?? "📜";

const Education = () => {
  const { education, certifications, publications } = useContent();
  const ui = useUI();
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...certifications].sort((a, b) => (b.hours ?? 0) - (a.hours ?? 0)),
    [certifications]
  );

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

          {publications.map((pub) => (
            <motion.a
              key={pub.href}
              href={pub.href}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className='group glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 lg:col-span-2 flex flex-col'
            >
              <div className='flex items-center justify-between gap-4 mb-5'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow'>
                    <FileText className='w-5 h-5 text-primary-foreground' />
                  </div>
                  <p className='font-mono text-[10px] text-accent uppercase tracking-widest'>
                    {ui.education.publication} · {pub.year}
                  </p>
                </div>
                <ArrowUpRight className='shrink-0 w-5 h-5 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </div>

              <h3 className='font-display text-2xl font-bold mb-1'>{pub.title}</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                {pub.venue} · {ui.education.coauthors} {pub.coauthors}
              </p>
              <p className='text-sm text-muted-foreground leading-relaxed'>{pub.summary}</p>

              <span className='mt-auto pt-5 font-mono text-xs text-accent'>{ui.education.readPaper} →</span>
            </motion.a>
          ))}

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            transition={{ duration: 0.6, delay: 0.3}}
            className='glass-card p-6 lg:col-span-3'
          >
            {/* Cabeçalho */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow'>
                <Award className='w-5 h-5 text-primary-foreground' />
              </div>
              <h3 className='font-display text-xl font-bold'>{ui.education.certifications}</h3>
            </div>

            {/* Ledger de certificados */}
            <motion.div layout className='grid sm:grid-cols-2 gap-3'>
              <AnimatePresence mode='popLayout'>
                {sorted.map((c) => (
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
