import CardWrapper from '@//components/dashboard/card-wrapper';
import { Trophy } from 'lucide-react';

interface ExtracurricularActivitiesProps {
  dict: {
    title: string;
    trackActivities: string;
    upcomingEvents: string;
    performanceUpdates: string;
  };
}

export default function ExtracurricularActivities({
  dict,
}: ExtracurricularActivitiesProps) {
  return (
    <CardWrapper icon={Trophy} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.trackActivities}</li>
        <li>{dict.upcomingEvents}</li>
        <li>{dict.performanceUpdates}</li>
      </ul>
    </CardWrapper>
  );
}
