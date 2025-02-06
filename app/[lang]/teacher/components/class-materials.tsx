import CardWrapper from '@/components/dashboard/card-wrapper';
import { File } from 'lucide-react';

interface ClassMaterialsProps {
  dict: {
    title: string;
    uploadResources: string;
    organizeBy: { class: string; subject: string };
    resources: Array<{
      name: string;
      type: string;
      uploadedBy: string;
      dateUploaded: string;
    }>;
  };
}

export default function ClassMaterials({ dict }: ClassMaterialsProps) {
  return (
    <CardWrapper icon={File} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.uploadResources}</li>
        <li>{dict.organizeBy.class}</li>
        <li>{dict.organizeBy.subject}</li>
      </ul>
      <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {dict.resources.map((resource, index) => (
          <article key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{resource.name}</h3>
            <p className="text-sm text-gray-600">Type: {resource.type}</p>
            <p className="text-sm text-gray-600">
              Uploaded By: {resource.uploadedBy}
            </p>
            <p className="text-sm text-gray-600">
              Date Uploaded: {resource.dateUploaded}
            </p>
          </article>
        ))}
      </div>
    </CardWrapper>
  );
}
