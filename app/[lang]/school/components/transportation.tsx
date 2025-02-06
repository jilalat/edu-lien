import CardWrapper from '@/components/dashboard/card-wrapper';
import { Bus } from 'lucide-react';

interface TransportationProps {
  dict: {
    title: string;
    busRoutes: Array<{
      routeName: string;
      studentsAssigned: string;
      status: string;
    }>;
    features: Array<string>;
  };
}

export default function Transportation({ dict }: TransportationProps) {
  return (
    <CardWrapper icon={Bus} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Bus Routes:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.busRoutes.map((route, index) => (
            <li key={index}>
              <strong>{route.routeName}:</strong> Students Assigned:{' '}
              {route.studentsAssigned}, Status: {route.status}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Features:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}
