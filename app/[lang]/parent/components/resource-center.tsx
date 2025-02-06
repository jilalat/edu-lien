import CardWrapper from '@/components/dashboard/card-wrapper';
import { Book } from 'lucide-react';

interface ResourceCenterProps {
  dict: {
    title: string;
    description: string;
    categories: string[];
  };
}

export default function ResourceCenter({ dict }: ResourceCenterProps) {
  return (
    <CardWrapper icon={Book} title={dict.title}>
      <p className="mb-4">{dict.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {dict.categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </CardWrapper>
  );
}
