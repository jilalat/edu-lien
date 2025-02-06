import CardWrapper from '@/components/dashboard/card-wrapper';
import { ChartBar } from 'lucide-react';

interface OverviewProps {
  dict: {
    title: string;
    stats: {
      totalStudents: string;
      totalTeachers: string;
      totalParents: string;
      averageAttendance: string;
      activeClasses: string;
      monthlyEnrollments: string;
      pendingFeePayments: string;
      upcomingEvents: string;
    };
    quickActions: {
      addNewStudent: string;
      addNewTeacher: string;
      sendAnnouncement: string;
      generateReport: string;
    };
  };
}

export default function Overview({ dict }: OverviewProps) {
  return (
    <CardWrapper icon={ChartBar} title={dict.title}>
      <div className="space-y-4">
        <strong className="block font-medium mb-2">Key Statistics:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>Total Students: {dict.stats.totalStudents}</li>
          <li>Total Teachers: {dict.stats.totalTeachers}</li>
          <li>Total Parents: {dict.stats.totalParents}</li>
          <li>Average Attendance: {dict.stats.averageAttendance}</li>
          <li>Active Classes: {dict.stats.activeClasses}</li>
          <li>Monthly Enrollments: {dict.stats.monthlyEnrollments}</li>
          <li>Pending Fee Payments: {dict.stats.pendingFeePayments}</li>
          <li>Upcoming Events: {dict.stats.upcomingEvents}</li>
        </ul>
        <strong className="block font-medium mb-2">Quick Actions:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.quickActions.addNewStudent}</li>
          <li>{dict.quickActions.addNewTeacher}</li>
          <li>{dict.quickActions.sendAnnouncement}</li>
          <li>{dict.quickActions.generateReport}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
