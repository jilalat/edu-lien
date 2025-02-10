import CardWrapper from '@//components/dashboard/card-wrapper';
import { HeartPulse } from 'lucide-react';

interface HealthAndWellnessProps {
  dict: {
    title: string;
    healthUpdates: string;
    mentalHealthResources: string;
    nutritionTips: string;
  };
}

export default function HealthAndWellness({ dict }: HealthAndWellnessProps) {
  return (
    <CardWrapper icon={HeartPulse} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.healthUpdates}</li>
        <li>{dict.mentalHealthResources}</li>
        <li>{dict.nutritionTips}</li>
      </ul>
    </CardWrapper>
  );
}
