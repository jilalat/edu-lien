'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

interface FeaturesSectionProps {
  dict: {
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {dict.features.title}
        </h2>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
