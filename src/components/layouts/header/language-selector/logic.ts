import { usePathname, useRouter } from 'next/navigation';

export function useLanguageSelector(
  languages: { code: string; name: string; flag: string }[]
) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1];

  const handleLanguageChange = (langCode: string) => {
    const newPath = pathname.replace(/^\/[^\/]+/, `/${langCode}`);
    router.push(newPath);
  };

  const selectedLanguage = languages.find(
    language => language.code === currentLang
  );

  return {
    handleLanguageChange,
    selectedLanguage,
  };
}
