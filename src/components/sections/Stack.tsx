import {motion} from 'framer-motion';
import { stack } from '@/data/profile';

const Stack = () => {
  return (
    <section id="stack" className="relative py-32">
      <div className="container">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className='font-mono text-xs text-accent uppercase tracking-widest mb-3'>
            {"// stack"}
          </p>
          <h2 className='font-display text-4xl md:text-5xl] font-bold leading-tight'>
            Ferramentas que <span className='text-gradient'>moldam</span> meu trabalho
          </h2>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {stack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity:0, y:20}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true, margin: '-50px'}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className='group relative glass-card p-5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1'
            >
              <div className='absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity/10 transition-opacity duration-500' />

              <div className='relative'>
                <p className='font-mono text-[10px] text-accent uppercase tracking-wider mb-2'>
                  {tech.category}
                </p>
                <p className='font-display font-semibold text-lg mb-3'>{tech.name}</p>

                <div className='h-1 bg-secondary/50 rounded-full overflow-hidden'>
                  <motion.div
                    initial={{ width: 0}}
                    whileInView={{ width: `${tech.level}%`}}
                    viewport={{ once: true}}
                    transition={{ duration: 1.2, delay: i * 0.04, ease: [0.22, 1, 0.36, 1]}}
                    className='h-full bg-gradient-primary'
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack