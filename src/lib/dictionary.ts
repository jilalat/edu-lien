import { languages } from '@/config/dictionaries'; // Import the languages array

// Dynamically generate SupportedLanguages type
export type SupportedLanguages = (typeof languages)[number]['code'];
export const defaultLanguage: SupportedLanguages = languages[0].code; // Use the first language as the default

// Base translation type
export type Translation = {
  [L in SupportedLanguages]: string;
};

// Type guard to check if an object is a Translation
function isTranslation(obj: any): obj is Translation {
  return (
    obj &&
    typeof obj === 'object' &&
    languages.every(lang => lang.code in obj) && // Check for all supported languages
    Object.values(obj).every(value => typeof value === 'string')
  );
}

// Helper type to extract the type without translations
export type ExtractTranslationType<T> = {
  [K in keyof T]: T[K] extends Translation
    ? string
    : T[K] extends Array<infer U>
    ? Array<ExtractTranslationType<U>>
    : T[K] extends object
    ? ExtractTranslationType<T[K]>
    : T[K];
};

export function isValidLanguage(lang: string): lang is SupportedLanguages {
  return languages.some(l => l.code === lang); // Check if the language exists in the languages array
}

export function getDictionary<T extends object>(
  lang: string,
  langData: T
): ExtractTranslationType<T> {
  const selectedLang = isValidLanguage(lang) ? lang : defaultLanguage;

  function processValue<V>(value: V): any {
    if (isTranslation(value)) {
      return value[selectedLang];
    }

    if (Array.isArray(value)) {
      return value.map(item => processValue(item));
    }

    if (value && typeof value === 'object') {
      const result: any = {};
      for (const key in value) {
        result[key] = processValue(value[key]);
      }
      return result;
    }

    return value;
  }

  return processValue(langData);
}
