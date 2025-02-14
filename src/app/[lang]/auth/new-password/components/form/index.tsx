'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { useNewPasswordForm } from './logic';

interface NewPasswordFormProps {
  dict: {
    newPassword: {
      newPasswordLabel: string;
      confirmPasswordLabel: string;
      submitButton: string;
    };
  };
  lang: string;
}

export function NewPasswordForm({ dict, lang }: NewPasswordFormProps) {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Input
          type={showNewPassword ? 'text' : 'password'}
          placeholder={dict.newPassword.newPasswordLabel}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowNewPassword(!showNewPassword)}
          className="password-toggle absolute top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          {showNewPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="relative">
        <Input
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder={dict.newPassword.confirmPasswordLabel}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="password-toggle absolute top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          {showConfirmPassword ? (
            <Eye className="h-4 w-4" />
          ) : (
            <EyeOff className="h-4 w-4" />
          )}
        </button>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Loading...' : dict.newPassword.submitButton}
      </Button>
    </form>
  );
}
