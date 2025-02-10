import CardWrapper from '@//components/dashboard/card-wrapper';
import { CalendarDays } from 'lucide-react';

interface ClassScheduleProps {
  dict: {
    title: string;
    dailyTimetable: string;
    upcomingLessons: string;
    syncCalendars: string;
    calendarOptions: string[];
  };
}

export default function ClassSchedule({ dict }: ClassScheduleProps) {
  return (
    <CardWrapper icon={CalendarDays} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          {dict.dailyTimetable}:
        </strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>9:00 AM - Math</li>
          <li>10:00 AM - Science</li>
          <li>11:00 AM - History</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          {dict.upcomingLessons}:
        </strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>Math Quiz - Tomorrow</li>
          <li>Science Project - Due Next Week</li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">
          {dict.syncCalendars}:
        </strong>
        <p>Sync your class schedule with the following personal calendars:</p>
        <ul className="list-disc pl-5 space-y-2">
          {dict.calendarOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
}
