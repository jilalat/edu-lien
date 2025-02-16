'use client';

import { Button } from '@/components/ui/button';
import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import { motion } from 'framer-motion';
import langData from './lang.json';

export function Hero({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 via-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {dict.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
          >
            {dict.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {dict.ctaBtn}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
