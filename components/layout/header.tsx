'use client';

import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import { Moon, Sun, Globe2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    flag: 'https://images.unsplash.com/photo-1635688875538-a1124526f612?w=20&h=15&fit=crop',
  },
  {
    code: 'en',
    name: 'English',
    flag: 'https://images.unsplash.com/photo-1628324239134-89ba11fd03c3?w=20&h=15&fit=crop',
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: 'https://images.unsplash.com/photo-1638633181147-344a41377b6c?w=20&h=15&fit=crop',
  },
  {
    code: 'es',
    name: 'Español',
    flag: 'https://images.unsplash.com/photo-1628324463561-a1f3a381a675?w=20&h=15&fit=crop',
  },
  {
    code: 'ma',
    name: 'الدارجة',
    flag: 'https://images.unsplash.com/photo-1605793375565-03bd8fb23cf7?w=20&h=15&fit=crop',
  },
];

export function Header({ lang }: { lang: string }) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (langCode: string) => {
    const newPath = pathname.replace(/^\/[^\/]+/, `/${langCode}`);
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container h-16 flex items-center justify-between mx-auto">
        <Link href={`/${lang}`} className="flex items-center space-x-2">
          <Globe2 className="h-6 w-6" />
          <span className="font-bold text-lg">EduLien</span>
        </Link>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe2 className="h-5 w-5" />
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
                      height={15}
                      className="rounded"
                    />
                    <span>{language.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
