import { useLanguage, type Lang } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const OPTIONS: Lang[] = ["en", "pt"];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className="inline-flex items-center rounded-full glass p-0.5 font-mono text-xs"
    >
      {OPTIONS.map((option) => {
        const active = lang === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            className={cn(
              "px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-300",
              active
                ? "bg-gradient-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
