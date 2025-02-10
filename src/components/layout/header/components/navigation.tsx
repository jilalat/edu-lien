'use client';

import { routes } from '@//config/routes';
import Link from 'next/link';

export function Navigation({ lang }: { lang: string }) {
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          href={routes.dashboards.student(lang)}
          className="font-bold text-lg"
        >
          Student
        </Link>
      </li>
      <li>
        <Link
          href={routes.dashboards.parent(lang)}
          className="font-bold text-lg"
        >
          Parent
        </Link>
      </li>
      <li>
        <Link
          href={routes.dashboards.teacher(lang)}
          className="font-bold text-lg"
        >
          Teacher
        </Link>
      </li>
      <li>
        <Link
          href={routes.dashboards.school(lang)}
          className="font-bold text-lg"
        >
          School
        </Link>
      </li>
    </ul>
  );
}
