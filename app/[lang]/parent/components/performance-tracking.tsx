import CardWrapper from '@/components/dashboard/card-wrapper';
import { TrendingUp } from 'lucide-react';

interface PerformanceTrackingProps {
  dict: {
    title: string;
    viewGrades: string;
    attendanceRecord: string;
    teacherComments: string;
    charts: { academicPerformance: string; attendanceTrends: string };
    aiInsights: { areasForImprovement: string; suggestions: string };
    stats: {
      attendancePercentage: string;
      completedAssignments: string;
      averageGrade: string;
    };
  };
}

export default function PerformanceTracking({
  dict,
}: PerformanceTrackingProps) {
  return (
    <CardWrapper icon={TrendingUp} title={dict.title}>
      <ul className="space-y-2">
        <li>{dict.viewGrades}</li>
        <li>{dict.attendanceRecord}</li>
        <li>{dict.teacherComments}</li>
      </ul>
      <h3 className="font-medium mt-4">Charts:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>{dict.charts.academicPerformance}</li>
        <li>{dict.charts.attendanceTrends}</li>
      </ul>
      <h3 className="font-medium mt-4">AI Insights:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>{dict.aiInsights.areasForImprovement}</li>
        <li>{dict.aiInsights.suggestions}</li>
      </ul>
      <h3 className="font-medium mt-4">Stats:</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Attendance Percentage: {dict.stats.attendancePercentage}</li>
        <li>Completed Assignments: {dict.stats.completedAssignments}</li>
        <li>Average Grade: {dict.stats.averageGrade}</li>
      </ul>
    </CardWrapper>
  );
}
