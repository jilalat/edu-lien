'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NewPasswordFormProps {
  dict: {
    newPasswordLabel: string;
    confirmPasswordLabel: string;
    submitButton: string;
  };
  lang: string;
}

export function NewPasswordForm({ dict, lang }: NewPasswordFormProps) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      // Add error handling for password mismatch
      return;
    }
    setIsLoading(true);
    // Add password update logic here
    router.push(routes.auth.login(lang));
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="password"
        placeholder={dict.newPasswordLabel}
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        required
        disabled={isLoading}
      />
      <Input
        type="password"
        placeholder={dict.confirmPasswordLabel}
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        required
        disabled={isLoading}
      />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Loading...' : dict.submitButton}
      </Button>
    </form>
  );
}