'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import Link from 'next/link';
import { useState } from 'react';

interface ForgotFormProps {
  dict: {
    common: {
      emailLabel: string;
      backToLogin: string;
      resetButton: string;
    };
  };
  lang: string;
}

export function ForgotForm({ dict, lang }: ForgotFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder={dict.common.emailLabel}
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        disabled={isLoading}
      />
      <div className="flex gap-4">
        <Button type="submit" className="flex-1" disabled={isLoading}>
          {isLoading ? 'Loading...' : dict.common.resetButton}
        </Button>
        <Link href={routes.auth.login(lang)} className="flex-1">
          <Button variant="outline" className="w-full">
            {dict.common.backToLogin}
          </Button>
        </Link>
      </div>
    </form>
  );
}
