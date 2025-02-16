'use client';

import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import { motion } from 'framer-motion';
import { Search, Smartphone, Zap } from 'lucide-react';
import langData from './lang.json';

const icons = {
  0: Smartphone,
  1: Search,
  2: Zap,
};

export function Features({ lang }: langType) {
  const dict = getDictionary(lang, langData);
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
            {dict.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.list.map((feature: any, index: number) => {
            const Icon = icons[index as keyof typeof icons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 bg-white rounded-lg shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
