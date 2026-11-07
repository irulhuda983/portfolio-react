import { createContext } from "react";
import type { TLanguage } from "@/types/interfaces";

interface ILanguageContext {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export { LanguageContext };
export type { ILanguageContext };
