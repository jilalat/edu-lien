import { Card } from '@/components/ui/card';
import {
  BookOpen,
  Bus,
  DollarSign,
  GraduationCap,
  Shield,
  Users,
} from 'lucide-react';

interface ManagementCardsProps {
  title: string;
  icon: React.ComponentType<any>;
  items: string[];
  color: string;
}

const cards: ManagementCardsProps[] = [
  {
    title: 'Academic Management',
    icon: BookOpen,
    items: ['Curriculum Planning', 'Class Schedules', 'Exam Management'],
    color: 'blue',
  },
  {
    title: 'Staff Management',
    icon: Users,
    items: ['Teacher Records', 'Staff Attendance', 'Performance Reviews'],
    color: 'green',
  },
  {
    title: 'Student Affairs',
    icon: GraduationCap,
    items: ['Enrollment', 'Attendance', 'Disciplinary Records'],
    color: 'yellow',
  },
  {
    title: 'Financial Management',
    icon: DollarSign,
    items: ['Fee Collection', 'Expenses', 'Financial Reports'],
    color: 'purple',
  },
  {
    title: 'Transportation',
    icon: Bus,
    items: ['Route Management', 'Vehicle Maintenance', 'Driver Records'],
    color: 'red',
  },
  {
    title: 'Security & Safety',
    icon: Shield,
    items: ['Access Control', 'Emergency Protocols', 'Safety Reports'],
    color: 'indigo',
  },
];

export default function ManagementCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`p-6 bg-${card.color}-100 dark:bg-${card.color}-900`}
        >
          <div className="flex items-center space-x-2 mb-4">
            <card.icon className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </div>
          <ul className="space-y-2">
            {card.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
