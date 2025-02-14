'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import { getDictionary } from '@/helpers/getDictionary';
import Link from 'next/link';
import langData from './lang.json';
import { useForgotPasswordForm } from './logic';
import { langType } from '@/types';
import * as styles from './style';

export function ForgotPassword({ lang }: langType) {
  const { email, setEmail, isLoading, handleSubmit } = useForgotPasswordForm();

  const dict = getDictionary(lang, langData);

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <Input
        type="email"
        placeholder={dict.emailLabel}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        disabled={isLoading}
      />
      <div className={styles.buttonGroup}>
        <Button
          type="submit"
          className={styles.primaryButton}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : dict.resetButton}
        </Button>
        <Link href={routes.auth.login(lang)} className={styles.link}>
          <Button variant="outline" className={styles.secondaryButton}>
            {dict.backToLogin}
          </Button>
        </Link>
      </div>
    </form>
  );
}
