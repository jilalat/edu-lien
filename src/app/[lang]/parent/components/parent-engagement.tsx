import CardWrapper from '@//components/dashboard/card-wrapper';
import { Users } from 'lucide-react';

interface ParentEngagementProps {
  dict: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function ParentEngagement({ dict }: ParentEngagementProps) {
  return (
    <CardWrapper icon={Users} title={dict.title}>
      <p className="mb-4">{dict.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {dict.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </CardWrapper>
  );
}
