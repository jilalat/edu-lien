'use client';

import { getDictionary } from '@/lib/dictionary';
import Link from 'next/link';

export async function Footer({ lang }: { lang: string }) {
  const dict = await getDictionary(lang);
  return (
    <footer className="border-t border-gray-300 bg-background/95 backdrop-blur-md shadow-lg px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between mx-auto py-6 text-sm text-muted-foreground">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <Link
            href="https://f12solutions.com"
            className="font-bold text-primary hover:text-primary/80 transition duration-200"
          >
            EduLien
          </Link>
          . {dict.footer.copyrightNotice}.
        </div>
        <div className="mt-3 md:mt-0 text-center md:text-right">
          {dict.footer.credits}
          <Link
            href="https://f12solutions.com"
            className="font-bold text-primary hover:text-primary/80 transition duration-200 ml-1"
          >
            F12Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
}
