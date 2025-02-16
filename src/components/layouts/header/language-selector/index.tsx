'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import Image from 'next/image';
import langData from './lang.json';
import { useLanguageSelector } from './logic';
import { languages } from '@/config/dictionaries';

export function LanguageSelector({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  const { handleLanguageChange, selectedLanguage } =
    useLanguageSelector(languages);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          title={dict.languageSelection}
        >
          <Image
            src={selectedLanguage?.flag}
            alt={selectedLanguage?.name}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map(language => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-2 w-full">
              <Image
                src={language.flag}
                alt={language.name}
                width={20}
                height={20}
              />
              <span>{language.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
