'use client';
import { routes } from '@/config/routes';
import Link from 'next/link';
import langData from './lang.json';
import * as styles from './style'; // Import styles
import { getDictionary } from '@/helpers/getDictionary';

export default async function NotFoundPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang, langData);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{dict.title}</h1>
        <p className={styles.description}>{dict.description}</p>
        <Link href={routes.home(lang)} passHref legacyBehavior>
          <a className={styles.button}>{dict.backToHome}</a>
        </Link>
      </div>
    </div>
  );
}
