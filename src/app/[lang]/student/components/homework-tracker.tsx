import CardWrapper from '@//components/dashboard/card-wrapper';
import { BookOpen } from 'lucide-react';

interface Assignment {
  title: string;
  deadline: string;
  subject: string;
  status: string;
}

interface HomeworkTrackerProps {
  dict: {
    title: string;
    viewAll: string;
    submitAssignment: string;
    trackProgress: string;
    attachments: {
      uploadFile: string;
      supportedFormats: string;
    };
    reminders: {
      aiReminders: string;
      approachingDeadlines: string;
    };
    assignments: Assignment[];
  };
}

export default function HomeworkTracker({ dict }: HomeworkTrackerProps) {
  return (
    <CardWrapper icon={BookOpen} title={dict.title}>
      <div className="space-y-4">
        {dict.assignments.map((assignment, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow-sm">
            <h3 className="font-medium mb-2">{assignment.title}</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Subject:</strong> {assignment.subject}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Deadline:</strong> {assignment.deadline}
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Status:</strong> {assignment.status}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button className="text-sm font-medium text-primary">
                {dict.submitAssignment}
              </button>
              <p className="text-sm text-muted-foreground">
                {dict.reminders.approachingDeadlines}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
