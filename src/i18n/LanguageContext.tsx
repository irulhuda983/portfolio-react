import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { TLanguage } from "@/types/interfaces";
import { LanguageContext } from "./language-context";

const STORAGE_KEY = "portfolio-language";
const SUPPORTED_LANGUAGES: TLanguage[] = ["en", "id"];

function getInitialLanguage(): TLanguage {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored as TLanguage)) {
    return stored as TLanguage;
  }

  return "en";
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<TLanguage>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (next: TLanguage) => setLanguageState(next);
  const toggleLanguage = () => setLanguageState((prev: TLanguage) => (prev === "en" ? "id" : "en"));

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider };
