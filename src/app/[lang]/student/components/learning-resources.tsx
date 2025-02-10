import CardWrapper from '@//components/dashboard/card-wrapper';
import { File } from 'lucide-react';

interface LearningResourcesProps {
  dict: {
    title: string;
    accessMaterials: string;
    organizeBy: {
      subject: string;
      date: string;
      priority: string;
    };
    offlineAccess: string;
    categories: string[];
  };
}

export default function LearningResources({ dict }: LearningResourcesProps) {
  return (
    <CardWrapper icon={File} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          {dict.accessMaterials}:
        </strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          Organize Resources By:
        </strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.organizeBy.subject}</li>
          <li>{dict.organizeBy.date}</li>
          <li>{dict.organizeBy.priority}</li>
        </ul>
      </div>
      <div>
        <p>{dict.offlineAccess}</p>
      </div>
    </CardWrapper>
  );
}
