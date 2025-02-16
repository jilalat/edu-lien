'use client';

import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import Link from 'next/link';
import langData from './lang.json';
import { routes } from '@/config/routes';

export function Navigation({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <nav className="">
      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <Link
            href={routes.navigation.howItWorks(lang)}
            className="text-gray-600 hover:text-primary"
          >
            {dict.howItWorks}
          </Link>
        </li>
        <li>
          <Link
            href={routes.navigation.features(lang)}
            className="text-gray-600 hover:text-primary"
          >
            {dict.features}
          </Link>
        </li>
        <li>
          <Link
            href={routes.navigation.templates(lang)}
            className="text-gray-600 hover:text-primary"
          >
            {dict.testimonials}
          </Link>
        </li>
        <li>
          <Link
            href={routes.navigation.templates(lang)}
            className="text-gray-600 hover:text-primary"
          >
            {dict.templates}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
