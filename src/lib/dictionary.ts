const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  fr: () => import('./dictionaries/fr.json').then(module => module.default),
  ar: () => import('./dictionaries/ar.json').then(module => module.default),
  es: () => import('./dictionaries/es.json').then(module => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!dictionaries[locale as keyof typeof dictionaries]) {
    return dictionaries.en();
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
