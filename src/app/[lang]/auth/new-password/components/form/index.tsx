'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getDictionary } from '@/helpers/getDictionary';
import { langType } from '@/types';
import { Eye, EyeOff } from 'lucide-react';
import langData from './lang.json';
import { useNewPasswordForm } from './logic';
import * as styles from './style';

export function NewPasswordForm({ lang }: langType) {
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    handleSubmit,
  } = useNewPasswordForm();

  const dict = getDictionary(lang, langData);

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.passwordInputContainer}>
        <Input
          type={showNewPassword ? 'text' : 'password'}
          placeholder={dict.newPasswordLabel}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowNewPassword(!showNewPassword)}
          className={styles.passwordToggle}
        >
          {showNewPassword ? (
            <Eye className={styles.iconSize} />
          ) : (
            <EyeOff className={styles.iconSize} />
          )}
        </button>
      </div>
      <div className={styles.passwordInputContainer}>
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder={dict.confirmPasswordLabel}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className={styles.passwordToggle}
        >
          {showConfirmPassword ? (
            <Eye className={styles.iconSize} />
          ) : (
            <EyeOff className={styles.iconSize} />
          )}
        </button>
      </div>
      <Button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : dict.submitButton}
      </Button>
    </form>
  );
}
