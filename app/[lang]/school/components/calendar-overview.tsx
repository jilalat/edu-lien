import { Card } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface CalendarOverviewProps {
  events: string[];
}

export default function CalendarOverview({ events }: CalendarOverviewProps) {
  return (
    <Card className="p-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
      </div>
      <div className="space-y-2">
        {events.map((event, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
            <span>{event}</span>
            <span className="text-sm text-muted-foreground">In 3 days</span>
          </div>
        ))}
      </div>
    </Card>
  );
}