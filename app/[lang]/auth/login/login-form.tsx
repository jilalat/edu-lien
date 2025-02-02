'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface LoginFormProps {
  dict: {
    usernamePlaceholder: string;
    passwordPlaceholder: string;
    submit: string;
  };
  lang: string;
}

export function LoginForm({ dict, lang }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error('Invalid credentials');

      const { userId, role } = await response.json();
      router.push(`/${lang}/${role}/${userId}`);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid credentials',
        variant: 'destructive',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder={dict.usernamePlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder={dict.passwordPlaceholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        {dict.submit}
      </Button>
    </form>
  );
}