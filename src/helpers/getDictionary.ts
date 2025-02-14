// Type for the new language data structure
export type LanguageKeys<T> = keyof T;
export type SupportedLanguages = 'en' | 'fr' | 'ar' | 'es';

export const defaultLanguage: SupportedLanguages = 'en';

// Helper type to ensure all translation keys have entries for all supported languages
export type TranslationSchema<T> = {
  [K in keyof T]: {
    [L in SupportedLanguages]: string;
  };
};

export function isValidLanguage(lang: string): lang is SupportedLanguages {
  return ['en', 'fr', 'ar', 'es'].includes(lang);
}

export function getDictionary<T extends object>(
  lang: string,
  langData: TranslationSchema<T>
): { [K in keyof T]: string } {
  const selectedLang = isValidLanguage(lang) ? lang : defaultLanguage;

  const result = {} as { [K in keyof T]: string };

  for (const key in langData) {
    result[key] = langData[key][selectedLang];
  }

  return result;
}
