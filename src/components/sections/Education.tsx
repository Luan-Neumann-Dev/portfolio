import {motion} from 'framer-motion'
import { education, certifications } from '@/data/profile'
import { Award, Eye } from 'lucide-react'
import rocketFigma from "@/assets/rocket-figma.png";
import rocketPhp from "@/assets/rocket-php.png";
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
  "rocket-figma": rocketFigma,
  "udemy-c": udemyC,
  "udemy-front": udemyFront,
  "udemy-react": udemyReact,
  "udemy-js": udemyJs,
  "udemy-node": udemyNode
};

const Education = () => {
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
            {"// formação"}
          </p>
          <h2 className='font-display text-4xl md:text-5xl font-bold leading-tight'>
            Aprendizado <span className='text-gradient'>contínuo</span>
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
            <div className='flex items-center gap-3 mb-5'>
              <div className='w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow'>
                <Award className='w-5 h-5 text-primary-foreground' />
              </div>
              <h3 className='font-display text-xl font-bold'>Certificações</h3>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
              {certifications.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  target='_blank'
                  className="group relative text-left p-4 rounded-2xl bg-secondary/40 border border-primary/10 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-500 overflow-hidden"
                >
                  {/* Thumbnail preview */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-primary/10">
                    <img
                      src={certImages[c.image]}
                      alt={c.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium">
                        <Eye className="w-3.5 h-3.5 text-accent" />
                        Ver certificado
                      </span>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-1.5">
                    {c.year} · {c.issuer}
                  </p>
                  <p className="text-sm font-semibold leading-snug">{c.name}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education