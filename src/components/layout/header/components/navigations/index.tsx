'use client';

import { routes } from '@/config/routes';
import { langType } from '@/types';
import Link from 'next/link';

export function Navigation({ lang }: langType) {
  return (
    <ul className="flex gap-4">
      <li>
        <Link href={routes.cv.home(lang)} className="font-bold text-lg">
          Cv
        </Link>
      </li>
      <li>
        <Link href={routes.invoice.home(lang)} className="font-bold text-lg">
          Invoice
        </Link>
      </li>
    </ul>
  );
}
