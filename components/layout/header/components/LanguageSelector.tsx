'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import arFlag from '@/assets/images/ar-flag.png';
import enFlag from '@/assets/images/en-flag.png';
import esFlag from '@/assets/images/es-flag.png';
import frFlag from '@/assets/images/fr-flag.png';
import maFlag from '@/assets/images/ma-flag.png';

const languages = [
  { code: 'ma', name: 'الدارجة', flag: maFlag },
  { code: 'ar', name: 'العربية', flag: arFlag },
  { code: 'fr', name: 'Français', flag: frFlag },
  { code: 'en', name: 'English', flag: enFlag },
  { code: 'es', name: 'Español', flag: esFlag },
];

interface LanguageSelectorProps {
  dict: {
    languageSelection: string;
  };
}

export function LanguageSelector({ dict }: LanguageSelectorProps) {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          title={dict.languageSelection}
        >
          <Image
            src={selectedLanguage?.flag}
            alt={selectedLanguage?.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map(language => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <Image
                src={language.flag}
                alt={language.name}
                width={20}
                height={20}
              />
              <span>{language.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
