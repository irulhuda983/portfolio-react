import { useContext } from "react";
import { LanguageContext } from "./language-context";
import type { ILanguageContext } from "./language-context";

function useLanguage(): ILanguageContext {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export { useLanguage };
