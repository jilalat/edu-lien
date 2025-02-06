import CardWrapper from '@/components/dashboard/card-wrapper';
import { CalendarDays } from 'lucide-react';

interface EventManagementProps {
  dict: {
    title: string;
    upcomingEvents: Array<{
      name: string;
      date: string;
      attendees: Array<string>;
      status: string;
    }>;
    eventActions: Array<string>;
    calendarSync: {
      googleCalendar: string;
      outlookCalendar: string;
    };
    features: Array<string>;
  };
}

export default function EventManagement({ dict }: EventManagementProps) {
  return (
    <CardWrapper icon={CalendarDays} title={dict.title}>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Upcoming Events:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.upcomingEvents.map((event, index) => (
            <li key={index}>
              <strong>{event.name}:</strong> {event.date}, Attendees:{' '}
              {event.attendees.join(', ')}, Status: {event.status}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong className="block font-medium mb-2">Event Actions:</strong>
        <ul className="list-disc pl-5 space-y-2">
          {dict.eventActions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong className="block font-medium mb-2">Calendar Sync:</strong>
        <ul className="list-disc pl-5 space-y-2">
          <li>{dict.calendarSync.googleCalendar}</li>
          <li>{dict.calendarSync.outlookCalendar}</li>
        </ul>
      </div>
    </CardWrapper>
  );
}
