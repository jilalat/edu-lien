'use client';

import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Palette,
  Rocket,
  BookTemplate as Template,
} from 'lucide-react';
import langData from './lang.json';

const icons = {
  0: Template,
  1: Palette,
  2: Rocket,
};

export function HowItWorks({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {dict.steps.map((step: any, index: number) => {
            const Icon = icons[index as keyof typeof icons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 bg-primary/5 rounded-full">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-gray-300" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
