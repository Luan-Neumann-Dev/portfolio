import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useUI } from "@/i18n/ui"
import LanguageToggle from "@/components/LanguageToggle"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const ui = useUI();

  const links = [
    { href: '#sobre', label: ui.nav.about },
    { href: "#stack", label: ui.nav.stack },
    { href: "#projetos", label: ui.nav.projects },
    { href: "#experiencia", label: ui.nav.experience },
    { href: "#contato", label: ui.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  return (
    <header
      className={cn(
        "fixed top-o left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}>
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
            scrolled ? "glass shadow-card" : "bg-transparent"
          )}
        >
          <Link to='/' className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">Luan</span>
            <span className="text-foreground">.dev</span>
          </Link>

          {isHome && (
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-3">
            <LanguageToggle />

            <a
              href={isHome ? "#contato" : "/"}
              className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-transform shadow-glow"
            >
              {isHome ? ui.nav.cta : ui.nav.back}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
