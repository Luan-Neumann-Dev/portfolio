import { createContext, useContext } from "react";

export type Lang = "en" | "pt";

export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "portfolio-lang";

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
