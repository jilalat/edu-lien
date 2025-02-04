'use client';

import { routes } from '@/config/routes';
import { UserCircle2 } from 'lucide-react';
import Link from 'next/link';

interface LogInProps {
  dict: {
    login: string;
  };
  lang: string;
}

export function LogIn({ dict, lang }: LogInProps) {
  return (
    <Link
      href={routes.auth.login(lang)}
      className="flex items-center space-x-2"
      title={dict.login}
    >
      <UserCircle2 className="h-5 w-5" />
      <span className="sr-only">{dict.login}</span>
    </Link>
  );
}
