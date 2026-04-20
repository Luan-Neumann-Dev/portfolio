import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { MapPin, Mail } from 'lucide-react'

const About = () => {
  return (
    <section id='sobre' className='relative py-32 overflow-hidden'>
      <div className='container'>
        <div className='grid lg:grid-cols-12 gap-12 items-center'>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className='lg:col-span-5 relative'
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl' />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass flex items-center justify-center">
                <p className="font-mono text-xs text-muted-foreground text-center px-8">
                  Adicione uma foto do seu workspace ou sua foto aqui
                </p>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 mix-blend-overlay" />
              </div>

              <div className='absolute -bottom-8 -right-4 lg:-right-12 max-w-[280px] glass-card p-5'>
                <p className='font-mono text-xs text-accent mb-2'>// philosophy</p>
                <p className='text-sm leading-relaxed'>
                  "Código bem escrito é uma forma de empatia"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='lg:col-span-7 space-y-6'
          >
            <div className='space-y-3'>
              <p className='font-mono text-xs text-accent uppercase tracking-widest'>
                {"// sobre mim"}
              </p>

              <h2 className='font-display text-4xl md:text-6xl font-bold leading-tight'>
                Engenharia com{" "}
                <span className='text-gradient'>propósitos</span>{" "}
                e estética.
              </h2>
            </div>

            <p className='text-lg text-muted-foreground leading-relaxed'>{profile.shortBio}</p>
            <p className='text-base text-muted-foreground leading-relaxed'>{profile.longBio}</p>

            <div className='flex flex-wrap gap-3 pt-4'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm'>
                <MapPin className='w-4 h-4 text-accent' />
                {profile.location}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:border-primary/40 transition-colors'
              >
                <Mail className='w-4 h-4 text-accent' />
                {profile.email}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About