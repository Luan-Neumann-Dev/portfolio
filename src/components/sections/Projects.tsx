import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from "@/data/projects";
import { cn } from '@/lib/utils';

const sizeClass: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
  md: "md:col-span-1 md:row-span-1 aspect-[4/3]",
  sm: "md:col-span-1 md:row-span-1 aspect-[4/3]",
};

const accentRing: Record<string, string> = {
  purple: "from-primary/40 to-primary-glow/30",
  cyan: "from-accent/40 to-primary/30",
  magenta: "from-pink-500/40 to-primary/30",
};

const Projects = () => {
  return (
    <section id='projetos' className='relative py-32'>
      <div className='container'>
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once:true }}
          transition={{duration: 0.6}}
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

          <p className='text-muted-foreground max-w-sm'>
            Cada projeto é um problema real, resolvido com decisões técnicas conscientes. Clique para o case study completo.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px] md:auto-rows-[280px]'>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, margin: "-50px"}}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1]}}
              className={cn("relative group", sizeClass[p.size])}
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
                )}/>

                <div className='absolute top-5 left-5 right-5 flex items-center justify-between'>
                  <span className='font-mono text-[10px] text-accent uppercase tracking-widest px-2.5 py-1 rounded-full glass'>
                    {p.year}
                  </span>

                  <span className="w-9 h-9 rounded-full glass flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                <div className='absolute bottom-0 left-0 right-0 p-6 space-y-3'>
                  <p className='font-mono text-[11px] text-accent uppercase tracking-wider opacity-90'>
                    {p.subtitle}
                  </p>
                  
                  <h3
                    className={cn(
                      "font-display font-bold leading-tight",
                        p.size === 'lg' ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                    )}
                  >
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
                    ) }
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects