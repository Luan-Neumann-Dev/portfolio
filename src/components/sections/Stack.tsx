import { motion } from 'framer-motion';
import { useContent } from '@/i18n/useContent';
import { useUI } from '@/i18n/ui';
import { cn } from '@/lib/utils';

const Stack = () => {
  const { stack } = useContent();
  const ui = useUI();

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
            {ui.stack.tag}
          </p>
          <h2 className='font-display text-4xl md:text-5xl font-bold leading-tight'>
            {ui.stack.heading.pre}<span className='text-gradient'>{ui.stack.heading.highlight}</span>{ui.stack.heading.post}
          </h2>
        </motion.div>

        <div className='space-y-14'>
          {stack.map((group) => {
            const isCore = group.id === 'core';

            return (
              <div key={group.id}>
                <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-6'>
                  <h3 className='font-display text-2xl font-semibold'>{group.title}</h3>
                  <p className='text-sm text-muted-foreground'>{group.blurb}</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  {group.techs.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      className={cn(
                        'group relative glass-card p-5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1',
                        isCore && 'border-primary/30'
                      )}
                    >
                      <p className='font-display font-semibold text-lg mb-1.5'>{tech.name}</p>
                      <p className='text-xs text-muted-foreground leading-relaxed'>{tech.usedAt}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Stack
