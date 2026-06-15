"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Locale } from "./i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations[Locale];
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "id",
  setLocale: () => {},
  t: translations.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "id" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("locale", locale);
  }, [locale, mounted]);

  if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
