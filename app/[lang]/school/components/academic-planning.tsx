import CardWrapper from '@/components/dashboard/card-wrapper';
import { Calendar } from 'lucide-react';

interface AcademicPlanningProps {
  dict: {
    title: string;
    curriculumManagement: {
      viewCurriculum: string;
      updateCurriculum: string;
      assignSubjects: string;
    };
    examScheduling: {
      createExams: string;
      viewExams: string;
      generateHallTickets: string;
    };
    academicCalendar: {
      viewCalendar: string;
      updateCalendar: string;
    };
    features: Array<string>;
  };
}

export default function AcademicPlanning({ dict }: AcademicPlanningProps) {
  return (
    <CardWrapper icon={Calendar} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          Curriculum Management:
        </strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.curriculumManagement.viewCurriculum}</li>
          <li>{dict.curriculumManagement.updateCurriculum}</li>
          <li>{dict.curriculumManagement.assignSubjects}</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Exam Scheduling:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.examScheduling.createExams}</li>
          <li>{dict.examScheduling.viewExams}</li>
          <li>{dict.examScheduling.generateHallTickets}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Academic Calendar:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.academicCalendar.viewCalendar}</li>
          <li>{dict.academicCalendar.updateCalendar}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
