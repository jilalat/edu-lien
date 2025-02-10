import CardWrapper from '@//components/dashboard/card-wrapper';
import { BookOpen } from 'lucide-react';

interface HomeworkTrackingProps {
  dict: {
    title: string;
    monitorAssignments: string;
    receiveAlerts: string;
    assignments: Array<{
      title: string;
      deadline: string;
      subject: string;
      status: string;
    }>;
  };
}

export default function HomeworkTracking({ dict }: HomeworkTrackingProps) {
  return (
    <CardWrapper icon={BookOpen} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.monitorAssignments}</li>
        <li>{dict.receiveAlerts}</li>
      </ul>
      <h3 className="font-medium mt-4">Assignments:</h3>
      <ul className="space-y-4">
        {dict.assignments.map((assignment, index) => (
          <li key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <strong>{assignment.title}</strong> - {assignment.subject},{' '}
            {assignment.deadline}, {assignment.status}
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}
