import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import { profile } from "@/data/profile"

const links = [
  { icon: Mail, label: "Email", href: `mailto:${profile.email}`, value: profile.email},
  { icon: Github, label: "GitHub", href: profile.github, value: "@seuusuario"},
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin, value: '/in/seuusuario'},
  { icon: Twitter, label: "Twitter", href: profile.twitter, value: '@seuusuario'},
]

const Contact = () => {
  return (
    <section id="contato" className="relative py-32">
      <div className="container">
        <div className="relative glass-card p-10 md:p-16 overflow-hidden">

          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                {"// vamos construir"}
              </p>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
                Tem uma ideia?{" "}
                <span className="text-gradient">Vamos conversar.</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Estou aberto para projetos freelance, posições full-time e colaborações em open source.
                Geralmente respondo em até 24h.
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
              >
                {profile.email}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20}}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true}}
              transition={{duration: 0.6, delay: 0.2}}
              className="space-y-3"
            >
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-secondary/40 border border-primary/10 hover:border-primary/40 hover:bg-secondary/60 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                      <link.icon className="w-5 h-5"/>
                    </div>

                    <div className="flex-1">
                      <p className="font-mono text-[10px] text-accent uppercase tracking-widest">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        <footer className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {profile.name}. Construído com café e curiosidade.</p>
          <p className="font-mono">v1.0.0 — last deploy: today</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact