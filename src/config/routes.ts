const defaultLang = 'fr';

export const routes = {
  home: (lang: string = defaultLang) => `/${lang}`,
  roleBasedRoute: (lang: string, role: string) => `/${lang}/${role}`,
  auth: {
    login: (lang: string) => `/${lang}/auth/login`,
    forgotPassword: (lang: string) => `/${lang}/auth/forgot-password`,
    forgotIdentifier: (lang: string) => `/${lang}/auth/forgot-identifier`,
    newPassword: (lang: string) => `/${lang}/auth/new-password`,
  },
  dashboards: {
    student: (lang: string) => `/${lang}/student`,
    parent: (lang: string) => `/${lang}/parent`,
    teacher: (lang: string) => `/${lang}/teacher`,
    school: (lang: string) => `/${lang}/school`,
  },
  external: {
    f12Solutions: () => 'https://f12solutions.com',
  },
};
