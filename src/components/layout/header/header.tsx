'use client';

import { getDictionary } from '@//lib/dictionary';
import { LanguageSelector } from './components/LanguageSelector';
import { ThemeToggler } from './components/ThemeToggler';
import { LogIn } from './components/logIn';
import { Logo } from './components/logo';
import { Navigation } from './components/navigation';

export async function Header({ lang }: { lang: string }) {
  const dict = await getDictionary(lang);
  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <menu className="container h-16 flex items-center justify-between mx-auto">
        <Logo dict={dict.header} lang={lang} />
        <Navigation lang={lang} />
        <div className="flex items-center gap-2">
          <LanguageSelector dict={dict.header} />
          <ThemeToggler dict={dict.header} />
          <LogIn dict={dict.header} lang={lang} />
        </div>
      </menu>
    </header>
  );
}
