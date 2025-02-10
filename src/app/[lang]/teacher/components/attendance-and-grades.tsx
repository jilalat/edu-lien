import CardWrapper from '@//components/dashboard/card-wrapper';
import { Users } from 'lucide-react';

interface AttendanceAndGradesProps {
  dict: {
    title: string;
    markAttendance: string;
    inputGrades: string;
    shareProgressReports: string;
    viewAnalytics: string;
    students: Array<{
      name: string;
      class: string;
      attendancePercentage: string;
      averageGrade: string;
    }>;
  };
}

export default function AttendanceAndGrades({
  dict,
}: AttendanceAndGradesProps) {
  return (
    <CardWrapper icon={Users} title={dict.title}>
      <ul className="space-y-2 mt-4">
        <li>{dict.markAttendance}</li>
        <li>{dict.inputGrades}</li>
        <li>{dict.shareProgressReports}</li>
        <li>{dict.viewAnalytics}</li>
      </ul>
      <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {dict.students.map((student, index) => (
          <article key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-medium">{student.name}</h3>
            <p className="text-sm text-gray-600">Class: {student.class}</p>
            <p className="text-sm text-gray-600">
              Attendance: {student.attendancePercentage}
            </p>
            <p className="text-sm text-gray-600">
              Average Grade: {student.averageGrade}
            </p>
          </article>
        ))}
      </div>
    </CardWrapper>
  );
}
