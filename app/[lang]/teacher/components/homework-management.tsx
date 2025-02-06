import CardWrapper from '@/components/dashboard/card-wrapper';
import { BookOpen } from 'lucide-react';

interface HomeworkManagementProps {
  dict: {
    title: string;
    assignHomework: string;
    reviewSubmissions: string;
    automatedGrading: string;
    reminders: string;
    assignments: Array<{
      title: string;
      subject: string;
      deadline: string;
      status: string;
    }>;
  };
}

export default function HomeworkManagement({ dict }: HomeworkManagementProps) {
  return (
    <CardWrapper icon={BookOpen} title={dict.title}>
      <ul className="space-y-4 mt-4">
        <li>{dict.assignHomework}</li>
        <li>{dict.reviewSubmissions}</li>
        <li>{dict.automatedGrading}</li>
        <li>{dict.reminders}</li>
      </ul>
      <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {dict.assignments.map((assignment, index) => (
          <article key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{assignment.title}</h3>
            <p className="text-sm text-gray-600">
              Subject: {assignment.subject}
            </p>
            <p className="text-sm text-gray-600">
              Deadline: {assignment.deadline}
            </p>
            <p className="text-sm text-gray-600">Status: {assignment.status}</p>
          </article>
        ))}
      </div>
    </CardWrapper>
  );
}
