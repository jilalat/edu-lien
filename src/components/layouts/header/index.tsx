'use client';

import { langType } from '@/types';
import { LanguageSelector } from './language-selector';
import { Logo } from './logo';
import { Navigation } from './navigation';

export function Header({ lang }: langType) {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 ">
      <div className="flex items-center justify-between container mx-auto px-6 py-4">
        <Logo lang={lang} />
        <Navigation lang={lang} />
        <LanguageSelector lang={lang} />
      </div>
    </header>
  );
}
