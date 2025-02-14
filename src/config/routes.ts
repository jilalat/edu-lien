const defaultLang = 'en';

export const routes = {
  home: (lang: string = defaultLang) => `/${lang}`,
  roleBasedRoute: (lang: string, role: string) => `/${lang}/${role}`,
  auth: {
    login: (lang: string) => `/${lang}/auth/login`,
    forgotPassword: (lang: string) => `/${lang}/auth/forgot-password`,
    newPassword: (lang: string) => `/${lang}/auth/new-password`,
  },
  cv: {
    home: (lang: string) => `/${lang}/cv`,
  },
  invoice: {
    home: (lang: string) => `/${lang}/invoice`,
  },
  external: {
    f12Solutions: () => 'https://f12solutions.com',
  },
};
