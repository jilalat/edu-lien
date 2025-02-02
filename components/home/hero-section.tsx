'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  dict: {
    hero: {
      title: string;
      description: string;
      cta: string;
    };
    loginForm: {
      title: string;
      description: string;
      usernamePlaceholder: string;
      passwordPlaceholder: string;
      submit: string;
    };
  };
}

export function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {dict.hero.title}
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              {dict.hero.description}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row no-rtl">
              <Button size="lg">{dict.hero.cta}</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>{dict.loginForm.title}</CardTitle>
                <CardDescription>{dict.loginForm.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      id="username"
                      placeholder={dict.loginForm.usernamePlaceholder}
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="password"
                      placeholder={dict.loginForm.passwordPlaceholder}
                      required
                      type="password"
                    />
                  </div>
                  <Button className="w-full">{dict.loginForm.submit}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}