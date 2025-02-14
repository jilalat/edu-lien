'use client';

import logo from './logo.png';
import { routes } from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  dict: {
    home: string;
  };
  lang: string;
}

export function Logo({ dict, lang }: LogoProps) {
  return (
    <Link
      href={routes.home(lang)}
      className="flex items-center space-x-2"
      title={dict.home}
    >
      <Image src={logo} alt="EduLien Logo" width={32} height={32} />
      <span className="font-bold text-lg">Effortness</span>
    </Link>
  );
}
