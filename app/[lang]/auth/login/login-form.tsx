'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import Link from 'next/link';
import { useState } from 'react';

interface LoginFormProps {
  dict: {
    title: string;
    description: string;
    identifierLabel: string;
    passwordLabel: string;
    rememberMe: string;
    submitButton: string;
    forgotPassword: string;
    forgotIdentifier: string;
    emailLabel: string;
    backToHome: string;
  };
  lang: string;
}

export function LoginForm({ dict, lang }: LoginFormProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add login logic here
    setIsLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder={dict.identifierLabel}
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background"
        />
        <Link
          href={routes.auth.forgotIdentifier(lang)}
          className="text-sm text-primary hover:underline block text-right"
        >
          {dict.forgotIdentifier}
        </Link>
        <Input
          type="password"
          placeholder={dict.passwordLabel}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background"
        />
        <Link
          href={routes.auth.forgotPassword(lang)}
          className="text-sm text-primary hover:underline block text-right"
        >
          {dict.forgotPassword}
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={checked => setRememberMe(checked as boolean)}
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {dict.rememberMe}
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Loading...' : dict.submitButton}
          </Button>
          <Link href={routes.home(lang)} className="flex-1">
            <Button variant="outline" className="w-full">
              {dict.backToHome}
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
