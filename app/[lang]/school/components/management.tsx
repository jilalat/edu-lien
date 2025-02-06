import CardWrapper from '@/components/dashboard/card-wrapper';
import ListSection from '@/components/dashboard/list-section';
import { Users } from 'lucide-react';

interface ManagementProps {
  dict: {
    title: string;
    categories: Array<{
      name: string;
      actions: Array<string>;
    }>;
    features: Array<string>;
  };
}

export default function Management({ dict }: ManagementProps) {
  return (
    <CardWrapper icon={Users} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">User Categories:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.categories.map((category, index) => (
            <li key={index}>
              <strong>{category.name}:</strong> {category.actions.join(', ')}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Features:</strong>
        <ListSection
          dict={dict.features.reduce(
            (acc, feature) => ({ ...acc, [feature]: feature }),
            {} as Record<string, string>
          )}
        />
      </div>
    </CardWrapper>
  );
}
