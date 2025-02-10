import CardWrapper from '@//components/dashboard/card-wrapper';
import { BookOpen } from 'lucide-react';

interface SchoolResourcesProps {
  dict: {
    title: string;
    libraryAccess: string;
    tutoringServices: string;
    parentWorkshops: string;
  };
}

export default function SchoolResources({ dict }: SchoolResourcesProps) {
  return (
    <CardWrapper icon={BookOpen} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.libraryAccess}</li>
        <li>{dict.tutoringServices}</li>
        <li>{dict.parentWorkshops}</li>
      </ul>
    </CardWrapper>
  );
}
