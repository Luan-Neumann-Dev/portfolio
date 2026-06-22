import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from "@/data/projects";
import { cn } from '@/lib/utils';

const accentRing: Record<string, string> = {
  purple: "from-primary/40 to-primary-glow/30",
  cyan: "from-accent/40 to-primary/30",
  magenta: "from-pink-500/40 to-primary/30",
};

// Alinha o início do track com a borda de conteúdo do .container (max 1400px + 2rem),
// permitindo que os cards sangrem até a borda da tela à direita (efeito Netflix).
const EDGE_PADDING = "max(2rem, calc((100vw - 1400px) / 2 + 2rem))";
const CARD_GAP = 24; // gap-6

const Projects = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  }, []);

  useLayoutEffect(() => {
    updateScrollState();
  }, [updateScrollState]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + CARD_GAP : el.clientWidth * 0.8;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  const hasOverflow = canScrollLeft || canScrollRight;

  return (
    <section id='projetos' className='relative py-32'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16'
        >
          <div className='max-w-2xl'>
            <p className='font-mono text-xs text-accent uppercase tracking-widest mb-3'>
              {"// trabalhos selecionados"}
            </p>

            <h2 className='font-display text-4xl md:text-6xl font-bold leading-tight'>
              Projetos que contam{" "}
              <span className='text-gradient'>histórias</span>
            </h2>
          </div>

          <div className='flex flex-col md:items-end gap-6'>
            <p className='text-muted-foreground max-w-sm'>
              Cada projeto é um problema real, resolvido com decisões técnicas conscientes. Clique para o case study completo.
            </p>

            {/* Controles do carrossel — desktop */}
            <div
              className={cn(
                "hidden md:flex items-center gap-3 transition-opacity duration-300",
                hasOverflow ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <button
                type='button'
                aria-label='Projetos anteriores'
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollLeft}
                className='w-11 h-11 rounded-full glass flex items-center justify-center text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none'
              >
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                type='button'
                aria-label='Próximos projetos'
                onClick={() => scrollByCard(1)}
                disabled={!canScrollRight}
                className='w-11 h-11 rounded-full glass flex items-center justify-center text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:pointer-events-none'
              >
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Track full-bleed (sangra até a borda da tela à direita) */}
      <div className='relative'>
        <div
          ref={trackRef}
          className='flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6'
          style={{
            paddingLeft: EDGE_PADDING,
            paddingRight: EDGE_PADDING,
            scrollPaddingLeft: EDGE_PADDING,
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              data-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: Math.min(i, 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className='relative group shrink-0 snap-start w-[80vw] sm:w-[60vw] md:w-[52vw] lg:w-[600px] xl:w-[620px] aspect-[4/3] sm:aspect-video'
            >
              <Link
                to={`/projeto/${p.id}`}
                className='absolute inset-0 rounded-3xl overflow-hidden glass shadow-card hover:shadow-elegant transition-all duration-700'
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  loading='lazy'
                  className='absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500' />

                <div className={cn(
                  "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br mix-blend-overlay",
                  accentRing[p.accent]
                )} />

                <div className='absolute top-5 left-5 right-5 flex items-center justify-between'>
                  <span className='font-mono text-[10px] text-accent uppercase tracking-widest px-2.5 py-1 rounded-full glass'>
                    {p.year}
                  </span>

                  <span className="w-9 h-9 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className='absolute bottom-0 left-0 right-0 p-6 space-y-2.5'>
                  <p className='font-mono text-[11px] text-accent uppercase tracking-wider opacity-90 line-clamp-1'>
                    {p.subtitle}
                  </p>

                  <h3 className='font-display font-bold leading-tight text-2xl md:text-3xl'>
                    {p.title}
                  </h3>

                  <div className='flex flex-wrap gap-1.5 pt-1'>
                    {p.techs.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='px-2.5 py-0.5 text-[10px] font-mono rounded-full glass border border-primary/20'
                      >
                        {tech}
                      </span>
                    ))}
                    {p.techs.length > 3 && (
                      <span className='px-2.5 py-0.5 text-[10px] font-mono rounded-full text-muted-foreground'>
                        +{p.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Fades laterais — reforçam o "tem mais conteúdo" */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 bottom-6 w-16 md:w-24 bg-gradient-to-r from-background to-transparent transition-opacity duration-300",
            canScrollLeft ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 bottom-6 w-16 md:w-24 bg-gradient-to-l from-background to-transparent transition-opacity duration-300",
            canScrollRight ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </section>
  )
}

export default Projects
