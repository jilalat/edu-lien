import CardWrapper from '@/components/dashboard/card-wrapper';
import { Calendar } from 'lucide-react';

interface LessonPlanningProps {
  dict: {
    title: string;
    createLessonPlans: string;
    shareWithAdmins: string;
    shareWithStudents: string;
    syncCalendars: string;
    lessonPlans: Array<{ title: string; date: string; class: string }>;
  };
}

export default function LessonPlanning({ dict }: LessonPlanningProps) {
  return (
    <CardWrapper icon={Calendar} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.createLessonPlans}</li>
        <li>{dict.shareWithAdmins}</li>
        <li>{dict.shareWithStudents}</li>
        <li>{dict.syncCalendars}</li>
      </ul>
      <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {dict.lessonPlans.map((plan, index) => (
          <article key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{plan.title}</h3>
            <p className="text-sm text-gray-600">Class: {plan.class}</p>
            <p className="text-sm text-gray-600">Date: {plan.date}</p>
          </article>
        ))}
      </div>
    </CardWrapper>
  );
}
