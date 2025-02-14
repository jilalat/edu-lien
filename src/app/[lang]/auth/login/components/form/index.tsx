'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import { getDictionary } from '@/helpers/getDictionary';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import langData from './lang.json';
import { useLoginForm } from './logic';
import { langType } from '@/types';
import * as styles from './style';

export function LoginForm({ lang }: langType) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    rememberMe,
    setRememberMe,
    isLoading,
    handleSubmit,
  } = useLoginForm();

  const dict = getDictionary(lang, langData);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <Input
          type="text"
          placeholder={dict.emailLabel}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className={styles.inputField}
        />
        <div className={styles.passwordContainer}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={dict.passwordLabel}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className={styles.inputField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.passwordToggle}
          >
            {showPassword ? (
              <Eye className={styles.iconSize} />
            ) : (
              <EyeOff className={styles.iconSize} />
            )}
          </button>
        </div>
        <Link
          href={routes.auth.forgotPassword(lang)}
          className={styles.forgotPasswordLink}
        >
          {dict.forgotPassword}
        </Link>
        <div className={styles.rowWithActions}>
          <div className={styles.checkboxWrapper}>
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={checked => setRememberMe(checked as boolean)}
            />
            <label htmlFor="rememberMe" className={styles.checkboxLabel}>
              {dict.rememberMe}
            </label>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <Button
            type="submit"
            className={styles.primaryButton}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : dict.submitButton}
          </Button>
          <Link href={routes.home(lang)} className={styles.linkContainer}>
            <Button variant="outline" className={styles.secondaryButton}>
              {dict.backToHome}
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
