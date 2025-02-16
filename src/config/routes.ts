const defaultLang = 'en';

export const routes = {
  home: (lang: string = defaultLang) => `/${lang}`,
  roleBasedRoute: (lang: string, role: string) => `/${lang}/${role}`,
  auth: {
    login: (lang: string) => `/${lang}/auth/login`,
    signup: (lang: string) => `/${lang}/auth/signup`,
    forgotPassword: (lang: string) => `/${lang}/auth/forgot-password`,
    newPassword: (lang: string) => `/${lang}/auth/new-password`,
  },
  cv: {
    home: (lang: string) => `/${lang}/cv`,
  },
  invoice: {
    home: (lang: string) => `/${lang}/invoice`,
  },
  navigation: {
    howItWorks: (lang: string) => `/${lang}/how-it-works`,
    features: (lang: string) => `/${lang}/features`,
    testimonials: (lang: string) => `/${lang}/testimonials`,
    templates: (lang: string) => `/${lang}/templates`,
  },
  external: {
    f12Solutions: () => 'https://f12solutions.com',
  },
};
