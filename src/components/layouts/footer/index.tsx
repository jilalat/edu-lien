'use client';

import { routes } from '@/config/routes';
import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import Link from 'next/link';
import langData from './lang.json';

export async function Footer({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <footer className="border-t border-gray-300 bg-background/95 backdrop-blur-md shadow-lg px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between mx-auto py-6 text-sm text-muted-foreground">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <Link
            href={routes.home(lang)}
            className="font-bold text-primary hover:text-primary/80 transition duration-200"
          >
            EduLien
          </Link>
          . {dict.copyrightNotice}.
        </div>
        <div className="mt-3 md:mt-0 text-center md:text-right">
          {dict.credits}
          <Link
            href={routes.external.f12Solutions()}
            className="font-bold text-primary hover:text-primary/80 transition duration-200 ml-1"
          >
            F12Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
