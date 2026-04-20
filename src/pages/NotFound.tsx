import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <p className="font-mono text-xs text-accent uppercase tracking-widest">// erro</p>
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <p className="text-xl text-muted-foreground">Página não encontrada</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
        >
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}

export default NotFound