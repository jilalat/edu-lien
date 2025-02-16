'use client';

import { routes } from '@/config/routes';
import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import langData from './lang.json';
import logo from './images/logo.png';

export function Logo({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <Link
      href={routes.home(lang)}
      className="text-2xl font-bold text-primary flex items-center gap-2"
      title={dict.home}
    >
      <Image src={logo} alt="EduLien Logo" width={32} height={32} />
      <span className="font-bold text-lg">Effortless CV</span>
    </Link>
  );
}
