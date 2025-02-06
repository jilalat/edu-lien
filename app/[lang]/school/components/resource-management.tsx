import { Card } from '@/components/ui/card';
import { Book } from 'lucide-react';
import CardHeading from '@/components/dashboard/card-heading';
import CardWrapper from '@/components/dashboard/card-wrapper';

interface ResourceManagementProps {
  dict: {
    title: string;
    library: {
      manageBooks: string;
      trackBorrowing: string;
      generateReports: string;
    };
    labs: {
      manageEquipment: string;
      trackUsage: string;
      generateReports: string;
    };
    sports: {
      manageEquipment: string;
      trackUsage: string;
      generateReports: string;
    };
    features: Array<string>;
  };
}

export default function ResourceManagement({ dict }: ResourceManagementProps) {
  return (
    <CardWrapper icon={Book} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Library:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.library.manageBooks}</li>
          <li>{dict.library.trackBorrowing}</li>
          <li>{dict.library.generateReports}</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Labs:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.labs.manageEquipment}</li>
          <li>{dict.labs.trackUsage}</li>
          <li>{dict.labs.generateReports}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Sports:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.sports.manageEquipment}</li>
          <li>{dict.sports.trackUsage}</li>
          <li>{dict.sports.generateReports}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
