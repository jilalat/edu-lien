import CardWrapper from '@//components/dashboard/card-wrapper';
import { TrendingUp } from 'lucide-react';

interface ProgressReportsProps {
  dict: {
    title: string;
    viewGrades: string;
    attendance: string;
    teacherFeedback: string;
    charts: {
      academicPerformance: string;
      attendanceTrends: string;
    };
    aiInsights: {
      areasForImprovement: string;
      suggestions: string;
    };
    stats: {
      attendancePercentage: string;
      completedAssignments: string;
      averageGrade: string;
    };
  };
}

export default function ProgressReports({ dict }: ProgressReportsProps) {
  return (
    <CardWrapper icon={TrendingUp} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">{dict.viewGrades}:</strong>
        <p className="text-sm text-muted-foreground">
          Average Grade: {dict.stats.averageGrade}
        </p>
        <p className="text-sm text-muted-foreground">
          Completed Assignments: {dict.stats.completedAssignments}
        </p>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">{dict.attendance}:</strong>
        <p className="text-sm text-muted-foreground">
          Attendance Percentage: {dict.stats.attendancePercentage}
        </p>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          {dict.teacherFeedback}:
        </strong>
        <p className="text-sm text-muted-foreground">
          Great work on recent assignments!
        </p>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Charts:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.charts.academicPerformance}</li>
          <li>{dict.charts.attendanceTrends}</li>
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">
          {dict.aiInsights.areasForImprovement}:
        </strong>
        <p className="text-sm text-muted-foreground">
          {dict.aiInsights.suggestions}
        </p>
      </div>
    </CardWrapper>
  );
}
