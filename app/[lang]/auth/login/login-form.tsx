'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface LoginFormProps {
  dict: {
    common: {
      emailLabel: string;
      backToHome: string;
    };
    login: {
      title: string;
      description: string;
      identifierLabel: string;
      passwordLabel: string;
      rememberMe: string;
      submitButton: string;
      forgotPassword: string;
      forgotIdentifier: string;
    };
  };
  lang: string;
}

export function LoginForm({ dict, lang }: LoginFormProps) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
          placeholder={dict.login.identifierLabel}
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
          {dict.login.forgotIdentifier}
        </Link>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={dict.login.passwordLabel}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="bg-background"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-toggle absolute top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </button>
        </div>
        <Link
          href={routes.auth.forgotPassword(lang)}
          className="text-sm text-primary hover:underline block text-right"
        >
          {dict.login.forgotPassword}
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Checkbox
              id="rememberMe"
              checked={rememberMe}
              onCheckedChange={checked => setRememberMe(checked as boolean)}
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {dict.login.rememberMe}
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="flex-1" disabled={isLoading}>
            {isLoading ? 'Loading...' : dict.login.submitButton}
          </Button>
          <Link href={routes.home(lang)} className="flex-1">
            <Button variant="outline" className="w-full">
              {dict.common.backToHome}
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}