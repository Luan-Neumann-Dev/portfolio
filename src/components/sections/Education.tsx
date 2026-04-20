import {motion} from 'framer-motion'
import { education, certifications } from '@/data/profile'
import { Award, GraduationCap } from 'lucide-react'

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
              <div className='w-16 h-16 rounded-2xl glass flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'>
                <GraduationCap className='w-7 h-7 text-accent' />
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
                <div
                  key={c.id}
                  className='p-4 rounded-2xl bg-secondary/40 border border-primary/10 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-500'
                >
                  <p className='font-mono text-[10]px text-accent uppercase tracking-widest mb-1.5'>
                    {c.year} · {c.issuer}
                  </p>
                  <p className='text-sm font-semibold leading-snug'>{c.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education