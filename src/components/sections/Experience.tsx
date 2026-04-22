import { motion } from "framer-motion"
import { experiences } from "@/data/profile"

import c1 from "@/assets/company-1.png";
import c2 from "@/assets/company-2.png";

const logos: Record<string, string> = {
  "company-1": c1,
  "company-2": c2,
};

const Experience = () => {
  return (
    <section id="experiencia" className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
            {"// jornada"}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Lugares onde construí <span className="text-gradient">coisas reais</span>.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative grid md:grid-cols-2 gap-6 md:gap-12 items-start"
                >
                  <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full animate-pulse-glow" />
                      <div className="relative w-14 h-14 rounded-lg glass flex items-center justify-center transition-transform">
                        <img
                          src={logos[exp.logo]}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-lg"
                          loading="lazy"
                          width={56}
                          height={56}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={isLeft ? "pl-20 md:pl-0 md:pr-12 md:text-right" : "hidden md:block"}>
                    {isLeft && (
                      <div className="glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
                        <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-2">
                          {exp.period}
                        </p>
                        <h3 className="font-display text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary-glow font-medium mb-3">{exp.company}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <ul className="flex flex-wrap gap-2 md:justify-end">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={!isLeft ? "pl-20 md:pl-12" : "hidden md:block"}>
                    {!isLeft && (
                      <div className="glass-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-500">
                        <p className="font-mono text-[11px] text-accent uppercase tracking-widest mb-2">
                          {exp.period}
                        </p>
                        <h3 className="font-display text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary-glow font-medium mb-3">{exp.company}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience