const defaultLang = 'fr';

export const routes = {
  auth: {
    login: (lang: string) => `/${lang}/auth/login`,
    forgotPassword: (lang: string) => `/${lang}/auth/forgot-password`,
    forgotIdentifier: (lang: string) => `/${lang}/auth/forgot-identifier`,
    newPassword: (lang: string) => `/${lang}/auth/new-password`,
  },
  home: (lang: string = defaultLang) => `/${lang}`,
  roleBasedRoute: (lang: string, role: string) => `/${lang}/${role}`,
  external: {
    f12Solutions: () => 'https://f12solutions.com',
  },
};