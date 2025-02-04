'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { routes } from '@/config/routes';
import { useToast } from '@/hooks/use-toast';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface LoginFormProps {
  dict: {
    title: string;
    description: string;
    usernameLabel: string;
    passwordLabel: string;
    rememberMe: string;
    submitButton: string;
    forgotPassword: string;
  };
  lang: string;
}

export function LoginForm({ dict, lang }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const supabase = createClientComponentClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const {
        data: { user },
        error: signInError,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        throw signInError;
      }

      if (!user) {
        throw new Error('No user found');
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('role')
        .eq('id', user.id)
        .single();

      if (userError) {
        throw userError;
      }

      if (!userData?.role) {
        throw new Error('User role not found');
      }

      router.push(routes.roleBasedRoute(lang, userData.role));
      router.refresh();
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Failed to sign in',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder={dict.usernameLabel}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background"
        />
        <Input
          type="password"
          placeholder={dict.passwordLabel}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background"
        />
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
          <Link
            href={routes.auth.forgotPassword(lang)}
            className="text-sm text-primary hover:underline"
          >
            {dict.forgotPassword}
          </Link>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Loading...' : dict.submitButton}
        </Button>
      </form>
    </div>
  );
}
