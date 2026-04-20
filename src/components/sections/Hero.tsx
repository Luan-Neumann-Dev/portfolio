import {motion} from 'framer-motion';
import { ArrowRight, Github, Sparkles} from 'lucide-react'
import { profile } from '@/data/profile';

const Hero = () => {
  return (
    <section className='relative min-h-screen pt-32 pb-20 overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background'/>
        <div className='absolute inset-0 grid-bg'/>
      </div>

      <div className='container relative'>
        <div className='grid lg:grid-cols-12 gap-10 items-center'>

          <motion.div 
            initial={{opacity:0, y: 30}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1]}}
            className='lg:col-span-7 space-y-7'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground'>
              <Sparkles className='text-accent w-3.5 h-3.5'/>
              Disponível para novos projetos
            </div>

            <h1 className='font-display font-bold leading-[0.95] tracking-tight'>
              <span className='block text-5xl md:text-7xl lg:text-8xl'>
                {profile.name.split(" ")[0]}
              </span>
              <span className='block text-5xl md:text-7xl lg:text-8xl text-gradient'>
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div className='flex items-center gap-3'>
              <span className='h-px w-12 bg-gradient-to-r from-primary to-transparent' />
              <p className='font-mono text-sm text-accent uppercase tracking-widest'>
                {profile.title}
              </p>
            </div>

            <p className='text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed'>
              {profile.tagline}
            </p>

            <div className='flex flex-wrap items-center gap-4 pt-2'>
              <a href='#projetos' className='group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:shadow-glow-cyan transition-all duration-500 hover:scale-105'>
                Ver projetos
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </a>

              <a
                href={profile.github}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:border-primary/40 transition-all'
              >
                <Github className='w-4 h-4' />
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}}
            className='lg:col-span-5 relative'
          >
            <div className='relative aspect-[4/5] max-w-md mx-auto'>
              <div className='absolute -inset-8 bg-gradient-primary opacity-30 blur-3xl rounded-full animate-pulse-glow' />

              <div className='relative h-full rounded-3xl overflow-hidden glass shadow-elegant flex items-center justify-center'>
                <div className='text-center space-y-4 p-8'>
                  <div className='w-24 h-24 rounded-full bg-gradient-primary mx-auto flex items-center justify-center text-4xl font-display font-bold text-primary-foreground shadow-glow'>
                    {profile.name.charAt(0)}
                  </div>
                  <p className='font-mono text-xs text-accent uppercase tracking-widest'>
                    Adicione sua foto aqui
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Substitua este bloco por uma tag &lt;img&gt;
                  </p>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent'/>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0]}}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut'}}
                className='absolute -left-6 top-12 glass-card p-3 px-4 hidden md:block'
              >
                <p className='font-mono text-[10px] text-accent uppercase tracking-wider'>Stack</p>
                <p className='text-sm font-semibold mt-0.5'>React · Node · TS</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0]}}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1}}
                className='absolute -right-4 bottom-20 glass-card p-3 px-4'
              >
                <p className='font-mono text-[10px] text-accent uppercase tracking-wider'>Exp</p>
                <p className='text-sm font-semibold mt-0.5'>2+ anos</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0]}}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5}}
                className='absolute -left-2 -bottom-6 glass-card p-3 px-4 hidden md:block'
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-glow-cyan" />
                <p className='text-sm font-semibold'>Online agora</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className='mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl'>
          {[
            {v: "2+", l: "Anos de experiência"},
            {v: "40+", l:"Projetos entregues"},
            {v: "12", l: "Tecnologias dominadas"},
            { v: "∞",  l: "Cafés tomados" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1}}
              className='space-y-1'
            >
              <p className='font-display text-3xl md:text-4xl font-bold text-gradient'>{s.v}</p>
              <p className='text-xs text-muted-foreground uppercase tracking-wider'>{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero