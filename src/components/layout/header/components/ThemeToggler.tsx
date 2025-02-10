'use client';

import { Button } from '@//components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeTogglerProps {
  dict: {
    theme: {
      lightMode: string;
      darkMode: string;
    };
  };
}

export function ThemeToggler({ dict }: ThemeTogglerProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full opacity-0"
        aria-hidden="true"
      >
        <Moon className="absolute h-5 w-5" />
      </Button>
    );
  }

  const isLight = theme === 'light';
  const title = isLight ? dict.theme.darkMode : dict.theme.lightMode;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      title={title}
    >
      <Moon className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">{title}</span>
    </Button>
  );
}
