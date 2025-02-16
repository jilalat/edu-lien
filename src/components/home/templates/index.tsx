'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getDictionary } from '@/lib/dictionary';
import { langType } from '@/types';
import { motion } from 'framer-motion';
import langData from './lang.json';

const templateImages = [
  'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop',
];

export function Templates({ lang }: langType) {
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
          {templateImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image}
                      alt={`Template ${index + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="text-white border-white"
                      >
                        {dict.previewTemplateBtn}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {dict.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
