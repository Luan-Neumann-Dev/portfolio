import { Link } from "react-router-dom"
import { useUI } from "@/i18n/ui"

const NotFound = () => {
  const ui = useUI();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <p className="font-mono text-xs text-accent uppercase tracking-widest">{ui.notFound.tag}</p>
        <h1 className="font-display text-8xl font-bold text-gradient">404</h1>
        <p className="text-xl text-muted-foreground">{ui.notFound.message}</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:scale-105 transition-transform"
        >
          {ui.notFound.back}
        </Link>
      </div>
    </div>
  )
}

export default NotFound
