import CardWrapper from '@//components/dashboard/card-wrapper';
import { AlertCircle } from 'lucide-react';

interface ChildSafetyAlertsProps {
  dict: {
    title: string;
    missedSchool: string;
    earlyDeparture: string;
    healthUpdates: string;
    busSchedule: string;
  };
}

export default function ChildSafetyAlerts({ dict }: ChildSafetyAlertsProps) {
  return (
    <CardWrapper icon={AlertCircle} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.missedSchool}</li>
        <li>{dict.earlyDeparture}</li>
        <li>{dict.healthUpdates}</li>
        <li>{dict.busSchedule}</li>
      </ul>
    </CardWrapper>
  );
}
