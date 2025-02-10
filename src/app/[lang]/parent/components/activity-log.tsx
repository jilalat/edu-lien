import CardWrapper from '@//components/dashboard/card-wrapper';
import { Clock } from 'lucide-react';

interface ActivityLogProps {
  dict: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function ActivityLog({ dict }: ActivityLogProps) {
  return (
    <CardWrapper icon={Clock} title={dict.title}>
      <p className="mb-4">{dict.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {dict.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardWrapper>
  );
}
