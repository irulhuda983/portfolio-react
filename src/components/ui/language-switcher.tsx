import { useLanguage } from "@/i18n/useLanguage";

function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-[4px] border border-muted-foreground/40 text-xs overflow-hidden ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 cursor-pointer transition-colors duration-150 ${language === "en" ? "bg-teal-400 text-white" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        aria-pressed={language === "id"}
        className={`px-2 py-1 cursor-pointer transition-colors duration-150 ${language === "id" ? "bg-teal-400 text-white" : "text-muted-foreground hover:text-foreground"}`}
      >
        ID
      </button>
    </div>
  );
}

export default LanguageSwitcher;
