import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  DEFAULT_LANG,
  LanguageContext,
  STORAGE_KEY,
  type Lang,
} from "./LanguageContext";

const TITLES: Record<Lang, string> = {
  en: "Luan Henrique Neumann — Full Stack Developer",
  pt: "Luan Henrique Neumann — Desenvolvedor Full Stack",
};

const HTML_LANG: Record<Lang, string> = {
  en: "en",
  pt: "pt-BR",
};

function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "pt" ? stored : DEFAULT_LANG;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = HTML_LANG[lang];
    document.title = TITLES[lang];
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "pt" : "en")),
    []
  );

  const value = useMemo(() => ({ lang, setLang, toggle }), [lang, setLang, toggle]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
