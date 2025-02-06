import CardWrapper from '@/components/dashboard/card-wrapper';
import { GraduationCap } from 'lucide-react';

interface ProfessionalDevelopmentProps {
  dict: {
    title: string;
    courses: string;
    certifications: string;
    feedback: string;
    coursesList: Array<{
      title: string;
      startDate: string;
      endDate: string;
      status: string;
    }>;
  };
}

export default function ProfessionalDevelopment({
  dict,
}: ProfessionalDevelopmentProps) {
  return (
    <CardWrapper icon={GraduationCap} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.courses}</li>
        <li>{dict.certifications}</li>
        <li>{dict.feedback}</li>
      </ul>
      <div className="mt-4">
        <h3 className="font-medium mb-2">Courses Enrolled</h3>
        <ul className="space-y-2">
          {dict.coursesList.map((course, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
            >
              <span>{course.title}</span>
              <span className="text-sm text-gray-500">
                {course.startDate} - {course.endDate} ({course.status})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}
